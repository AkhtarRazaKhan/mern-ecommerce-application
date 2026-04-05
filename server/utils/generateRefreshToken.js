import jwt from 'jsonwebtoken'
import UserModel from '../models/user.model.js'

const generateRefreshToken = async(userId)=>{

    const token= await jwt.sign({id: userId},

        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: process.env.REFRESH_TOKEN_EXPIRY}
    )

    const updateRefreshToken = await UserModel.updateOne(
    {_id : userId},
    {
        refresh_token :token
    }
  
   )
return token

}

export default generateRefreshToken