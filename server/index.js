import connectDB from "./db/index.js";
import dotenv from 'dotenv'
import app from './app.js'

dotenv.config()
// dotenv.config({
//     path: './.env'
// })


connectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is Running at port ${process.env.PORT}`);
        
    })
})
.catch((err)=> {
    console.log("DB connection failed",err);
    process.exit(1);
    
})