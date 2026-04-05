import React from 'react';
import Button from '@mui/material/Button';
import { BsFillBagCheckFill } from "react-icons/bs";
import CartItems from './CartItems';


const CartPage = () => {

  return (
    <section className='section py-10 pb-10'>
      <div className='container w-[80%] max-w-[70%] flex gap-5'>

         {/* Left Cart Section */}
        <div className='w-[70%]'>
         

          <div className='shadow-md rounded-md bg-white'>

            <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.1)]'>
             <h2> Your Cart</h2>
              <p className='mt-0'> There are <span className='font-bold text-primary'> 2 </span> Prodcuts in your cart</p> </div>

          {/* first CartItem */}
          <CartItems size="S" qty={1} />

          
          </div>

        </div>

        {/* Right Cart Section */}
        <div className='w-[30%] rightPart '>
          <div className='shadow-md rounded-md  bg-white p-5 '>

            <h3 className='pb-3 border-b border-[rgba(0,0,0,0.1)] '> Cart Totals</h3>
            

            <p className='flex items-center justify-between mb-2 mt-3'>
              <span className='text-[14px] font-[600] '> SubTotal</span>
              <span className='text-primary font-bold'> {props?.subtotal}</span>
            </p>

           

            <Button className='btn-org btn-lg w-full flex items-center gap-2'> <BsFillBagCheckFill className='text-[20px]'/> Checkout </Button>


          </div>

        </div>

      </div>

    </section>
  )
}

export default CartPage
