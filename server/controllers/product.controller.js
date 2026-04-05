import productModel from "../models/product.model.js";





import {v2 as cloudinary} from "cloudinary" // as rename v2 to cloudinary
import fs from "fs"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";


//Cloudinary config
  cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});


//upload Image
var imagesArr = [];
const uploadImages = asyncHandler(async (req, res) => {
  try {

    imagesArr = [];

    const image = req.files


    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    };

    for (let i = 0; i < image?.length; i++) {
      //  Don't mix await + callback
      const result = await cloudinary.uploader.upload(image[i].path, options);

      //  Now 'result' is available properly
      imagesArr.push(result.secure_url);

      fs.unlinkSync(`uploads/${req.files[i].filename}`);
      // console.log("Deleted:", req.files[i].filename);
    }

    return res.status(200).json({
      images: imagesArr
    });

  } catch (error) {

    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});


// create Product
const createProduct = asyncHandler(async(req,res)=>{
    try {

     const product = new productModel({
        name : req.body.name,
        description : req.body.description,
        images : imagesArr,
        brand : req.body.brand,
        price : req.body.price,
        oldPrice : req.body.oldPrice,
        catName : req.body.catName,
        catId : req.body.catId,
       
       
      
     })

     product = await productModel.save()

     if(!product) {
      throw new ApiError(500, "Product not created")
     }

     imagesArr=[]

     res.status(200).json({
      message: "Product created Successfully",
      error: false,
      success: true
     })

        
    } catch (error) {

    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
      product: product
    });
        
    }
})

// get all products

const getAllProducts = asyncHandler(async(req,res)=>{
  try {

    //Pagination
    const page = parseInt(req.query.page) || 1;
    const perPage= parseInt(req.query.perPage)
    const totalPosts= await productModel.countDocuments()
    const totalPages= Math.ceil(totalPosts / perPage)

    if(page> totalPages){
      throw new ApiError(404, "Page not found")
    }


    const products = await productModel.find().populate("category")
    .skip((page -1) * perPage)
    .limit(perPage)
    .exec()

    if(!products){
      throw new ApiError(500,"product not fetched")
    }

    res.res(200).json({
      error: false,
      success: true,
      data : products,
      totalPages: totalPages,
      page: page
     })

    
  } catch (error) {

     return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
      product: product
    });
    
  }
})

//get all Products By Category Id
const getAllProductsByCatId = asyncHandler(async(req,res)=>{
  try {

    //Pagination
    const page = parseInt(req.query.page) || 1;
    const perPage= parseInt(req.query.perPage) || 10000
    const totalPosts= await productModel.countDocuments()
    const totalPages= Math.ceil(totalPosts / perPage)

    if(page> totalPages){
      throw new ApiError(404, "Page not found")
    }


    const products = await productModel.find({
      catId: req.params.id
    }).populate("category")
    .skip((page -1) * perPage)
    .limit(perPage)
    .exec()

    if(!products){
      throw new ApiError(500,"product not fetched")
    }

    res.res(200).json({
      error: false,
      success: true,
      data : products,
      totalPages: totalPages,
      page: page
     })

    
  } catch (error) {

     return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
      product: product
    });
    
  }
})

//get all Products By Category Name
const getAllProductsByCatName = asyncHandler(async(req,res)=>{
  try {

    //Pagination
    const page = parseInt(req.query.page) || 1;
    const perPage= parseInt(req.query.perPage) || 10000
    const totalPosts= await productModel.countDocuments()
    const totalPages= Math.ceil(totalPosts / perPage)

    if(page> totalPages){
      throw new ApiError(404, "Page not found")
    }


    const products = await productModel.find({
      catName: req.query.catName
    }).populate("category")
    .skip((page -1) * perPage)
    .limit(perPage)
    .exec()

    if(!products){
      throw new ApiError(500,"product not fetched")
    }

    res.res(200).json({
      error: false,
      success: true,
      data : products,
      totalPages: totalPages,
      page: page
     })

    
  } catch (error) {

     return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
      product: product
    });
    
  }
})


// Sub Category
//get all Products By Sub Category Id
const getAllProductsBySubCatId = asyncHandler(async(req,res)=>{
  try {

    //Pagination
    const page = parseInt(req.query.page) || 1;
    const perPage= parseInt(req.query.perPage) || 10000
    const totalPosts= await productModel.countDocuments()
    const totalPages= Math.ceil(totalPosts / perPage)

    if(page> totalPages){
      throw new ApiError(404, "Page not found")
    }


    const products = await productModel.find({
      subCatId: req.params.id
    }).populate("category")
    .skip((page -1) * perPage)
    .limit(perPage)
    .exec()

    if(!products){
      throw new ApiError(500,"product not fetched")
    }

    res.res(200).json({
      error: false,
      success: true,
      data : products,
      totalPages: totalPages,
      page: page
     })

    
  } catch (error) {

     return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
      product: product
    });
    
  }
})

//get all Products By Category Name
const getAllProductsBySubCatName = asyncHandler(async(req,res)=>{
  try {

    //Pagination
    const page = parseInt(req.query.page) || 1;
    const perPage= parseInt(req.query.perPage) || 10000
    const totalPosts= await productModel.countDocuments()
    const totalPages= Math.ceil(totalPosts / perPage)

    if(page> totalPages){
      throw new ApiError(404, "Page not found")
    }


    const products = await productModel.find({
      subCat: req.query.subCat
    }).populate("category")
    .skip((page -1) * perPage)
    .limit(perPage)
    .exec()

    if(!products){
      throw new ApiError(500,"product not fetched")
    }

    res.res(200).json({
      error: false,
      success: true,
      data : products,
      totalPages: totalPages,
      page: page
     })

    
  } catch (error) {

     return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
      product: product
    });
    
  }
})

// Third Level Category
//get all Products By Third level Category Id
const getAllProductsByThirdLevelCatId = asyncHandler(async(req,res)=>{
  try {

    //Pagination
    const page = parseInt(req.query.page) || 1;
    const perPage= parseInt(req.query.perPage) || 10000
    const totalPosts= await productModel.countDocuments()
    const totalPages= Math.ceil(totalPosts / perPage)

    if(page> totalPages){
      throw new ApiError(404, "Page not found")
    }


    const products = await productModel.find({
      thirdsubCatId: req.params.id
    }).populate("category")
    .skip((page -1) * perPage)
    .limit(perPage)
    .exec()

    if(!products){
      throw new ApiError(500,"product not fetched")
    }

    res.res(200).json({
      error: false,
      success: true,
      data : products,
      totalPages: totalPages,
      page: page
     })

    
  } catch (error) {

     return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
      product: product
    });
    
  }
})

//get all Products By Third level Category Name
const getAllProductsByThirdLevelCatName = asyncHandler(async(req,res)=>{
  try {

    //Pagination
    const page = parseInt(req.query.page) || 1;
    const perPage= parseInt(req.query.perPage) || 10000
    const totalPosts= await productModel.countDocuments()
    const totalPages= Math.ceil(totalPosts / perPage)

    if(page> totalPages){
      throw new ApiError(404, "Page not found")
    }


    const products = await productModel.find({
      thirdsubCat: req.query.thirdsubCat
    }).populate("category")
    .skip((page -1) * perPage)
    .limit(perPage)
    .exec()

    if(!products){
      throw new ApiError(500,"product not fetched")
    }

    res.res(200).json({
      error: false,
      success: true,
      data : products,
      totalPages: totalPages,
      page: page
     })

    
  } catch (error) {

     return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
      product: product
    });
    
  }
})


// get all products by price
const getAllProductsByPrice = asyncHandler(async(req,res)=>{
  const productList =[]

  // find Cateogy based product like Show only Mens product
  // Agar user ne Category Id send ki toh usse related product aayenge
  if(req.query.catId !== "" && req.query.catId !== undefined){
    const productListArr = await productModel.find({
      catId: req.query.catId,
    }).populate("category")

    productList = productListArr
  }

   // Agar user ne  Sub Category Id send ki toh usse related product aayenge
  if(req.query.subCatId !== "" && req.query.catId !== undefined){
    const productListArr = await productModel.find({
      subCatId: req.query.subCatId,
    }).populate("category")

    productList = productListArr
  }

   // Agar user ne third Category Id send ki toh usse related product aayenge
  if(req.query.thirdsubCatId !== "" && req.query.catId !== undefined){
    const productListArr = await productModel.find({
      thirdsubCatId: req.query.thirdsubCatId,
    }).populate("category")

    productList = productListArr
  }

  const filteredProducts = productList.filter((product)=> {

    if(req.query.minPrice && product.price < parseInt(+req.query.minPrice)){
      return false;
    }
     if(req.query.minPrice && product.price < parseInt(+req.query.maxPrice)){
      return false;
    }

    return res.status(200).json({
      error:false,
      success:true,
      products: filteredProducts,
      totalPages: 0,
      page: 0
    })
    
    
  })

})

//get all Products By Rating
const getAllProductsByRating = asyncHandler(async(req,res)=>{
  try {

    //Pagination
    const page = parseInt(req.query.page) || 1;
    const perPage= parseInt(req.query.perPage) || 10000
    const totalPosts= await productModel.countDocuments()
    const totalPages= Math.ceil(totalPosts / perPage)

    if(page> totalPages){
      throw new ApiError(404, "Page not found")
    }

    let products =[]

    // this is for catId
    if(req.query.catId !== undefined) {

      products = await productModel.find({
      rating: req.query.rating,
      catId: req.query.catId,
    }).populate("category")
    .skip((page -1) * perPage)
    .limit(perPage)
    .exec()

    }

    // this is for subCatId 
    if(req.query.catId !== undefined) {

      products = await productModel.find({

      rating: req.query.rating,
      subCatId: req.query.subCatId,
      thirdsubCat: req.query.thirdsubCat

    }).populate("category")
    .skip((page -1) * perPage)
    .limit(perPage)
    .exec()
    }

    // this is for thirdsubCat
    if(req.query.catId !== undefined) {

      products = await productModel.find({

      rating: req.query.rating,
      thirdsubCat: req.query.thirdsubCat

    }).populate("category")
    .skip((page -1) * perPage)
    .limit(perPage)
    .exec()
    }

    
 

    

    if(!products){
      throw new ApiError(500,"product not fetched")
    }

    res.res(200).json({
      error: false,
      success: true,
      data : products,
      totalPages: totalPages,
      page: page
     })

    
  } catch (error) {

     return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
      product: product
    });
    
  }
})

//get all Products Count
const getProductsCount = asyncHandler(async(req,res)=>{
  try {

    const productCount = await productModel.countDocuments();

    if(!productCount) {
      throw new ApiError(500)
    }

    return res.status(200).json({
      error: false,
      success:true,
      productCount: productCount
    })
    
  } catch (error) {

     return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
    
  }
})

//get all freatured Products
const getAllFeaturedProducts = asyncHandler(async(req,res)=>{
  try {


    const products = await productModel.find({
      isFeatured: true
    }).populate("category")
   

    if(!products){
      throw new ApiError(500,"product not fetched")
    }

    res.res(200).json({
      error: false,
      success: true,
      data : products,
     })

    
  } catch (error) {

     return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
      product: product
    });
    
  }
})

// Delete Products
const deleteProducts = asyncHandler(async(req,res)=>{

  const product = await productModel.findById(req.params.id).populate("category")

  if(!product) throw new ApiError(404,"Product not found")

    // Step 1: Delete all images from Cloudinary
  const images = product.images;
  for (let img of images) {
    const urlArr = img.split("/");
    const image = urlArr[urlArr.length - 1];
    const imageName = image.split(".")[0];

    if (imageName) {
      const result = await cloudinary.uploader.destroy(imageName);
      console.log("Image deleted:", result);
    }
  }

  const deleteProduct = await productModel.findByIdAndDelete(req.params.id)

  if(!deleteProduct) throw new ApiError(404, "Product not Deleted")

    return res.status(200).json({
      success:true,
      error:false,
      message: "Product Deleted"
    })

})

// Get single Product
const getProduct = asyncHandler(async(req,res)=>{
  try {

    const product = await productModel.findById(req.params.id).populate("category")

    if(!product) throw new ApiError(404, "Product is not found")

      return res.status(200).json({
        success:true,
        error: false,
        product: product
      })
    
  } catch (error) {

     return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
    
  }
})

// remove image from Cloudinary
const removeImageFromCloudinary = asyncHandler(async(req,res)=>{

    const imgUrl= req.query.img

    // '/api/user?removeImg=?img1.jpg'
    // '/api/user?img=?img1.jpg'

    const urlArr= imgUrl.split("/")

    // "https://res.cloudinary.com/codewithak/image/upload/v1759951966/1759951969921-Screenshot_9.png"

    // ["https","res.cloudinary.com","codewithak","image","upload","v1759951966","1759951969921-Screenshot_9.png"] we only want this last array

    const image = urlArr[urlArr.length -1]

    const imageName = image.split(".")[0]

     if (imageName) {
    
    const result = await cloudinary.uploader.destroy(imageName);
    
    console.log(result)
    if (result) {
      return res.status(200).send(result);
    }
      }
  })

// Update Product
const updatProduct = asyncHandler(async(req,res)=> {
  try {

    const product = new productModel.findByIdAndUpdate(
      req.params.id,
      {
        name : req.body.name,
        description : req.body.description,
        images : req.body.images,
        brand : req.body.brand,
        price : req.body.price,
        oldPrice : req.body.oldPrice,
        catName : req.body.catName,
        catId : req.body.catId,
        subcatId : req.body.subcatId,
        subcat : req.body.subcat,
        thirdSubcat : req.body.thirdSubcat,
        thirdSubcatId : req.body.countInStock,
        countInStock : req.body.thirdSubcatId,
        rating : req.body.rating,
        isFeatured : req.body.thirdSubcatId,
        dicount : req.body.discount,
        productRam : req.body.productRam,
        size : req.body.size,
        productWeight : req.body.productWeight,
    },
    {new: true}
  );

  if(!product) throw new ApiError(404, "Product not Updated")

  imagesArr=[]

  return res.status(200).json({
    message: "Product is Updated",
    error: false,
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


export {
    uploadImages,
    createProduct,
    getAllProducts,
    getAllProductsByCatId,
    getAllProductsByCatName,
    getAllProductsBySubCatId
    ,getAllProductsBySubCatName,
    getAllProductsByThirdLevelCatId,
    getAllProductsByThirdLevelCatName,
    getAllProductsByPrice,
    getAllProductsByRating,
    getProductsCount,
    getAllFeaturedProducts,
    deleteProducts,
    getProduct,
    removeImageFromCloudinary,
    updatProduct 
}