import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import QuantityInput from '../../components/QtyBox/QtyBox';
import { FaRegHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";



const ProDetailsContent = () => {

    // active state for size button
   const [productActionIndex, setProductActionIndex] = useState(null)

  return (
    <>
       <h1 className='text-[24px] font-[600] mb-2'> Dark Green Shirt Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repudiandae!</h1>
              <div className='flex items-center gap-3'>
                <span className='text-gray-400'> Brands :
                  <span className='font-[500] text-black text-[14px] opacity-75'> Nike
                  </span>
                </span>
                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <span className='text-[13px] cursor-pointer'> Review (5)</span>
              </div>

           <div className='flex items-center gap-4 mt-2'>
              <span className='oldPrice line-through text-gray-400 text-[20px] 
              font-[500] '>$70.00</span>
              <span className='price text-primary text-[20px] font-[600] pl-3'> $60.00</span>

              <span className='badge badge-success text-[13px] font-[600]'> IN STOCK
                 </span>

          </div>
          <p className='mt-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est velit aspernatur enim libero veritatis. Molestias amet maiores laudantium omnis fugiat repudiandae ducimus totam eos. Beatae.</p>


           <div className='flex items-center  mt-3 mb-4 gap-3'>
            <span className='text-[16px]'> Size:</span>
            <div className='actions flex items-center gap-1 '>
              <Button className={`${productActionIndex === 0? "!bg-primary !text-white" :""} `}
               onClick={()=> setProductActionIndex(0)}>S</Button>
              <Button className={`${productActionIndex === 1? "!bg-primary !text-white" :""} `}
               onClick={()=> setProductActionIndex(1)}>M</Button>
              <Button className={`${productActionIndex === 2? "!bg-primary !text-white" :""} `}
               onClick={()=> setProductActionIndex(2)}>L</Button>
              
            </div>
           </div>
           <span className='text-[13px] font-[500]'> Free Shipping (Est Delivery Time 2-3 Days) </span>
        
           <div className='prodcutDetails flex items-center gap-4 mt-5'>

                <QuantityInput/>

          <Button className='btn-org !rounded-md'> 
            <MdShoppingCart className='text-[18px]'/> Add to Cart
          </Button>

          <Button className='btn-blue btn-lg btn-big btn-circle ml-4'> 
            <FaRegHeart/> 
            </Button>

           </div>
    
    </>
   
  )
}

export default ProDetailsContent