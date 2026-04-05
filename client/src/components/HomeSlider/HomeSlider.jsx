import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';


const HomeSlider = () => {
  return (
    <div className='homeSlider py-3'>
      <div className='container'> 
        
      <Swiper
       loop={true}
       spaceBetween={10} 
       navigation={true}
       modules={[Navigation, Autoplay]}
       autoplay={{
        delay:2500,
        disableOnInteraction:false,
       }}
       className="sliderHome">
        <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden">
            <img src="/slideBanner1.jpg" className="w-full"/>
          </div>
        </SwiperSlide>
          
        <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden">
           <img src="/slideBanner2.jpg"/>
          </div>
        </SwiperSlide>

       

        
          
       
      
      </Swiper>
      </div>
      
    </div>
  )
}

export default HomeSlider
