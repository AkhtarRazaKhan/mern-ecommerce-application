import express from "express"
import cookieParser from "cookie-parser"
import cors from 'cors'
import morgan from "morgan"
import helmet from 'helmet'


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcesPolicy :false
}))


// routes import 

import userRouter from "./routes/user.route.js"
import categoryRouter from "./routes/category.route.js"
import productRouter from "./routes/product.route.js"
import cartRouter from "./routes/cart.route.js"
import myListRouter from "./routes/mylist.route.js"

// routes declaration
app.use('/api/user',userRouter)
app.use('/api/category',categoryRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/mylist',myListRouter)




export default app