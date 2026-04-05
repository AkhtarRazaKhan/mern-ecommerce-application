import jwt from 'jsonwebtoken'
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'


export const auth = asyncHandler(async(req,res,next)=>{

    try {
    
      const token = req.cookies?.accessToken || req?.headers?.authorization?.split(" ")[1]

      if(!token) {
            throw new ApiError(401, "Login Fist")
        }

    const decodedToken = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

     if(!decodedToken) {
        throw new ApiError(401, "Unauthorized request")
       
     }

     req.userId = decodedToken.id  // Only attaching user ID
     next()

        
    } catch (error) {

         throw new ApiError(401, error?.message || "invalid access token")   
    }
})
