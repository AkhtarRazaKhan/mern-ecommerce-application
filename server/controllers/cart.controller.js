import cartProductModel from "../models/cartproduct.model.js";
import UserModel from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const addtoCartItem = asyncHandler(async(req,res)=>{
    try {

   const userId = req.userId // from Middleware
   const {productId}= req.body

   if(!productId) {
    throw new ApiError(402,"Provide Product Id")
   }

   const checkIetmCart = await cartProductModel.findOne({
    userId: userId,
    productId: productId
   })

   if(!checkIetmCart){
    throw new ApiError(400,"Item Already in Cart")
   }

   const cartItem = new cartProductModel({
    quantity: 1,
    userId: userId,
    productId: productId
   })

   const save = await cartItem.save()

   const updateCartUser = await UserModel.updateOne({_id : userId},{
    $push : {
        shopping_cart : productId
    }
   })

   return res.status(200).json({
    data: save,
    message: "Item Added Successfully",
    error:false,
    success:true

   })
        
    } catch (error) {

      return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
        
    }
})

//get CartItem

const getCartItem = asyncHandler(async(req,res)=>{

    try {

        const userId = req.userId

        const cartItem = await cartProductModel.find({
            userId: userId
        }).populate('productId')

        return res.json({
            data: cartItem,
            error:false,
            success:true
        })
        

    } 
    catch (error) {
      return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
        
    }
})

//Update CartItem
const updateCartItemQty = asyncHandler(async(req,res)=>{
    try {

        const userId = req.userId

        const { _id, qty } = req.body

        if(!_id || !qty){
            throw new ApiError(400,"Provide Id and Qty")
        }

    const updateCartItem = await cartProductModel.updateOne(
    {
        _id : _id,
        userId: userId
    },
    {
        quantity: qty
    }
   )

   return res.json({
     message: "Update Cart",
     error:false,
     success:true,
     data: updateCartItem
    })

        
    } catch (error) {

      return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
      });
        
    }
})

//Delete CartItem
const deleteCartItemQty = asyncHandler(async(req,res)=>{
    try {
        const userId = req.userId // Middleware
        const {_id, productId} = req.body

        if(!_id) {
            throw new ApiError(400,"Provide _id")
        }

    const deleteItem = await cartProductModel.deleteOne({_id: _id, userId: userId})

    if(!deleteItem) {
        throw new ApiError('404',"Product in cart nor found")
    }

    const user= await UserModel.findOne({
        _id: userId
    })

    const cartItem = user?.shopping_cart

    const updatedUserCart = [...cartItem.slice(0, cartItem.indexOf(productId)),
        cartItem.slice(cartItem.indexOf(productId)+ 1)]

    user.shopping_cart = updatedUserCart

    await user.save()
    

    return res.json({
     message: "Item Removed",
     error:false,
     success:true,
     data: deleteItem
    })


        
    } catch (error) {

      return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
        
    }

})








export {
    addtoCartItem,
    getCartItem,
    updateCartItemQty,
    deleteCartItemQty
}