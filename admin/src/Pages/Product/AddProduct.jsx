// import React from 'react';
// import { TextField, MenuItem, Rating, Button } from '@mui/material';
// import { MdUpload } from 'react-icons/md';

// const categories = ['Electronics', 'Clothing', 'Books'];
// const subCategories = ['Phones', 'Laptops', 'Tablets'];
// const rams = ['4GB', '8GB', '16GB'];
// const sizes = ['S', 'M', 'L', 'XL'];

// // const AddProduct = () => {
// //   return (
// //     <div className="p-6 bg-white rounded-lg shadow-md w-full mx-auto">
// //       <h2 className="text-2xl font-semibold mb-6">Add Product</h2>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <TextField fullWidth label="Product Name" variant="outlined" />
// //         <TextField fullWidth label="Product Price" variant="outlined" />
// //         <TextField fullWidth label="Old Price" variant="outlined" />
// //         <TextField fullWidth label="Stock" variant="outlined" />
// //         <TextField fullWidth label="Brand" variant="outlined" />
// //         <TextField fullWidth label="Discount" variant="outlined" />

// //         <TextField
// //           select
// //           label="Category"
// //           fullWidth
// //           defaultValue=""
// //         >
// //           {categories.map((cat) => (
// //             <MenuItem key={cat} value={cat}>
// //               {cat}
// //             </MenuItem>
// //           ))}
// //         </TextField>

// //         <TextField
// //           select
// //           label="Sub Category"
// //           fullWidth
// //           defaultValue=""
// //         >
// //           {subCategories.map((sub) => (
// //             <MenuItem key={sub} value={sub}>
// //               {sub}
// //             </MenuItem>
// //           ))}
// //         </TextField>

// //         <TextField
// //           select
// //           label="RAM"
// //           fullWidth
// //           defaultValue=""
// //         >
// //           {rams.map((ram) => (
// //             <MenuItem key={ram} value={ram}>
// //               {ram}
// //             </MenuItem>
// //           ))}
// //         </TextField>

// //         <TextField fullWidth label="Weight" variant="outlined" />
// //         <TextField
// //           select
// //           label="Size"
// //           fullWidth
// //           defaultValue=""
// //         >
// //           {sizes.map((size) => (
// //             <MenuItem key={size} value={size}>
// //               {size}
// //             </MenuItem>
// //           ))}
// //         </TextField>

// //         <div className="flex items-center space-x-4">
// //           <span className="text-gray-700">Rating:</span>
// //           <Rating defaultValue={3} precision={1} />
// //         </div>

// //         <div className="flex items-center">
// //           <label htmlFor="featured" className="mr-2">Is Featured?</label>
// //           <input type="checkbox" id="featured" className="w-5 h-5" />
// //         </div>
// //       </div>

// //       <div className="mt-6">
// //         <TextField
// //           fullWidth
// //           label="Product Description"
// //           variant="outlined"
// //           multiline
// //           rows={4}
// //         />
// //       </div>

// //       <div className="mt-8">
// //         <h3 className="text-lg font-semibold mb-2">Media & Images</h3>
// //         <label className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">
// //           <MdUpload size={40} className="text-gray-500 mb-2" />
// //           <span className="text-gray-600">Click to upload image</span>
// //           <input type="file" className="hidden" />
// //         </label>
// //       </div>

// //       <div className="mt-8">
// //         <Button variant="contained" color="primary" fullWidth>
// //           Save Product
// //         </Button>
// //       </div>
// //     </div>
// //   );
// // };

// export default AddProduct;

import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  Rating,
  Button,
  IconButton,
} from '@mui/material';
import { MdUpload } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';

const categories = ['Electronics', 'Clothing', 'Books'];
const subCategories = ['Phones', 'Laptops', 'Tablets'];
const rams = ['4GB', '8GB', '16GB'];
const sizes = ['S', 'M', 'L', 'XL'];

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [rating, setRating] = useState(3);
  const [isFeatured, setIsFeatured] = useState(false);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    setImages((prev) => {
      const newImgs = [...prev];
      URL.revokeObjectURL(newImgs[index].url); // Clean up memory
      newImgs.splice(index, 1);
      return newImgs;
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Add Product</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <TextField fullWidth label="Product Name" variant="outlined" />
        <TextField fullWidth label="Product Price" variant="outlined" />
        <TextField fullWidth label="Old Price" variant="outlined" />
        <TextField fullWidth label="Stock" variant="outlined" />
        <TextField fullWidth label="Brand" variant="outlined" />
        <TextField fullWidth label="Discount" variant="outlined" />

        <TextField select label="Category" fullWidth defaultValue="">
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>

        <TextField select label="Sub Category" fullWidth defaultValue="">
          {subCategories.map((sub) => (
            <MenuItem key={sub} value={sub}>
              {sub}
            </MenuItem>
          ))}
        </TextField>

        <TextField select label="RAM" fullWidth defaultValue="">
          {rams.map((ram) => (
            <MenuItem key={ram} value={ram}>
              {ram}
            </MenuItem>
          ))}
        </TextField>

        <TextField fullWidth label="Weight" variant="outlined" />

        <TextField select label="Size" fullWidth defaultValue="">
          {sizes.map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </TextField>

        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Rating:</span>
          <Rating
            name="rating"
            value={rating}
            precision={1}
            onChange={(e, newValue) => setRating(newValue)}
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="featured" className="mr-2">
            Is Featured?
          </label>
          <input
            type="checkbox"
            id="featured"
            className="w-5 h-5"
            checked={isFeatured}
            onChange={(e) => setIsFeatured(e.target.checked)}
          />
        </div>
      </div>

      <div className="mt-6">
        <TextField
          fullWidth
          label="Product Description"
          variant="outlined"
          multiline
          rows={4}
        />
      </div>

      {/* Media & Image Upload */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4">Media & Images</h3>

        <div className="flex flex-wrap gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative w-32 h-32 rounded-md overflow-hidden shadow">
              <img
                src={img.url}
                alt="preview"
                className="w-full h-full object-cover rounded-md"
              />
              <IconButton
                size="small"
                className="!absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white"
                onClick={() => removeImage(index)}
              >
                <AiOutlineClose size={18} />
              </IconButton>
            </div>
          ))}

          {/* Upload Box */}
          <label className="w-32 h-32 border-2 border-dashed border-gray-300 hover:border-blue-500 flex flex-col items-center justify-center text-gray-500 rounded-md cursor-pointer hover:bg-gray-50 transition">
            <MdUpload size={32} />
            <span className="text-sm text-center">Upload</span>
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
      </div>

      <div className="mt-10">
        <Button variant="contained" color="primary" fullWidth>
          Save Product
        </Button>
      </div>
    </div>
  );
};

export default AddProduct;



