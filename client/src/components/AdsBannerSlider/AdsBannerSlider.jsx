import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import BannerBox from './BannerBox/BannerBox';

const AdsBannerSlider = (props) => {

  return (

    <div className=' bg-white w-full'>

      <Swiper
            slidesPerView={props.items}
            spaceBetween={10}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="smlBtn"
          >
            {/* BannerBox Component  */}

             <SwiperSlide>
                
                <BannerBox img={'/banner1.webp'} link={"/"}/>
             </SwiperSlide>

             <SwiperSlide>
                <BannerBox img={'/banner2.webp'} link={"/"} />
             </SwiperSlide>

             <SwiperSlide>
                <BannerBox img={'/banner3.jpg'} link={"/"}/>
             </SwiperSlide>

             <SwiperSlide>
                <BannerBox img={'/banner1.webp'} link={"/"}/>
             </SwiperSlide>
     </Swiper>
      
    </div>
  )
}

export default AdsBannerSlider
