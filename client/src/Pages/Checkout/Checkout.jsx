import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoBagCheckSharp } from "react-icons/io5";

const Checkout = () => {
  return (
    <section className='py-10'>

        <div className='container flex gap-5'>
            <div className='leftCol w-[70%]'>
                <div className='card w-full bg-white shadow-md p-5 rounded-md'>
                    <h1> Billing Details</h1>

                    <form className='w-full mt-5'>
                        <div className='flex items-center gap-5 pb-5'>

                            <div className='col w-[50%]'>
                                <TextField
                                label="Full Name"
                                variant="outlined" size='small'
                                className='w-full'
                                name='email'
                               />
                            </div>

                             <div className='col w-[50%]'>
                                <TextField
                                label="Email"
                                type='email'
                                variant="outlined" size='small'
                                className='w-full'
                                name='email'
                               />
                            </div>

                            

                        </div>
                    
            

                    {/* Postcode Zip */}
                     <h4 className='text-[14px] font-[500] mb-3 '>Postcode / Zip *</h4>

                     <div className='flex items-center gap-5 pb-5'>
                        <div className='col w-[100%]'>
                                <TextField
                                label="Town / City"
                                variant="outlined" size='small'
                                className='w-full'
                                name='email'
                               />
                        </div>
                     </div>

                    {/* Phone No. & Email */}

                     <div className='flex items-center gap-5 pb-5'>

                            <div className='col w-[50%]'>
                                <TextField
                                label="Phone Number"
                                variant="outlined" size='small'
                                className='w-full'
                                name='email'
                               />
                            </div>

                             <div className='col w-[50%]'>
                                <TextField
                                label="Email Address"
                                type='text'
                                variant="outlined" size='small'
                                className='w-full'
                                name='email'
                               />
                            </div>

                            

                    </div>


                    

                    </form>

                </div>

            </div>

            <div className='rightCol w-[30%]'>
                <div className='card shadow-md bg-white p-5 rounded-md'>
                    <h2 className='mb-4'> Your Order</h2>

                    <div className='flex items-center py-3  justify-between border-t
                     border-b border-[rgba(0,0,0,0.1)]'>
                        <span className='text-[14px] font-[600]'> Product</span>
                        <span className='text-[14px] font-[600]'> Subtotal</span>
                    </div>


             {/* Scroll */}
            <div className='scroll max-h-[250px] overflow-y-scroll overflow-hidden pr-2 mb-5'>

                    {/* Item */}

                <div className='flex items-center justify-between mt-2 '>
                    <div className='part1 flex items-center gap-3'> 
                            <div className='w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                <img src='/product1.jpg' className='w-full transition-all group-hover:scale-105'/>
                            </div>

                            <div className='info'>
                                <h4 className='text-[14px]'> Dark Green Shirt</h4>
                                <span className='text-[13px]'> Qty: 1</span>
                            </div>
                    </div>
                    <span className='text-[14px] font-[500]'> $700</span>

                </div>

                {/* second Item */}
                  <div className='flex items-center justify-between mt-2 '>
                    <div className='part1 flex items-center gap-3'> 
                            <div className='w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                <img src='/product1.jpg' className='w-full transition-all group-hover:scale-105'/>
                            </div>

                            <div className='info'>
                                <h4 className='text-[14px]'> Dark Green Shirt</h4>
                                <span className='text-[13px]'> Qty: 1</span>
                            </div>
                    </div>
                    <span className='text-[14px] font-[500]'> $700</span>

                </div>

                 {/* second Item */}
                  <div className='flex items-center justify-between mt-2 '>
                    <div className='part1 flex items-center gap-3'> 
                            <div className='w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                <img src='/product1.jpg' className='w-full transition-all group-hover:scale-105'/>
                            </div>

                            <div className='info'>
                                <h4 className='text-[14px]'> Dark Green Shirt</h4>
                                <span className='text-[13px]'> Qty: 1</span>
                            </div>
                    </div>
                    <span className='text-[14px] font-[500]'> $700</span>

                </div>

                 {/* second Item */}
                  <div className='flex items-center justify-between mt-2 '>
                    <div className='part1 flex items-center gap-3'> 
                            <div className='w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                <img src='/product1.jpg' className='w-full transition-all group-hover:scale-105'/>
                            </div>

                            <div className='info'>
                                <h4 className='text-[14px]'> Dark Green Shirt</h4>
                                <span className='text-[13px]'> Qty: 1</span>
                            </div>
                    </div>
                    <span className='text-[14px] font-[500]'> $700</span>

                </div>

                 {/* second Item */}
                

                

            </div>

            <Button className='btn-org btn-lg w-full gap-2 items-center'><IoBagCheckSharp className='text-[22px]'/> Checkout </Button>

            </div>
            </div>

        </div>


      
    </section>
  )
}

export default Checkout



