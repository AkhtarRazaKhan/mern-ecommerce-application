import CategoryModel from "../models/category.model.js";

import {v2 as cloudinary} from "cloudinary" // as rename v2 to cloudinary
import fs from "fs"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";




var imagesArr = [];
const uploadImages = asyncHandler(async (req, res) => {
  try {
    imagesArr = []; // reset every request

    const images = req.files;
    if (!images || images.length === 0) {
      return res.status(400).json({ message: "No images uploaded" });
    }

    const options = {
      use_filename: true,
      unique_filename: true,  // prevent overwriting same file names
      overwrite: false,
    };

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.uploader.upload(images[i].path, options);
      imagesArr.push(result.secure_url);

      // delete local file safely
      fs.unlinkSync(images[i].path);
    }

    res.status(200).json({
      success: true,
      images: imagesArr,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Image upload failed",
    });
  }
});

//Create Category

const createCategory = asyncHandler(async(req,res)=>{

  try {
    let category= new CategoryModel({
      name: req.body.name,
      images: imagesArr,
      parentCatName: req.body.parentCatName,
      parentId: req.body.parentId
    })

    if(!category){
      throw new ApiError(500,'Category not created')
    }

    category = await category.save()

    imagesArr=[]
     //first image upload hogi (uploadImage controller se toh sar images iske andar sace hogi) then create karte time ise blank kar diya then second category me hume imagesArr blank milega

    return res.status(200).json({
      message: "Category created",
      error: false,
      success: true,
      category: category
    })
    
  } catch (error) {

    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
    
  }
  
})



//Get Category // see Q.1
const getCategories =asyncHandler(async(req,res)=>{

  try {

    const categories =await CategoryModel.find()
    const categoryMap ={}

    categories.forEach(cat=> {
      categoryMap[cat._id]= {...cat._doc, children:[] };
    })
  
    
    const rootCategories =[]
    
    categories.forEach(cat => {
      if(cat.parentId){
        categoryMap[cat.parentId].children.push(categoryMap[cat._id]);
      }
      else{
        rootCategories.push(categoryMap[cat._id])
      }
      
    });
   

    return res.status(200).json({
      error: false,
      success: true,
      data : rootCategories

    })

    
  } catch (error) {

    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
    
  }

})





const deleteCategory = asyncHandler(async (req, res) => {
  const category = await CategoryModel.findById(req.params.id);
  if (!category) {
    throw new ApiError(404, "Category not found");
  }

  // Step 1: Delete all images from Cloudinary
  const images = category.images;
  for (let img of images) {
    const urlArr = img.split("/");
    const image = urlArr[urlArr.length - 1];
    const imageName = image.split(".")[0];

    if (imageName) {
      const result = await cloudinary.uploader.destroy(imageName);
      console.log("Image deleted:", result);
    }
  }

  // Step 2: Delete all subcategories (second & third level)
  const subCategories = await CategoryModel.find({ parentId: req.params.id });

  for (let i = 0; i < subCategories.length; i++) {
    const thirdSubCats = await CategoryModel.find({ parentId: subCategories[i]._id });

    for (let j = 0; j < thirdSubCats.length; j++) {
      await CategoryModel.findByIdAndDelete(thirdSubCats[j]._id);
    }

    await CategoryModel.findByIdAndDelete(subCategories[i]._id);
  }

  // Step 3: Delete main category
  const deletedCat = await CategoryModel.findByIdAndDelete(req.params.id);
  if (!deletedCat) {
    throw new ApiError(404, "Category not found");
  }

  // Step 4: Send single response
  return res.status(200).json({
    success: true,
    error: false,
    message: "Category and its subcategories deleted successfully"
  });
});


const updateCategory = asyncHandler(async(req,res)=>{
  const category = await CategoryModel.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      images: imagesArr.length>0 ? imagesArr[0] : req.body.images,
      parentId: req.body.parentId,
      parentCatName: req.body.parentCatName
    },
    {new: true}
  )

  if(!category){
    throw new ApiError(500,"Category cannot be updated")
  }

  imagesArr=[]
  

  res.status(200).json({
      success: true,
      error: false,
      category: category
     })
})





export {
    uploadImages,
    createCategory,
    getCategories,
    getCategoriesCount,
    getSubCategoriesCount,
    getCategory,
    removeImageFromCloudinary,
    deleteCategory,
    updateCategory
  
}

// var imagesArr = [];

// const uploadImages = asyncHandler(async (req, res) => {
//   try {
//     imagesArr = []; // reset every request

//     const images = req.files;
//     if (!images || images.length === 0) {
//       return res.status(400).json({ message: "No images uploaded" });
//     }

//     const options = {
//       use_filename: true,
//       unique_filename: true,  // prevent overwriting same file names
//       overwrite: false,
//     };

//     for (let i = 0; i < images.length; i++) {
//       const result = await cloudinary.uploader.upload(images[i].path, options);
//       imagesArr.push(result.secure_url);

//       // delete local file safely
//       fs.unlinkSync(images[i].path);
//     }

//     res.status(200).json({
//       success: true,
//       images: imagesArr,
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message || "Image upload failed",
//     });
//   }
// });


// ------------------------------------------------------------//

// Delete Category old (not working)

// const deleteCategory = asyncHandler(async(req,res)=>{
//   const category = await CategoryModel.findById(req.params.id)

//   if (!category) throw new ApiError(404, "Category not found");


//   const images = category.images

//   let img=""
//   for(img of images){
//     const imgUrl =img;

//      const urlArr= imgUrl.split("/")

//     const image = urlArr[urlArr.length -1]

//     const imageName = image.split(".")[0]

//      if (imageName) {
    
//     const result = await cloudinary.uploader.destroy(imageName);
    
//     console.log(result)
//     if (result) {
//       return res.status(200).send(result);
//     }
//       }
//   }

//   const subCategory = await CategoryModel.find({
//     parentId : req.params.id
//   })

//   for(let i=0; i < subCategory.length; i++){
//     // console.log(subCategory[i]._id);

//     // 3 level Cateogy
//      //  Fashion => Men => Shirt

//      const thirdsubCategory = await CategoryModel.find({
//       parentId: subCategory[i]._id
//      })

//      for(let i=0; i <thirdsubCategory.length; i++){

//      // delete third level Category
//       const deleteThirdSubCat= await CategoryModel.findByIdAndDelete(thirdsubCategory[i]._id)

//      }
//      // delete second level
//      const deleteSubCat= await CategoryModel.findByIdAndDelete(subCategory[i]._id)


//      //delete first level Category
//      const deletedCat = await CategoryModel.findByIdAndDelete(req.params.id)
//      if(!deletedCat){
//       throw new ApiError(404, "Category not Found")
//      }

//      // if Category was deleted then send res

//      res.status(200).json({
//       success: true,
//       error: false,
//       message: "Category Deleted"
//      })
//   }
// })

// var imagesArr = [];

// const uploadImages = asyncHandler(async (req, res) => {
//   try {
//     imagesArr = []; // reset every request

//     const images = req.files;
//     if (!images || images.length === 0) {
//       return res.status(400).json({ message: "No images uploaded" });
//     }

//     const options = {
//       use_filename: true,
//       unique_filename: true,  // prevent overwriting same file names
//       overwrite: false,
//     };

//     for (let i = 0; i < images.length; i++) {
//       const result = await cloudinary.uploader.upload(images[i].path, options);
//       imagesArr.push(result.secure_url);

//       // delete local file safely
//       fs.unlinkSync(images[i].path);
//     }

//     res.status(200).json({
//       success: true,
//       images: imagesArr,
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message || "Image upload failed",
//     });
//   }
// });
