import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';


const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1); // default starting value

  const handleDecrease = () => {
    if(quantity===1){
      setQuantity(1)
    }
    else{
      setQuantity(prev => prev - 1);

    }
    
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val)) {
      setQuantity(val);
    }
  };

  return (
    <div className="prodcutDetails qty flex items-center gap-1">
      <Button
        onClick={handleDecrease}
        className="btn-circle text-[14px] w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-black hover:bg-primary hover:text-white transition cursor-pointer"
      >
        <AiOutlineMinus size={19} />
      </Button>


      
    </div>
  );
};

export default QuantityInput;

