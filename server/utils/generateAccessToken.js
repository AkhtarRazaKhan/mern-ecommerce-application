import jwt from 'jsonwebtoken'
// import UserModel from '../models/user.model'

const generateAccessToken= async(userId)=> {

    const token= await jwt.sign(
    {id: userId},
    process.env.ACCESS_TOKEN_SECRET,

    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY}

    )
    return token
}

export default generateAccessToken





