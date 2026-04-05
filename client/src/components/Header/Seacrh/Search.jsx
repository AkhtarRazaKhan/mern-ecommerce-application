import React from 'react'
import '../Seacrh/style.css'
import Button from '@mui/material/Button'
import { IoSearch } from "react-icons/io5";


const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2 '>

      <input type='text' placeholder='Search for Products...' className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]'></input>

      <Button className='!absolute top-[6px] right-[5px] !w-[37px] !min-w-[37px] h-[37px] 
      !rounded-full '> <IoSearch className='text-black text-[18px]'/> </Button>
      
    </div>
  )
}

export default Search
