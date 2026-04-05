import React, { useContext, useState } from 'react';
import {
  TextField,
  IconButton,
  Button,
} from '@mui/material';
import { MdUpload } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MyContext } from '../../App';

const AddSubCategoy = () => {
  const Context = useContext(MyContext);

  const [categoryName, setCategoryName] = useState('');
  const [images, setImages] = useState([]);

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
      {/* Category Name Input */}
      <div className="mt-10 pl-10">
        <h3 className="text-lg font-semibold mb-4">Add New Category</h3>

        <div className="mb-6 w-[300px]">
          <TextField
            label="Category Name"
            variant="outlined"
            fullWidth
            size='small'
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>

       

        {/* Publish Button */}
        <div className="w-[250px] mt-9">
          <Button
            type="button"
            className="btn-blue btn-lg w-full flex gap-2"
            variant="contained"
            color="primary"
            startIcon={<FaCloudUploadAlt />}
          >
            Publish & View
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddSubCategoy;
