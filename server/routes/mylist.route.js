import {Router} from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { addToMyList, deleteMyList, getMyList } from '../controllers/mylist.controller.js'

const myListRouter = Router()

myListRouter.post('/add',auth,addToMyList)
myListRouter.delete('/:id',auth, deleteMyList)
myListRouter.get('/',auth, getMyList)

export default myListRouter
