import UserModel from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcrypt"
import VerificationEmail from "../utils/verifyEmailTemplate.js";
import jwt from "jsonwebtoken"
import { ApiResponse } from "../utils/ApiResponse.js";
import sendEmailFun from "../utils/sendEmail.js";
import generateAccessToken from "../utils/generateAccessToken.js";
import generateRefreshToken from "../utils/generateRefreshToken.js";

import {v2 as cloudinary} from "cloudinary" // as rename v2 to cloudinary
import fs from "fs"


//Cloudinary config
  cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});


const registerUser = asyncHandler( async (req,res)=>{

    // let user;
   

    //1. get user details from frontend
    const {name, email, password} = req.body

    //2. Validation

    if(
        [name, email, password].some((field)=> field?.trim()==="")
    ){
        throw new ApiError(400, "All fields are required")
    }

    
    //3. check if user Already exists: email

   let user = await UserModel.findOne({email: email})

    if(user){
        throw new ApiError(409, "User with Email Already Exists")
    }

    // Generate Verification 6 digits OTP

    const verifyCode = Math.floor(100000 + Math.random()* 900000).toString();



    // Bycrpt & Create User

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    user = new UserModel({
        email : email,
        password : hashPassword,
        name: name,
        otp: verifyCode,
        otpExpires: Date.now() + 600000
    })

    await user.save()

    // Send Verification Email
     await sendEmailFun({
        sendTo: email,
        subject: "Verify email from Ecommerce App",
        text: '',
        html: VerificationEmail(name, verifyCode)
    })

    // Create a JWT token for verification purposes

    const token = jwt.sign(
        {email: user.email, id: user._id},
        process.env.JSON_WEB_TOKEN_SECRET_KEY
    )

// Return Response
return res.status(200).json(
    new ApiResponse(200, user, "User registered Successfully")
)



})



const loginUser = asyncHandler(async (req, res) => {

  const { email, password } = req.body

  // (1) Find user by email
  const user = await UserModel.findOne({ email })

  if (!user) throw new ApiError(404, "User does not exist")

  if (user.status !== "Active")
    throw new ApiError(400, "User isn't Active")

  
  if (user.verify_email !== true)
    throw new ApiError(400, "Your Email is not verify ")


  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid)
    return res.status(400).json(new ApiResponse(400, null, "Check your Password"))


  // (2) Generate tokens
  const accessToken = await generateAccessToken(user._id)
  const refreshToken = await generateRefreshToken(user._id)

  // (3) Update last login date
  user.last_login_date = new Date()
  await user.save({ validateBeforeSave: false }) // pre-hooks chalenge

  // (4) Safe user data nikal lo directly from current doc
  const { _id, name } = user
  const safeUser = { _id, name, email }

  // (5) Set cookies + response
  const cookiesOption = {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  }

 
})


//Refresh Token
const refreshToken = asyncHandler(async(req,res)=>{
  try {

    const refreshToken = req.cookies.refreshToken || req?.headers?.authoization?.split(" ")[1]

   if(!refreshToken){
    throw new ApiError(401, "Invalid Token")
   }

   const verifyToken = await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)

   if(!verifyToken){
    throw new ApiError(401, "Token is expired")
   }

   // from auth middleware
   const userId = verifyToken?._id

   //save new Access Token
   const newAccessToken = await generateAccessToken(userId)

   const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "None"
   }

   res.cookie('accessToken', newAccessToken, cookieOptions)

   return res.json({
    message: "New Access Token Generated",
    error: false,
    success: true,
    data: {
      accessToken : newAccessToken
    }
   })

  } catch (error) {

    return res.status(500).json({
      message: error.message || error,
      error: true,
      success:false
    })
    
  }
})




export {
  registerUser,
  verifyEmail,
  loginUser,
  logoutUser,
  forgotPassword,
  verifyForgotPasswordOtp,
  resetPassword,
  refreshToken,
  userDetails
};


