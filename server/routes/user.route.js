import {Router} from 'express'
import {
  forgotPassword,
  loginUser,
  logoutUser,
  refreshToken,
  registerUser,
  removeImageFromCloudinary,
  resetPassword,
  updateUserDetails,
  userAvatar,
  userDetails,
  verifyEmail,
  verifyForgotPasswordOtp
} from "../controllers/user.controller.js";

import { auth } from '../middlewares/auth.middleware.js'
import { upload } from '../middlewares/multer.js'

const userRouter = Router()


userRouter.post('/register', registerUser)
userRouter.post('/verifyEmail', verifyEmail)
userRouter.post('/login',loginUser)
userRouter.get('/logout',auth,logoutUser)
userRouter.put('/user-avatar',auth,upload.array('avatar') ,userAvatar)
userRouter.delete('/deleteImage',auth,removeImageFromCloudinary)
userRouter.put('/:id',auth,updateUserDetails)
userRouter.post('/forgot-password',forgotPassword)
userRouter.post('/verify-forgot-password-otp',verifyForgotPasswordOtp)
userRouter.post('/reset-password',resetPassword)
userRouter.post('/refresh-token',refreshToken)
userRouter.get('/user-details',auth,userDetails)


export default userRouter