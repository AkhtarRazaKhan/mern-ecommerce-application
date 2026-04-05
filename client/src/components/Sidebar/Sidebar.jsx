import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/style.css";
import { LiaAngleDownSolid } from "react-icons/lia";
import { LiaAngleUpSolid } from "react-icons/lia";
import {Collapse} from 'react-collapse';
import { useState } from 'react';
import Button from '@mui/material/Button';

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';



const Sidebar = () => {

 const  [isOpenCategoryPanel , setIsOpenCatPanel] = useState(true)

 
  return (
    <aside className="sidebar py-5 px-4 ">
      <div className="box mb-6">
        <h3 className="mb-1 text-[16px] flex items-center font-[600] pr-5 ">Product Categories

          <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]' onClick={()=> setIsOpenCatPanel(!isOpenCategoryPanel )}>

            {
              isOpenCategoryPanel === true ?  <LiaAngleUpSolid /> : <LiaAngleDownSolid/>
            }

          </Button> 
        </h3>
        
    <Collapse isOpened={isOpenCategoryPanel }>

        <div className="scroll px-3 relative left-[-10px]">
          <FormControlLabel control={<Checkbox defaultChecked />} label="Fashion" className='w-full' size="small" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Electronics" className='w-full' />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Bags" className='w-full' />
           <FormControlLabel control={<Checkbox defaultChecked />} label="Beauty" className='w-full' />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Wellness" className='w-full' />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Jewellery" className='w-full' />
        </div>
      </Collapse>
      </div>

      {/* Filter By Price */}

      <div className="box mb-4">
        <h3 className="mb-6 text-[16px] flex items-center font-[600] pr-5 "> Filter by Price
        </h3>

        <RangeSlider/>
        <div className='flex  pt-2 pb-2 priceRange'>
          <span className='text-[13px]'> 
            From: <strong className='text-dark'> Rs:{100} </strong>
          </span>

          <span className='ml-auto text-[13px]'> 
            From: <strong className='text-dark'> Rs: {5000} </strong>
          </span>
        </div>
     
      </div>

        {/* Filter By Rating */}

      <div className="box mb-4 mt-6">
        <h3 className="mb-4 text-[16px] flex items-center font-[600] pr-5 "> Filter by Rating
        </h3>

        <div className='w-full'> 
        <Rating name="size-small" defaultValue={5} size="small" readOnly className='cursor-pointer'/>
        </div>

        <div className='w-full'> 
        <Rating name="size-small" defaultValue={4} size="small" readOnly className='cursor-pointer'/>
        </div>

        <div className='w-full'> 
        <Rating name="size-small" defaultValue={3} size="small" readOnly className='cursor-pointer'/>
        </div>

        <div className='w-full'> 
        <Rating name="size-small" defaultValue={2} size="small" readOnly className='cursor-pointer'/>
        </div>

        <div className='w-full'> 
        <Rating name="size-small" defaultValue={1} size="small" readOnly className='cursor-pointer'/>
        </div>
        

        

      
     
      </div>
      
  
   
    </aside>




  );
}

export default Sidebar;

