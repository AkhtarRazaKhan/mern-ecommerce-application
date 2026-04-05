import React from 'react'
import {
  TextField,
  MenuItem,
  Rating,
  Button,
  IconButton,
} from '@mui/material';
import { MdUpload } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const AddHomeSlide = () => {

      const [images, setImages] = useState([]);
    //   const [rating, setRating] = useState(3);
    //   const [isFeatured, setIsFeatured] = useState(false);
    
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
    <>

    {/* Media & Image Upload */}
          <div className="mt-10 pl-10">
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
            
          <div className='w-[250px] mt-9'> 
          <Button type='button' className='btn-blue btn-lg w-full flex gap-2'>
              <FaCloudUploadAlt className='text-[25px] text-white'/> Publish & View
          </Button>
        </div>

  </div>
      
    </>
  )
}

export default AddHomeSlide
