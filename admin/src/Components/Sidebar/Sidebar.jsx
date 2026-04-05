import Button from '@mui/material/Button'
import React, { useContext, useState } from 'react'
import { Link, Links } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx"
import { FaAngleDown, FaAngleUp, FaProductHunt, FaRegImage } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { RiProductHuntLine } from "react-icons/ri"
import { TbCategory } from "react-icons/tb"
import { IoBagCheckOutline } from "react-icons/io5"
import { IoMdLogOut } from "react-icons/io"
import { Collapse } from 'react-collapse';
import { MyContext } from '../../App';


const Sidebar = () => {

  const Context = useContext(MyContext)


  // For Sidebar using Collapse 
  const [submenuIndex, setSunMenuIndex] = useState(null)

  const isOpenSubMenu = (index) => {
    if (submenuIndex === index) {
      setSunMenuIndex(null)
    }
    else {
      setSunMenuIndex(index)

    }

  }

  return (
    <div className={`sidebar  bg-[#fff] w-[18%] h-full border-r 
    border-[rgba(0,0,0,0.1)] py-2 px-4 w-[${Context.isSidebarOpen === true ? 'w-[18%] fixed top-0 left-0' : 'w-[0px]'}]`}>

      <div className='spy-2 w-full '>
        <Link to="/" >
          <img src='/logo.jpg' className='w-[150px]' />
        </Link>

      </div>

      <ul className='mt-5'>
        <li>
          <Link to="/">
            <Button className='!w-full !capitalize !justify-start flex gap-3  text-[14px]
             !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2 '>
              <RxDashboard className='text-[18px]'
              /> <span>  Dashboard </span>
            </Button>
          </Link>
        </li>

        {/* Second Menu Home Slides with Sub Menu  */}
        <li>


          {/* SubMenu inside HomeSlides */}

          <Collapse isOpened={submenuIndex === 1 ? true : false}>
            <ul className='w-full'>
              <li className='w-full'>
                <Link to="/homeSlider">
                  <Button className='!text-[13px] !font-[500] !pl-9 !text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full flex gap-3  '>
                    <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'> </span>
                    Home Banner List
                  </Button>
                </Link>
              </li>

              <li className='w-full'>

              </li>
            </ul>

          </Collapse>


        </li>

        {/* Third Menu Users */}



        {/* Fourth Menu Products with Submenu */}

        <li>
          <Link>
            <Button className='!w-full !capitalize !justify-start flex gap-3  text-[14px]
         !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2'
              onClick={() => isOpenSubMenu(2)}>
              <RiProductHuntLine className='text-[18px] ' /> <span> Products </span>
              <span className='ml-auto w-[30px] h-[30px] flex items-center'
              >

                <FaAngleDown className={`transition-all ${submenuIndex === 2 ? 'rotate-180' : ''}`} />
              </span>
            </Button>
          </Link>


        </li>


        {/* fiveth Menu Category with Submenu */}

        <li>
          <Link>
            <Button className='!w-full !capitalize !justify-start flex gap-3  text-[14px]
         !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2'
              onClick={() => isOpenSubMenu(3)}>
              <TbCategory className='text-[18px] ' /> <span> Category </span>
              <span className='ml-auto w-[30px] h-[30px] flex items-center'
              >

                <FaAngleDown className={`transition-all ${submenuIndex === 3 ? 'rotate-180' : ''}`} />
              </span>
            </Button>
          </Link>

          {/* SubMenu inside Products */}

          <Collapse isOpened={submenuIndex === 3 ? true : false}>
            <ul className='w-full'>
              <Link to="/categorylist">
                <li className='w-full'>
                  <Button className='!text-[13px] !font-[500] !pl-9 !text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full flex gap-3  '>
                    <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'> </span>
                    Category List </Button>
                </li>
              </Link>

              <li className='w-full'>
                <Link>
                  <Button className='!text-[13px] !font-[500] !pl-9 !text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full flex gap-3'>
                    <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'> </span>
                    Add Category </Button>
                </Link>
              </li>

            </ul>

          </Collapse>

        </li>


        {/* Sixth Menu Orders */}
        <li>
          <Link to="/myorders">
            <Button className='!w-full !capitalize !justify-start flex gap-3  text-[14px]
         !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2'>
              <IoBagCheckOutline className='text-[20px]' /> <span> Orders </span>

            </Button>
          </Link>
        </li>

        {/* Seventh Menu Logout */}

        <li>
          <Link>
            <Button className='!w-full !capitalize !justify-start flex gap-3  text-[14px]
         !text-[rgba(0,0,0,0.8)] !font-[600] items-center !py-2'>
              <IoMdLogOut className='text-[18px]' /> <span> Logout </span>

            </Button>
          </Link>
        </li>



      </ul>

    </div>
  )
}

export default Sidebar
