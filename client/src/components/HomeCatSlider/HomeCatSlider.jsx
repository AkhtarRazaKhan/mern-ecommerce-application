import React from 'react'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider pt-4 py-8'>
        <div className='container'>

    <Swiper
        slidesPerView={8}
        spaceBetween={10}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        
         <SwiperSlide>
          <Link>
       <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col "> 
          <img src='fashion.png ' 
          className='w-[60px] transition-all '
          />
          <h3 className="text-[15px] font-[500] mt-3"> Suits </h3>
       </div>
       </Link>
        </SwiperSlide>

         <SwiperSlide>
          <Link>
       <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col "> 
          <img src='fashion.png '
           className='w-[60px] transition-all '
          />
          <h3 className="text-[15px] font-[500] mt-3"> Suits </h3>
       </div>
       </Link>
        </SwiperSlide>


     

         <SwiperSlide>
          <Link>
       <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col "> 
          <img src='fashion.png ' 
          className='w-[60px] transition-all '
          />
          <h3 className="text-[15px] font-[500] mt-3"> Suits </h3>
       </div>
       </Link>
        </SwiperSlide>

        

         <SwiperSlide>
          <Link>
       <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col "> 
          <img src='fashion.png '
           className='w-[60px] transition-all '
          />
          <h3 className="text-[15px] font-[500] mt-3"> Suits </h3>
       </div>
       </Link>
        </SwiperSlide>
         <SwiperSlide>
          <Link>

       <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col "> 
          <img src='fashion.png '
           className='w-[60px] transition-all '
          />
          <h3 className="text-[15px] font-[500] mt-3"> Suits </h3>
       </div>
       </Link>
        </SwiperSlide>


      
      </Swiper>

        </div>
      
    </div>
  )
}

export default HomeCatSlider
