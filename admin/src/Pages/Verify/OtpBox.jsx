import React, { useState } from 'react'

// This is the component use in client component section

const OtpBox = ({length, onChange}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""))

  const handleChange = (element, index)=> {
    const value = element.value;
    if (isNaN(value)) return //Only Numbers Allowed
  

  //Update OTP value
  const newOTP =[...otp];
  newOTP[index] = value;
  setOtp(newOTP);
  onChange(newOTP.join(""))

  // Focus on next input
  if(value && index < length-1) {
    document.getElementById(`otp-input-${index +1}`).focus()
  }
  };

  const handleKeyDown =(event, index)=> {
    if(event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index -1}`).focus()
    }
  }
  

  return (
    <div style={{ display: 'flex', gap: '5px', justifyContent:'center' }} className='otpBox'>
      {otp.map((data, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength="1"
          value={otp[index]}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className='w-[45px] h-[45px] text-center text-[17px]'
        
        />
      ))}
    </div>
  )
}

export default OtpBox
