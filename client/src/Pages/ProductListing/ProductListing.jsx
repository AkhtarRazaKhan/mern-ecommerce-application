import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProductItem from '../../components/ProductItem/ProductItem'
import Button from '@mui/material/Button'
import { IoGridSharp } from "react-icons/io5";
import { GrMenu } from "react-icons/gr";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import ProListView from '../../components/ProductItem/ProListView';

const ProductListing = () => {

  // From MUI 
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 
   const [itemView, setItemView] = useState('grid')




  return (
    <section className='py-5 mt-5 bg-white'>
      <div className='container  flex gap-3 h-full'>
        <div className='sidebarWrapper w-[20%] shrink-0'>
          <Sidebar />
        </div>



    {/* RightContent (Products) */}

        <div className='righContent w-[80%]'>


           {/* Grid Logo (Product View) */}

          <div className='bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between'>
            <div className='col1 flex items-center itemViewActions'>

              <Button className={`!text-[15px] !w-[40px] !h-[40px] !min-w-[30px] !rounded-full !text-[#000] ${itemView==="list" && 'active'}`}

              onClick={()=> setItemView('list')}>
                 <GrMenu className='text-[rgba(0,0,0,0.7)]' />
               </Button>

              <Button className={`!text-[15px] !w-[40px] !h-[40px] !min-w-[30px] !rounded-full !text-[#000] ${itemView==="grid" && 'active'}`}

               onClick={()=> setItemView('grid')}> 
               <IoGridSharp className='text-[rgba(0,0,0,0.7)]' />
               </Button>

               <span className='text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)] '> There are 27 Prodcuts.</span>

            </div>

            <div className='col2  flex items-center justify-end gap-3 pr-4'>

              <span className='text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)] '> Short By </span>

              {/* Button & Menu from MUI */}
            <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className='!bg-white !text-[12px] !text-[#000] !capitalize'
          >
            Name , A to Z
          </Button>
             <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              
              slotProps={{
                list: {
                  'aria-labelledby': 'basic-button',
                },
              }}
            >
              <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000]'>Name , A to Z</MenuItem>
              <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000]' >Name , Z to A</MenuItem>
              <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000]'>Price, low to high</MenuItem>
              <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000]'>Price, high to low</MenuItem>
              
      
            </Menu>

            </div>
           
          </div>  

          {/* RightContent (Products) Start */}
  

    
          
          <div className={`grid ${itemView==='grid' ? 'grid-cols-4 md:grid-cols-4 gap-4' : 
          'grid-cols-1 md:grid-cols-1'} gap-4`}>

            {
              itemView === 'grid' ?
              <>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/> 
            </>
            :
            <>
            <ProListView/>
            <ProListView/>
            <ProListView/>
            <ProListView/>
            <ProListView/>
            <ProListView/>
            <ProListView/>
            
            </>
            }

            

          </div>

        </div>

      </div>
    </section>
  )
}

export default ProductListing
