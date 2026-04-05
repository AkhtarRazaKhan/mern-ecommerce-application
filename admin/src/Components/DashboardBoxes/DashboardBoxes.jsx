
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import  'swiper/css/navigation';
import {Navigation} from 'swiper/modules'
import { AiTwotoneGift } from "react-icons/ai"
import { IoStatsChartSharp } from 'react-icons/io5';
import { AiTwotonePieChart } from 'react-icons/ai';
import { RiProductHuntLine } from "react-icons/ri"
import { MdOutlineReviews } from 'react-icons/md';


const DashboardBoxes = (props) => {
    
  return (
    <>
    <Swiper
        slidesPerView={4}
        spaceBetween={10}
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >

        <SwiperSlide>
            <div className='box bg-[#10b981]  p-5 cursor-pointer rounded-md border
             border-[rgba(0,0,0,0.1)] flex items-center gap-4 hover:bg-[#289974]'>
                <AiTwotonePieChart className='text-[40px] text-[#fff]'/>
                <div className='info w-[70%]'>
                    <h3 className='text-white'> Total Users</h3>
                    <b className='text-white text-[20px]'> {props?.users}</b>
                </div>
                <IoStatsChartSharp className='text-[50px] text-[#fff]'/>

            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='box  p-5 cursor-pointer rounded-md border
             border-[rgba(0,0,0,0.1)] flex items-center gap-4 hover:bg-[#355ebd]'>
                <AiTwotoneGift className='text-[40px]'/>
                <div className='info w-[70%]'>
                    <h3 className='text-white'> Total Orders</h3>
                    <b className='text-white text-[20px]'> {props?.orders}</b>
                </div>
                <IoStatsChartSharp className='text-[50px] text-[#fff]'/>

            </div>
        </SwiperSlide>

    

        <SwiperSlide>
            <div className='box bg-[#21b7c7d8] p-5 cursor-pointer rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 hover:bg-[#1aafd1]'>
                <RiProductHuntLine className='text-[40px]'/>
                <div className='info w-[70%]'>
                    <h3 className='text-white'> Total Products</h3>
                    <b className='text-white text-[20px]'> {props?.products}</b>
                </div>
                <IoStatsChartSharp className='text-[50px] />

            </div>
        </SwiperSlide>

         <SwiperSlide>
            <div className='box p-5 cursor-pointer rounded-md flex items-center gap-4 >
                
            </IoStatsChartSharp>
                <MdOutlineReviews className='text-[40px]'/>
                <div className='info w-[70%]'>
                    <h3 className='text-white'> Total Category</h3>
                    <b className='text-white text-[20px]'> {props?.category}</b>
                </div>
                <IoStatsChartSharp className='text-[50px] text-[#fff]'/>

            </div>
        </SwiperSlide>


    </Swiper>

    
    

    </>
  )
}

export default DashboardBoxes
