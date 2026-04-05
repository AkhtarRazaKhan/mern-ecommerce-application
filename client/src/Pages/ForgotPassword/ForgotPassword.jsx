import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { MyContext } from '../../App';
import { useState } from 'react';


const ForgotPassword = () => {

const [isPasswordShow, setIsPasswordShow ] = useState(false)
const [isPasswordShow2, setIsPasswordShow2 ] = useState(false)

const Context = useContext(MyContext)
  

  return (
    <section className='section py-10'>
        <div className='container'>
            <div className='card shadow-md  w-[420px] m-auto rounded-md bg-white p-5 px-12'> 
            <h3 className='text-center  text-[18px] text-black'> Forgot Password</h3>

            <form className='w-full mt-5'>
                <div className='form-group mb-5 relative'>
                     <TextField
                      type={`${isPasswordShow===false ? 'password': 'text'}`}
                      id="password"
                      label=" New Password"
                      variant="outlined"
                      className='w-full'
                      name='email'
                       />

                 <Button className='!absolute top-[10px] right-[10px] !w-[35px] h-[35px]
                 !min-w-[35px] !rounded-full  !text-[#000]'
                  onClick={()=> setIsPasswordShow(!isPasswordShow)}> 

                {
                    isPasswordShow === true ?  <IoMdEye className='text-[20px] opacity-75'/>  :
                     <IoMdEyeOff className='text-[20px] opacity-75'/> 
                }
                </Button>

                </div>

                <div className='form-group mb-5 relative'>
                     <TextField
                      type={`${isPasswordShow2===false ? 'password': 'text'}`}
                      id="confirm-password"
                      label="Confirm Password"
                      variant="outlined"
                      className='w-full'
                      name='password'
                       />

                <Button className='!absolute top-[10px] right-[10px] !w-[35px] h-[35px]
                 !min-w-[35px] !rounded-full  !text-[#000]'

                  onClick={()=> setIsPasswordShow2(!isPasswordShow2)}> 

                {
                    isPasswordShow2 === true ?  <IoMdEye className='text-[20px] opacity-75'/>  :
                     <IoMdEyeOff className='text-[20px] opacity-75'/> 
                }
                </Button>

                </div>

                <div className='flex items-center w-full mt-3 mb-2'>
                    <Button className='btn-org btn-lg w-full'> Change Password </Button>
                </div>
                

            </form>

            </div>
        </div>

      
    </section>
  )
}

export default ForgotPassword




