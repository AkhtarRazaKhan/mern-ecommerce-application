
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import { IoCloseSharp } from "react-icons/io5";
import Button from '@mui/material/Button';




const MyListItems = () => {

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



                    <div className='flex items-center gap-4 mt-2 mb-2'>
                        <span className='price  text-[15px] font-[600]'> $60.00</span>

                        <span className='oldPrice line-through text-gray-400 text-[15px] font-[500]'> $70.00</span>
                        <span className='price text-primary text-[14px] font-[600]'> 55% OFF</span>


                    </div>

               

                  <Button className="btn-org btn-sm"> Add to Cart</Button>

                </div>

            </div>


        </>
    )
}

export default MyListItems
