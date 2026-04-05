import {Router} from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { upload } from '../middlewares/multer.js'
import { createCategory, getCategories, getCategoriesCount,  uploadImages } from '../controllers/category.controller.js'

const categoryRouter = Router()

categoryRouter.post('/uploadImages',auth,upload.array('images'),uploadImages)
categoryRouter.post('/create',auth,createCategory);
categoryRouter.get('/',getCategories);
categoryRouter.get('/get/count',getCategoriesCount);






export default categoryRouter

// images category.model se
// images:[
//          {
//             type: String,
//          }
//     ],
