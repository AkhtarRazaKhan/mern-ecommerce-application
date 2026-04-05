import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from "react-icons/io5";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { FaRegPlusSquare } from "react-icons/fa";
import { FiMinusSquare } from "react-icons/fi";
import { Link } from 'react-router-dom';


const CategoryPanel = (props) => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
        props.setIsOpenCatPanel(newOpen)

    }; // see Q.2 reactNotes

// OpenSubMenu 

 const [submenuIndex, setSubmenuIndex] = useState(null)
 const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null)

    const openSubmenu =(index)=> {
        if(submenuIndex==index){
            setSubmenuIndex(null)
        }
        else {
            setSubmenuIndex(index)
        }
        
    }

    // InnerSubmenu
     const openInnerSubmenu =(index)=> {
        if(innerSubmenuIndex==index){
            setInnerSubmenuIndex(null)
        }
        else {
            setInnerSubmenuIndex(index)
        }
        
    }
 
    const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
 
    <div className='w-[75%] ml-4 mt-4 mb-3'> 
    <Link to={"/"}>
            <img src="/logo.jpg" />
    </Link>
    </div>

    <h3 className='p-3 text-[15px] !font-[600] !flex items-center justify-between'> Shop By Categories <IoCloseSharp className="cursor-pointer" onClick={toggleDrawer(false)} />
    </h3>

<div className='scroll'>
    <ul className="w-full ">

      

        {/* first Menu Fashion */}
        <li className="list-none flex items-center relative flex-col ">
            <Link to="/" className='w-full'> 
            <Button className="w-full !font-[600] !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.9)] ">
                Fashion
            </Button>
            </Link> 

             {/* + - Toggle  */}

             {
                submenuIndex === 0? 
                <FiMinusSquare
                 className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={()=> openSubmenu(0)}
                /> : 
                <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={()=> openSubmenu(0)} />
             }

             {
                submenuIndex===0 &&
                 <ul className="submenu w-full pl-3">

                {/* first SubMenu (women)0 */}

                <li className="list-none relative">
                  
                    
                {

                    innerSubmenuIndex === 0 ? (
                    <FiMinusSquare
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(0)}
                    />
                    ) : (
                    <FaRegPlusSquare
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(0)}
                    />
                    )
                  }
                        
                   

                </li>
                {/* second SubMenu (men) 1 */}

                <li className="list-none relative">
                    <Link to="/" className='w-full'>
                    <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                      Men
                    </Button>
                 </Link>
                    
                {

                    innerSubmenuIndex === 1 ? (
                    <FiMinusSquare
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(1)}
                    />
                    ) : (
                    <FaRegPlusSquare
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(1)}
                    />
                    )
                  }
                        
                    {
                            innerSubmenuIndex===1 &&

                            <ul className="inner_submenu  w-full pl-3">
                        <li className="list-none relative mb-1">
                            <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                Jeans
                            </Link>
                            
                        </li>
                         <li className="list-none relative mb-1">
                            <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                               T-Shirt
                            </Link>
                    
                        </li>
                         <li className="list-none relative mb-1">
                            <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                Watches
                            </Link>
                           
                        </li>
                         <li className="list-none relative mb-1">
                            <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                             Shirt
                            </Link>
                

                        </li>
                    </ul>
                        }

                </li>
            </ul>
             }
 
        </li>

        {/* second Menu Electronics */}
        <li className="list-none flex items-center relative flex-col ">
            <Link to="/" className='w-full'> 
            <Button className="w-full !font-[600] !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Electronics
            </Button>
            </Link> 

             {/* + - Toggle  */}

             {
                submenuIndex === 2? 
                <FiMinusSquare
                 className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={()=> openSubmenu(2)}
                /> : 
                <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={()=> openSubmenu(2)} />
             }

             {
                submenuIndex===2 &&
                 <ul className="submenu w-full pl-3">

                {/* first SubMenu (Mobile) 2 */}

                <li className="list-none relative">
                    <Link to="/" className='w-full'>
                    <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                      Mobile
                    </Button>
                 </Link>
                    
                {

                    innerSubmenuIndex === 2 ? (
                    <FiMinusSquare
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(2)}
                    />
                    ) : (
                    <FaRegPlusSquare
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(2)}
                    />
                    )
                  }
                        
                    {
                            innerSubmenuIndex===2 &&

                            <ul className="inner_submenu  w-full pl-3">
                        <li className="list-none relative mb-1">
                            <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                Realme
                            </Link>
                            
                        </li>
                         <li className="list-none relative mb-1">
                            <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                               Samsung
                            </Link>
                    
                        </li>
                         <li className="list-none relative mb-1">
                            <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                Oppo
                            </Link>
                           
                        </li>
                         <li className="list-none relative mb-1">
                            <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                             Vivo
                            </Link>
                

                        </li>
                    </ul>
                        }

                </li>
                {/* second SubMenu (Laptop) 3 */}

                <li className="list-none relative">
                    <Link to="/" className='w-full'>
                    <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                      Laptop
                    </Button>
                 </Link>
                    
                {

                    innerSubmenuIndex === 3 ? (
                    <FiMinusSquare
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(3)}
                    />
                    ) : (
                    <FaRegPlusSquare
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openInnerSubmenu(3)}
                    />
                    )
                  }
                        
                    {
                            innerSubmenuIndex===3 &&

                            <ul className="inner_submenu  w-full pl-3">
                        <li className="list-none relative mb-1">
                            <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                ASUS
                            </Link>
                            
                        </li>
                         <li className="list-none relative mb-1">
                            <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                               MacBook
                            </Link>
                    
                        </li>
                         <li className="list-none relative mb-1">
                            <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                Samsung Book
                            </Link>
                           
                        </li>
                         <li className="list-none relative mb-1">
                            <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px]">
                             Acer
                            </Link>
                
                        </li>
                    </ul>
                        }

                </li>
            </ul>
             }
 
        </li>

        {/* Third Menu Bags  */}
        <li className="list-none flex items-center relative flex-col ">
            <Link to="/" className='w-full'> 
            <Button className="w-full !font-[600] !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
            </Button>
            </Link> 

             {/* + - Toggle  */}

             {
                submenuIndex === 4? 
                <FiMinusSquare
                 className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={()=> openSubmenu(4)}
                /> : 
                <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={()=> openSubmenu(4)} />
             }

             {
                submenuIndex===4 &&
                 <ul className="submenu w-full pl-3">

                {/* first SubMenu (Men bags )0 */}

                <li className="list-none relative">
                    <Link to="/" className='w-full'>
                    <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                      Men Bags
                    </Button>
                 </Link>
                 
                </li>
                 <li className="list-none relative">
                    <Link to="/" className='w-full'>
                    <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                      Women Bags
                    </Button>
                 </Link>
                 
                </li>
            </ul>
             }
 
        </li>

        {/* Fourth Menu Footwear */}
         <li className="list-none flex items-center relative flex-col ">
            <Link to="/" className='w-full'> 
            <Button className="w-full !font-[600] !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Footwear
            </Button>
            </Link> 

             {/* + - Toggle  */}

             {
                submenuIndex === 5? 
                <FiMinusSquare
                 className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={()=> openSubmenu(5)}
                /> : 
                <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={()=> openSubmenu(5)} />
             }

             {
                submenuIndex===5 &&
                 <ul className="submenu w-full pl-3">

                {/* first SubMenu (Men bags )0 */}

                <li className="list-none relative">
                    <Link to="/" className='w-full'>
                    <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                      Men Footwear
                    </Button>
                 </Link>
                 
                </li>
                 <li className="list-none relative">
                    <Link to="/" className='w-full'>
                    <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)]">
                      Women footwear
                    </Button>
                 </Link>
                 
                </li>
            </ul>
             }
 
        </li>

        {/* fiveth Menu Groceries */}
        <li className="list-none flex items-center relative flex-col ">
            <Link to="/" className='w-full'> 
            <Button className="w-full !font-[600] !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Groceries
            </Button>
            </Link> 

             {/* + - Toggle  */}

             {
                submenuIndex === 6? 
                <FiMinusSquare
                 className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={()=> openSubmenu(6)}
                /> : 
                <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={()=> openSubmenu(6)} />
             }

             {
                submenuIndex===6 &&
                 <ul className="submenu w-full pl-3">

                {/* Add SubMenu below (Men bags )0 */}
            </ul>
             }
 
        </li>

        {/* fiveth Menu Groceries */}
        <li className="list-none flex items-center relative flex-col ">
            <Link to="/" className='w-full'> 
            <Button className="w-full !font-[600] !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Wellness
            </Button>
            </Link> 

             {/* + - Toggle  */}

             {
                submenuIndex === 7? 
                <FiMinusSquare
                 className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={()=> openSubmenu(7)}
                /> : 
                <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={()=> openSubmenu(7)} />
             }

             {
                submenuIndex===7 &&
                 <ul className="submenu w-full pl-3">

                {/* Add SubMenu below (Men bags )0 */}
            </ul>
             }
 
        </li>

        {/* Sixth Menu Groceries */}
        <li className="list-none flex items-center relative flex-col ">
            <Link to="/" className='w-full'> 
            <Button className="w-full !font-[600] !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Jewerelly
            </Button>
            </Link> 

             {/* + - Toggle  */}

             {
                submenuIndex === 8? 
                <FiMinusSquare
                 className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={()=> openSubmenu(8)}
                /> : 
                <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={()=> openSubmenu(8)} />
             }

             {
                submenuIndex===8 &&
                 <ul className="submenu w-full pl-3">

                {/* Add SubMenu below (Men bags )0 */}
            </ul>
             }
 
        </li>
    </ul>

</div>


    </Box>
    );
    return (
        <div>

            <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    )
}

export default CategoryPanel
