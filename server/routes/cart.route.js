import {Router} from 'express'
import { auth } from '../middlewares/auth.middleware.js'
// import { upload } from '../middlewares/multer.js'
import { addtoCartItem, deleteCartItemQty, getCartItem, updateCartItemQty } from '../controllers/cart.controller.js'


const cartRouter = Router()

cartRouter.post('/add',auth,addtoCartItem)
cartRouter.get('/getCartItem',auth,getCartItem)
cartRouter.get('/update-qty',auth,updateCartItemQty)
cartRouter.delete('/delete-cart-item',auth,deleteCartItemQty)

export default cartRouter