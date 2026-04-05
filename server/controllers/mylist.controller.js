import MyListModel from "../models/myList.model";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addToMyList = asyncHandler(async(req,res)=>{
    try {

        const userId = req.userId //Middleware

        const {
            productId,
            productTitle,
            image,
            rating,
            price,
            oldPrice,
            brand,
            discount

        } = req.body

    const item= await MyListModel.findOne({
        userId: userId,
        productId: productId
    })

     if(item) throw new ApiError(400,"Item already in my list")

    const myList = new MyListModel({
            productId,
            productTitle,
            image,
            rating,
            price,
            oldPrice,
            brand,
            discount,
            userId
    })

    const save = await myList.save()

    return res.status(200).json({
        error:false,
        success:true,
        message: "The product saved in my List"
    })


        
    } catch (error) {

      return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
        
    } 

})

const deleteMyList = asyncHandler(async(req,res)=> {
    try {
    const myListItem = await MyListModel.findById(req.params.id)

        if(!myListItem) throw new ApiError(404,"item with given id not found")

    
    const deletedItem = await MyListModel.findByIdAndDelete(req.params.id)

        if(!deletedItem) throw new ApiError(404,"item not deleted")

    return res.status(200).json({
        error:false,
        success:true,
        message:"Removed from mylist"
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

const getMyList = asyncHandler(async(req,res)=> {
    try {

    const userId = req.userId     //Middleware

    const myListItems = await MyListModel.find({
        userId: userId
    })

    return res.status(200).json({
        error:false,
        success:true,
        data: myListItems
    })

    
        
    } catch (error) {
        return res.status(500).json({
        message: error.message || error,
        error: true,
        success: false,
        });
        
    }


})

export{
    addToMyList,
    deleteMyList,
    getMyList
}