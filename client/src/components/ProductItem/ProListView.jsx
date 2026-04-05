import React from 'react'
import "../ProductItem/style.css"
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MyContext } from '../../App';
import { useContext } from 'react';



const ProListView = () => {

  const Context = useContext(MyContext)

  return (
    <div className='productItem  shadow-md rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)] flex items-center'>
      <div className='group imgWrapper w-[20%] h-[220px] overflow-hidden rounded-md relative'>
        <Link> 
        <div className='img h-[220px] overflow-hidden'>
           <img src="product1.jpg" className='w-full' />

           <img src="product1b.jpg" className='w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100' />
        </div>
       
        </Link>

        {/* Add Discount inside img */}
        <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]'>
          20%
        </span>

        {/* Right side zoom, wishlist, Compare inside img */}
       

      </div>



      <div className='info p-3 py-3 px-9 w-[75%]  '>
        <h6 className='text-[15px]'>
          <Link to="" className='link transition-all'> Dark Green Shirt
          </Link> </h6>
        <h3 className='title text-[18px] mt-2 font-[500] mb-3 text-[#000]'><Link to="" className='link transition-all '> Lorem ipsum, dolor sit amet consectetur.
        </Link>
        </h3>

        <p className='text-[14px] mb-3'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus eius asperiores corporis.</p>


        <Rating name="size-small" defaultValue={2} size="small" readOnly />

        <div className='flex items-center gap-4'>
          <span className='oldPrice line-through text-gray-400 text-[15px] font-[500]'> $70.00</span>
          <span className='price text-primary font-[600]'> $60.00</span>

        </div>

        {/* Add to Cart */}

        <div className='mt-3'>
            <Button className='btn-org flex gap-2'> 
            <MdShoppingCart className='text-[18px]'/> Add to Cart
        </Button>

        </div>

        

      </div>

    </div>
  )
}

export default ProListView
