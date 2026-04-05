import React, { useState } from 'react'
import ProductZoom from '../../components/ProductZoom/ProductZoom'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import QuantityInput from '../../components/QtyBox/QtyBox';
import { FaRegHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import TextField from '@mui/material/TextField';
import ProductsSlider from '../../components/ProductsSlider/ProductsSlider';
import ProDetailsContent from '../../components/ProDetailsContent/ProDetailsContent';






const ProductDetails = () => {

  // active state for size button

  // const [productActionIndex, setProductActionIndex] = useState(null)

  //active state for Specification
  const [activeTab, setActiveTab]= useState(0)

  return (
    <>
      
       <section className='bg-white py-5'>

        <div className='container flex gap-8'>
            <div className='productZoomContainer w-[30%] '>
                <ProductZoom/>
            </div>

            {/* Product Content */}

        <div className='productContent w-[60%] pr-10 pl-10'>

          <ProDetailsContent/>
            

        </div>   
        </div>

        {/* Product Details & Specifications */}

        <div className='container pt-10 '>
          <div className='flex items-center gap-8'>

            <span className={`link text-[18px] cursor-pointer font-[500] ${activeTab===0 && 'text-primary'}`} onClick={()=> setActiveTab(0)}> Description </span>

            <span className={`link text-[18px] cursor-pointer font-[500] ${activeTab===1 && 'text-primary'}`} onClick={()=> setActiveTab(1)}> Prodcut Details </span>

            <span className={`link text-[18px] cursor-pointer font-[500] ${activeTab===2 && 'text-primary'}`} onClick={()=> setActiveTab(2)}> Reviews (5) </span>

          </div>

          {
            activeTab===0 &&

             <div className='shadow-md w-full p-5 mb-5 rounded-md'>
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nulla doloremque ex molestias enim esse!</p>
                  <h4> Dark Green Shirt </h4>
            
                <p> Lorem ipsum dolor sit amet.</p>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus.</h4>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda reiciendis consequuntur eaque?</p>

                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias repudiandae rerum earum?</p>
          </div>
          }

          {
            activeTab ===1 &&
            // Table from tailwindCss
        <div className='shadow-md w-full p-5 mb-5 rounded-md'>
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">Product name</th>
                <th scope="col" class="px-6 py-3">Color</th>
            
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b border-gray-200 font-[600]">
                
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                
              </tr>

              <tr class="bg-white border-b border-gray-200 font-[600]">
                
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                
              </tr>
  
            </tbody>
          </table>
        </div>
        </div>

          }

          {
            activeTab ===2 && 
              <div className='shadow-md w-[80%] p-5 mb-5 rounded-md'>
              <div className='w-full productReviewsContainer'>
                <h2 className='text-[20px]'> Customer Reviews </h2>

          <div className='reviewScroll w-full mt-2 max-h-[300px] overflow-y-scroll overflow-x-hidden'>
          
                 

                 
                  {/* Second Review */}

                 

                  {/* Third Review */}

                  <div className='review w-full flex items-center justify-between pb-5
                  border-b border-[rgba(0,0,0,0.1)] pr-5'>
                     <div className='info w-[60%] flex items-center gap-2'>

                      <div className='img w-[70px] h-[70px] overflow-hidden rounded-full'> 
                        <img src="/product1d.jpg" className='w-full '/>
                        </div>

                        <div className='w-[80%] pl-2 mt-3'>
                          <h4  className='text-16px]'> Mr Khan</h4>
                          <h5 className=' text-[13px] mb-0'> 16-10-2025</h5>
                          <p className='mt-0 mb-0'> Nice Product Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, mollitia. </p>
                        </div>

                      </div>
                        <Rating 
                        name="size-small" 
                        defaultValue={4}
                        readOnly />

                  </div>

          </div>
 
             {/* Review Form */}
          <div className='reviewForm bg-[#fafafa] p-4 rounded-md'>
            <h2 className='text-[18px]'> Add a review </h2>

            <form className='w-full mt-5'>
              <TextField
              id="outlined-multiline-flexible"
              label="Write a review.."
              className='w-full'
              multiline
              rows={5}
              />

              <Rating name="size-small" defaultValue={4} className='mt-3' />

              <div className='flex items-center mt-3'>
                <Button className='btn-org'> Submit Review</Button>

              </div>

            </form>
          </div>



        </div>
          </div>

            }
        </div>

        {/* Show Related Proudcts */}

        <div className='container'>
           <h3 className='text-[20px] font-[600]'> Related Products </h3>
          <ProductsSlider items={5}/>
        </div>


       </section>

        
      
    </>
  )
}

export default ProductDetails
