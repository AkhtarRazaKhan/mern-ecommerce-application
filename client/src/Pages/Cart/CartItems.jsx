import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import Rating from '@mui/material/Rating';



const CartItems = (props) => {


    const openSize = Boolean(sizeAnchorEl);


    // Menu for Qty from MUI
    const [qtyAnchorEl, setQtyAnchorE1] = useState(null)

    const openQty = Boolean(qtyAnchorEl);


    const handleCloseQty = (value) => {
        setQtyAnchorE1(null);

        if (value !== null) {
            setSelectedQty(value)
        }

    };





    return (
        <>
            <div className='cartItem w-full p-3 flex items-center gap-4 pb-4 border-b
           border-[rgba(0,0,0,0.1)] '>

                <div className='img w-[15%] rounded-md overflow-hidden'>
                    <Link to='/product/500' className='group'>
                        <img src="/product1.jpg" className='w-full group-hover:scale-105 transition-all' />

                    </Link>

                </div>

                <div className='info w-[85%] relative'>
                    <IoCloseSharp className='absolute right-[0px] top-[0px] text-[22px]  cursor-pointer link transition-all' />
                    <span className='text-[12px]'> Nike </span>

                    <h3 className='text[15px]'> <Link className='link'>Dark Green Shirt </Link> </h3>
                    <Rating name="size-small" defaultValue={2} size="small" readOnly />

                    {/* Menu  for Qty */}
                    <div className='flex items-center gap-3 mt-2 '>

                        <div className='relative'>
                         

                            {/* Menu from MUI for Size */}
                            <Menu
                                id="size-menu"
                                anchorEl={sizeAnchorEl}
                                open={openSize}
                                onClose={() => handleCloseSize(null)}
                                slotProps={{
                                    list: {
                                        'aria-labelledby': 'basic-button',
                                    },
                                }}
                            >
                               
                            </Menu>
                        </div>

                    </div>


                    <div className='flex items-center gap-4 mt-2'>
                        <span className='price  text-[15px] font-[600]'> $60.00</span>

                        


                    </div>

                </div>

            </div>


        </>
    )
}

export default CartItems
