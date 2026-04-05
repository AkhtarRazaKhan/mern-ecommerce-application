import {Router} from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { upload } from '../middlewares/multer.js'
import { createProduct, deleteProducts, getAllFeaturedProducts, getAllProducts, getAllProductsByCatId, getAllProductsByCatName, getAllProductsByPrice, getAllProductsByRating, getAllProductsBySubCatId, getAllProductsBySubCatName, getAllProductsByThirdLevelCatId, getAllProductsByThirdLevelCatName, getProduct, getProductsCount, removeImageFromCloudinary, updatProduct, uploadImages } from '../controllers/product.controller.js'

const productRouter = Router()

productRouter.post('/uploadImages',auth,upload.array('images'),uploadImages)
productRouter.post('/create',auth,createProduct)
productRouter.get('/',getAllProducts)
productRouter.get('/getAllProductsByCatId/:id',getAllProductsByCatId)
productRouter.get('/getAllProductsByName/:id',getAllProductsByCatName)
productRouter.get('/getAllProductsByCatId/:id',getAllProductsBySubCatId)
productRouter.get('/getAllProductsByName',getAllProductsBySubCatName)


productRouter.delete('/deleteImage',auth,removeImageFromCloudinary)
productRouter.put('/updatProduct/:id ',auth,updatProduct)





export default productRouter