import React, { useContext } from 'react'
import "../ProductItem/style.css"
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { MyContext } from '../../App';


const ProductItem = () => {

 const Context = useContext(MyContext)



  return (
    
    <div className='productItem shadow-md rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]'>

      <div className='group imgWrapper w-[100%] h-[220px] overflow-hidden rounded-md relative'>
        <Link to={'/productListing'}> 
        <div className='img h-[220px] overflow-hidden'>
           <img src="/product1.jpg" className='w-full' />

           <img src="/product1b.jpg" className='w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100' />
        </div>
       
        </Link>

        {/* Add Discount inside img */}
        <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]'>
          20%
        </span>

        {/* Right side zoom, wishlist, Compare inside img */}
        <div className='actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[40px] transition-all duration-400 group-hover:top-[15px] opacity-0 group-hover:opacity-100'>

       

          

        </div>

      </div>



      <div className='info p-3 py-3 '>
        <h6 className='text-[13px]'>
          <Link to="" className='link transition-all'> Dark Green Shirt
          </Link> </h6>
        <h3 className='title text-[13px] mt-1 font-[500] mb-1 text-[#000]'><Link to="" className='link transition-all'> Lorem ipsum, dolor sit amet consectetur.
        </Link>
        </h3>
        <Rating name="size-small" defaultValue={2} size="small" readOnly />

        <div className='flex items-center gap-4'>
          <span className='oldPrice line-through text-gray-400 text-[15px] font-[500]'> $70.00</span>
          <span className='price text-primary text-[15px] font-[600]'> $60.00</span>

        </div>


      </div>

    </div>
  )
}

export default ProductItem
