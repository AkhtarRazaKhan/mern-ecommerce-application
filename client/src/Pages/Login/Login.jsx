import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { MyContext } from '../../App';

const Login = () => {



    const [formFields, setFormFields] =useState({
      email: "",
      password:""
    })

    
     const Context = useContext(MyContext)
    const history = useNavigate()

    const forgotPassword =()=>{ 

        Context.openAlertBox("success", "OTP Send")
        history("/verify")
        
    }

  return (
    <section className='section py-10'>
        <div className='container'>
            <div className='card shadow-md  w-[420px] m-auto rounded-md bg-white p-5 px-12'> 
            <h3 className='text-center  text-[18px] text-black'> Login to your Account</h3>

            <form className='w-full mt-5'>
                <div className='form-group mb-5'>
                     <TextField
                      type='email'
                      id="email"
                      label="Enter Your Email"
                      variant="outlined"
                      className='w-full'
                      name='email'
                       />

                </div>

               

                <a className='link cursor-pointer text-[14px] font-[600]' 
                onClick= {forgotPassword}> Forgot Password</a>

                <div className='flex items-center w-full mt-3 mb-2'>
                    <Button className='btn-org btn-lg w-full'> Login </Button>
                </div>
                <p className='text-center'> Not Registered? <Link className='link text-[14px] font-[600] pl-1' to="/register"> Sign up</Link></p>

            

                <Button className='flex gap-3 w-full !bg-[#f1f1f1] !btn-lg !text-[#000] '> <FcGoogle className='text-[18px]'/> Login with Google </Button>

            </form>

            </div>
        </div>

      
    </section>
  )
}

export default Login




