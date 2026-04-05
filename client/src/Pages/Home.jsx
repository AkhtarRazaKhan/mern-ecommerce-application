import React from 'react'
import HomeSlider from '../components/HomeSlider/HomeSlider'
import HomeCatSlider from '../components/HomeCatSlider/HomeCatSlider'
import { LiaShippingFastSolid } from "react-icons/lia";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from '../components/ProductsSlider/ProductsSlider';
import AdsBannerSlider from '../components/AdsBannerSlider/AdsBannerSlider';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Home = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  };


  return (
    <>
      <HomeSlider />
      <HomeCatSlider />

      {/* Popular Product Section*/}

      <section className='bg-white py-8'>
        <div className='container'>
          <div className='flex items-center  justify-between'>
            <div className='leftSec'>
              <h3 className='text-[20px] font-[600]'> Popular Product </h3>
              <p className='text-[14px] font-[400]'> Do not miss the current offers until end of Month </p>

            </div>

            <div className='rightSec w-[60%]'>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="jewellery" />
                
              </Tabs>

            </div>

          </div>

          <ProductsSlider items={5}/>
          <ProductsSlider items={5}/>

          {/* Banner */}
  <div className="w-full overflow-hidden mt-6 rounded-xl">
  <Link to="/">
    <img
      src="web-banner.webp"
      alt="Promo Banner"
      className="
        w-full h-auto
        rounded-xl shadow-lg
        transition-transform duration-500 ease-out
        hover:scale-105 
      "
    />
  </Link>
</div>



        </div>

      </section>

      {/* Free Delivery Section & AdsBanner */}
      <section className='py-2  bg-white'>
        <div className='container'>
          <div className='freeShipping w-[80%] m-auto p-4 border-2 border-[#ff5252] flex items-center rounded-md justify-between mb-12 '>
            <div className='col1 flex items-center gap-4  '>
              <LiaShippingFastSolid className='text-[50px] ml-3 ' />
              <span className='text-[22px] font-[600]'> Free Shipping </span>
            </div>

            <div className='col2'>
              <p className='font-[500]'> Free Delivery Now On First Order and over $200</p>
            </div>

            <p className=' text-[22px]  font-[600]'> - Only $200</p>

          </div>
          <AdsBannerSlider items={4}/>

        </div>

      </section>

      {/* Latest Product & Adbanner  */}
      <section className=' py-8 pt-5  bg-white '>
        <div className='container'>

          

          
        </div>
      </section>

  
  
    </>
  )
}

export default Home
