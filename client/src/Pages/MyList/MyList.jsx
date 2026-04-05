import React from 'react';
import Button from '@mui/material/Button';
import { BsFillBagCheckFill } from "react-icons/bs";
import MyListItems from './MyListItems';
import AccountSidebar from '../../components/AccountSidebar/AccountSidebar';


const MyList = () => {

  return (
    <>
     <section className='w-full py-10'>
        <div className='container flex gap-5'>

           
            <div className='col1 w-[15%]'>
               {/* Component */}
            <AccountSidebar/>
            </div>

            <div className='col2 w-[60%]'>


            <div className='shadow-md rounded-md bg-white'>

            <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.1)]'>
             <h2> My List </h2>
              <p className='mt-0'> There are <span className='font-bold text-primary'> 2 </span> Prodcuts in your My List</p> </div>

          {/* MyListItems Component */}
          <MyListItems/>
          <MyListItems/>
          <MyListItems/>
          <MyListItems/>
          <MyListItems/>
          <MyListItems/>
          <MyListItems/>
          <MyListItems/>
          <MyListItems/>
          </div>
            </div>
        </div>
    </section>



    </>
  )
}

export default MyList
