import React, { useState, useRef } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ProductZoom = () => {

    const [slideIndex, setSlideIndex] =useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();

    const goto =(index)=>{
        setSlideIndex(index)
        zoomSliderSml.current.swiper.slideTo(index)
        zoomSliderBig.current.swiper.slideTo(index)
    }



  return (
    <>
    <div className='flex gap-3'>

        <div className='slider w-[20%]'>
            <Swiper
                ref={zoomSliderSml}
                direction={"vertical"}
                slidesPerView={4}
                spaceBetween={10}
                // navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation]}
                className="zoomProductSliderThumbs overflow-hidden"
              >
                <SwiperSlide>
                    <div className={`item rounded-md overflow-hidden cursor-pointer group 
                    ${slideIndex === 0 ? 'opacity-100':'opacity-30'}`}
                    onClick={()=> goto(0)}>
                        <img src='/product1.jpg'
                        className='w-full transition-all group-hover:scale-105'/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={`item rounded-md overflow-hidden cursor-pointer group 
                    ${slideIndex === 1 ? 'opacity-100 ':'opacity-35'}`}
                    onClick={()=> goto(1)}>
                        <img src='/product1b.jpg'
                        className='w-full transition-all group-hover:scale-105'/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                     <div className={`item rounded-md overflow-hidden cursor-pointer group 
                    ${slideIndex === 2 ? 'opacity-100':'opacity-35'}`}
                    onClick={()=> goto(2)}>
                        <img src='/product1c.jpg'
                        className='w-full transition-all group-hover:scale-105'/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                     <div className={`item rounded-md overflow-hidden cursor-pointer group 
                    ${slideIndex === 3 ? 'opacity-100':'opacity-35'}`}
                    onClick={()=> goto(3)}>
                        <img src='/product1d.jpg'
                        className='w-full transition-all group-hover:scale-105'/>
                    </div>
                </SwiperSlide>


         </Swiper>
        </div> 
   
     {/* Main Zoom Image with SwiperSlider */}


    </div>
   
      
    </>
  )
}

export default ProductZoom
