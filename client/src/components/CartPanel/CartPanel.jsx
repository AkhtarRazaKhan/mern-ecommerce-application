import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDeleteOutline } from "react-icons/md";
import Button from '@mui/material/Button';


const CartPanel = () => {
  return (
    <>
    <div className="scroll w-full max-h-[380px] overflow-y-scroll overflow-hidden py-3 px-4">

              <div className="cartItem w-full flex items-center gap-4 border-b 
              border-[rgba(0,0,0,0.1)] pb-4">
                <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
                  <img
                   src="/product1c.jpg"
                   className="w-full"
                   />
                </div>
    
                <div className="info w-[75%] pr-5 relative">
                  <h4 className="link text-[14px] font-[500]">  Dark Green Lorem ipsum  </h4>
                  <p className='flex items-center gap-5 mt-2 mb-2'> 
                    <span>Qty : <span> 2</span> </span> 
                    <span className='text-primary font-[500]'> Price : $25</span>
                    
                 </p>
                 <MdOutlineDeleteOutline className='absolute right-[10px] top-[10px] cursor-pointer text-[20px] link transtion-all'/>

                </div>
                
    
              </div>

              {/* Second Cart item */}
               <div className="cartItem w-full flex items-center gap-4 border-b 
              border-[rgba(0,0,0,0.1)] pb-4">
                <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
                  <img
                   src="/product1c.jpg"
                   className="w-full"
                   />
                </div>
    
                <div className="info w-[75%] pr-5 relative">
                  <h4 className="link text-[14px] font-[500]">  Dark Green Lorem ipsum  </h4>
                  <p className='flex items-center gap-5 mt-2 mb-2'> 
                    <span>Qty : <span> 2</span> </span> 
                    <span className='text-primary font-[500]'> Price : $25</span>
                    
                 </p>
                 <MdOutlineDeleteOutline className='absolute right-[10px] top-[10px] cursor-pointer text-[20px] link transtion-all'/>

                </div>
                
    
              </div>

              {/* Third Cart Item */}
               <div className="cartItem w-full flex items-center gap-4 border-b 
              border-[rgba(0,0,0,0.1)] pb-4">
                <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
                  <img
                   src="/product1c.jpg"
                   className="w-full"
                   />
                </div>
    
    
                
    
              </div>

        
    </div>

    {/* Bottom CartPanel */}

    <div className='bottomSec absolute bottom-[10px] left-[10px] w-full overflow-hidden px-2'> 

    <div className='bottomInfo  py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col gap-2'>

        <div className='flex items-center justify-between w-full'>   
            <span className='text-[14px] font-[600]'> 1 item</span>
            <span className='text-primary font-bold'> $90.00</span>
        </div>

         <div className='flex items-center justify-between w-full'>   
            <span className='text-[14px] font-[600]'> Shipping</span>
            <span className='text-primary font-bold'> $6.00</span>
        </div>
    </div>

     <div className='bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col gap-2'>


         
    </div>

  </div>
      
    </>
  )
}

export default CartPanel

