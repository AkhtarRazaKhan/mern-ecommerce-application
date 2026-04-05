import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { MyContext } from '../../App';

const ForgotPassword = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isPasswordShow2, setIsPasswordShow2] = useState(false);

  const Context = useContext(MyContext);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[420px] bg-white rounded-md shadow-md p-8 text-center">
        {/* <img
          src="/shield-icon.svg"
          alt="Shield Icon"
          className="w-12 mx-auto mb-4"
        /> */}
        <h2 className="text-2xl font-bold mb-1">Welcome Back!</h2>
        <p className="text-[15px] font-semibold text-gray-700 mb-6">
          Please Reset Your Password
        </p>

        <form>
          {/* New Password */}
          <div className="mb-5 relative">
            <TextField
              type={isPasswordShow ? 'text' : 'password'}
              label="New Password"
              variant="outlined"
              className="w-full"
            />
            <Button
              onClick={() => setIsPasswordShow(!isPasswordShow)}
              className="!absolute top-[10px] right-[10px] !w-[35px] h-[35px] !min-w-[35px] !rounded-full !text-black"
            >
              {isPasswordShow ? (
                <IoMdEye className="text-[20px] opacity-75" />
              ) : (
                <IoMdEyeOff className="text-[20px] opacity-75" />
              )}
            </Button>
          </div>

          {/* Confirm Password */}
          <div className="mb-5 relative">
            <TextField
              type={isPasswordShow2 ? 'text' : 'password'}
              label="Confirm Password"
              variant="outlined"
              className="w-full"
            />
            <Button
              onClick={() => setIsPasswordShow2(!isPasswordShow2)}
              className="!absolute top-[10px] right-[10px] !w-[35px] h-[35px] !min-w-[35px] !rounded-full !text-black"
            >
              {isPasswordShow2 ? (
                <IoMdEye className="text-[20px] opacity-75" />
              ) : (
                <IoMdEyeOff className="text-[20px] opacity-75" />
              )}
            </Button>
          </div>

          {/* Submit */}
          <Button
            variant="contained"
            fullWidth
            className="!bg-[#3b82f6] !text-white !py-3 !rounded-md !text-sm !font-semibold"
          >
            CHANGE PASSWORD
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;







