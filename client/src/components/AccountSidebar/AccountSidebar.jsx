import React from 'react'
import Button from '@mui/material/Button';
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


const AccountSidebar = () => {
  return (
    <>

            <div className='card bg-white shadow-md rounded-md sticky top-[10px]  '>
                 <div className='w-full p-5 flex items-center justify-center flex-col'>
                    <div className='img w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group'>
                        <img src='product1d.jpg' className='w-full h-full object-cover'/>


                    
                        {/* img overlay */}
                        <div className='overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.4)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100'>
                            <FaCloudUploadAlt className='text-[#fff] text-[22px] '/>
                            <input type='file' className='absolute top-0 left-0 w-full h-full opacity-0'/>
                        </div>

                    </div>
                    <h3> Mr Khan</h3>

                </div>
 
                <ul className='list-none pb-5 myAccountTabs '>
                    <li className='w-full '>
                        
                    <NavLink to="/myaccount" exact={true} activeClassName="isActive">

                        <Button className='w-full !text-left !py-2 !px-5 !justify-start  !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none  flex items-center gap-2'> <FaRegUser className='text-[17px]'/>My Profile
                        </Button>
                    </NavLink>

                    </li>

                    <li className='w-full'>

                    <NavLink to="/mylist" exact={true} activeClassName="isActive">
                        
                        <Button className='w-full !text-left !py-2 !px-5 !justify-start  !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none  flex items-center gap-2'> <FaRegHeart className='text-[17px]'/>My List
                        </Button>
                    </NavLink>

                    </li>

                    <li className='w-full'>

                    <NavLink to="/myorders" exact={true} activeClassName="isActive">
                        
                        <Button className='w-full !text-left !py-2  !px-5 !justify-start  !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none  flex items-center gap-2'> <IoBagCheckOutline className='text-[18px]'/>My Orders
                        </Button>
                    </NavLink>

                    </li>

                    <li className='w-full'>

                    <NavLink to="/" exact={true} activeClassName="isActive">
                        
                        <Button className='w-full !text-left !py-2  !px-5 !justify-start  !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none  flex items-center gap-2'> <IoLocationOutline className='text-[18px]'/>Address
                        </Button>
                    </NavLink>

                    </li>

                    <li className='w-full'>
                    
                    <NavLink to="/" exact={true} activeClassName="isActive">
                        
                        <Button className='w-full !text-left !py-2  !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none  flex items-center gap-2'> <IoIosLogOut className='text-[18px]'/>Logout
                        </Button>
                    </NavLink>

                    </li>

                </ul>
                
                

              </div>

            
      
    </>
  )
}

export default AccountSidebar
