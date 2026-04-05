import React from 'react'
import TextField from '@mui/material/TextField';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Register = () => {

    const [isPasswordShow, setIsPasswordShow ] = useState(false)

  return (
    <section className='section py-10'>
        <div className='container'>
            <div className='card shadow-md  w-[420px] m-auto rounded-md bg-white p-5 px-12'> 
            <h3 className='text-center  text-[18px] text-black'> Register with a new account</h3>

            <form className='w-full mt-5'>

                <div className='form-group mb-5'>
                     <TextField
                     type='email'
                      id="email"
                      label="Full Name"
                      variant="outlined"
                      className='w-full' />

                </div>

                <div className='form-group mb-5'>
                     <TextField
                     type='email'
                      id="email"
                      label="Email"
                      variant="outlined"
                      className='w-full' />

                </div>

                <div className='form-group mb-5 relative'>
                     <TextField
                      type={`${isPasswordShow===false ? 'password': 'text'}`}
                      id="password"
                      label="Password"
                      variant="outlined"
                      className='w-full' />

                <Button className='!absolute top-[10px] right-[10px] !w-[35px] h-[35px]
                 !min-w-[35px] !rounded-full  !text-[#000]'
                  onClick={()=> setIsPasswordShow(!isPasswordShow)}> 

            
                </Button>

                </div>
                <div className='flex items-center w-full mt-2 mb-2'>
                    <Button className='btn-org btn-lg w-full'> Register </Button>
                </div>
                <p className='text-center'> Already have an account? <Link className='link text-[14px] font-[600] pl-1' to="/login"> login</Link></p>

        

                <Button className='flex gap-3 w-full !bg-[#f1f1f1] !btn-lg !text-[#000] '> <FcGoogle className='text-[18px]'/> Sign up with Google </Button>

            </form>

            </div>
        </div>

      
    </section>
  )
}

export default Register