import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads")  // Folder jahan file save hogi
    },
    
    filename: function (req, file, cb) {
     
      // cb(null, file.originalname)
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
  
  export const upload = multer({ storage })

