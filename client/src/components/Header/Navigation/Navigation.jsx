import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { LiaAngleUpSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import CategoryPanel from './CategoryPanel';
import "../Navigation/style.css"
import { BiSupport } from "react-icons/bi";


const Navigation = () => {
 
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false)

    const openCategoryPanel =()=> {
        setIsOpenCatPanel(true)
    }

return (
   <>
    <nav>
        <div className='container flex items-center justify-end  gap-9 !mt-1 '>
            <div className='col1 w-[20%]'>
                <Button className='!text-black gap-2 w-full' onClick={()=> openCategoryPanel(true)}> <RiMenu2Fill className='text-[18px]' />
                 Shop By Catergories

                 {
                    isOpenCatPanel === true?
                    <LiaAngleUpSolid className='text-[13px] ml-auto font-bold ' /> :
                    <LiaAngleDownSolid className='text-[13px] ml-auto font-bold ' />
                 }


                
                
                 </Button>
            </div>

            <div className='col2 w-[60%]'>
                <ul className='flex items-center gap-4'>
                    <li className='list-none'>

                        <Link to="/" className="link transition text-[14px] font-[500]">
                         <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'>
                             Home
                            </Button>
                        </Link>

                    </li>

                    <li className='list-none relative'>

                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'> Fashion </Button>
                        </Link> 

                    {/* Menu Bar inside Fashion */}

                    <div className='menu absolute top-[100%] min-w-[200px]
                     bg-white shadow-md opacity-0 transition-all'>
                        <ul>    
                            <li className='list-none w-full relative'>
                               <Link>
                               <Button className='w-full !text-left !justify-start 
                               '> Men
                               </Button>
                            </Link>

                        {/* SubMenu inside Men (Menu)  */}
                         <div className='submenu absolute top-[0%] left-[100%] min-w-[200px]
                     bg-white shadow-md opacity-0 transition-all'>
                        <ul>
                            <li className='list-none w-full'>
                                <Link>
                               <Button className='w-full !text-left !justify-start 
                               '> Men</Button>
                               </Link>
                            </li>
                
                            <li className='list-none w-full'>
                                <Link> 
                               <Button className='w-full !text-left !justify-start
                                '>Women</Button>
                                </Link>
                            </li>
        
                          
                        </ul>

                    </div>
                            </li>

                    {/* SubMenu inside Men End */}

                    {/* {Second Menu Start Women}*/}

                    

                        </ul>

                    </div>

                    </li>

                    {/* Menu End */}

                    <li className='list-none'>

                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'> Electronics </Button></Link> 

                    </li>

                    <li className='list-none'>

                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'> Bags </Button> </Link> 

                    </li>

                    <li className='list-none'>

                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'> Footwear </Button></Link>

                    </li>

                    <li className='list-none'>

                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'> Groceries </Button> </Link>

                    </li>

                    <li className='list-none'>

                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'> Beauty </Button></Link>

                    </li>

                    <li className='list-none'>

                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ff5252] !py-4'>Jewellery  </Button></Link>

                    </li>

                </ul>


            </div>

        <div className='col2 w-[20%] flex justify-end'>
            <p className='text-[14px] font-[500] flex items-center gap-2 mb-0 mt-0 '> 
                <BiSupport className='text-[20px]' />
              <Link to="/" className='link transition '> 24/7 Support Center  </Link> 
            </p>
        </div>


        </div>
    </nav>

{/* Category  Panel Component */}
    <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel ={setIsOpenCatPanel}/>
   </>
)
}

export default Navigation
