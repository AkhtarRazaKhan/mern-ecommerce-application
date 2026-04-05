import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import ProductItem from '../ProductItem/ProductItem';

const ProductsSlider = (props) => {

  return (
    <section className='productsSlider py-3'>
      <div>
         <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                
                 <SwiperSlide>
                  {/* import ProductItem component */}
                  <ProductItem/>
                 </SwiperSlide>

                 <SwiperSlide>
                  {/* import ProductItem component */}
                  <ProductItem/>
                 </SwiperSlide>

                 <SwiperSlide>
                  {/* import ProductItem component */}
                  <ProductItem/>
                 </SwiperSlide>

                 <SwiperSlide>
                  {/* import ProductItem component */}
                  <ProductItem/>
                 </SwiperSlide>

                 <SwiperSlide>
                  {/* import ProductItem component */}
                  <ProductItem/>
                 </SwiperSlide>

                  <SwiperSlide>
                  {/* import ProductItem component */}
                  <ProductItem/>
                 </SwiperSlide>

                  <SwiperSlide>
                  {/* import ProductItem component */}
                  <ProductItem/>
                 </SwiperSlide>

                  <SwiperSlide>
                  {/* import ProductItem component */}
                  <ProductItem/>
                 </SwiperSlide>




          </Swiper>

      </div>
      
    </section>
  )
}

export default ProductsSlider
