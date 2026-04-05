import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "./Seacrh/Search";
import Navigation from "./Navigation/Navigation";

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';
import { MyContext } from "../../App";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
// import { IoLocationOutline } from "react-icons/io5";

//Account Menu in MUI
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Box from "@mui/material/Box";



// cart btn functionality from Material UI
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));




const Header = () => {

  // Account Menu in MUI
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const Context = useContext(MyContext)
  return (
    <header className="bg-white">
      <div className="header py-4 border-b-[1px] border-b-gray-200 ">
        <div className="container flex items-center justify-between">
          <div className="col w-[20%]">
            <Link to={"/"}>
              <img src="/logo.jpg" />
            </Link>
          </div>

          <div className="col2 w-[45%]">
            <Search />
          </div>

          <div className="col3 w-[30%] flex items-center">
            <ul className="flex items-center justify-end gap-3 w-full ">

              {
                Context.isLogin === false ?
                 <li className="list-none pr-4">
                <Link to="/login" className="link transition text-[16px] font-[500]"> Login </Link> |
                <Link to="/register" className="link transition text-[16px] font-[500]"> Register </Link>
              </li>
              : (
                <>
                <Box className="myAccountWrap flex items-center gap-3 cursor-pointer"
                onClick={handleClick}>

                  <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full
                   !bg-[#f1f1f1]"> <FaRegUser className="text-[16px] 
                   text-[rgba(0,0,0,0.7)] " /></Button>

                   <div className="info flex flex-col ">
                    <h4 className="text-[14px] text-[rgba(0,0,0,0.6)] font-[500]
                    capitalize text-left justify-start leading-3.5"> Mr Khan</h4>
                    <span className="  text-[13px] text-[rgba(0,0,0,0.6)] font-[400] capitalize text-left justify-start"> mrkhan@gmail.com</span>
                   </div>

                </Box>  

                {/* You have a <Button> inside another <Button>, which is invalid HTML and causes the hydration error. instead of this we use <Box>*/}

            {/* Account Menu from MUI  */}

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
              <Link to="/myaccount" className="w-full block">
                <MenuItem onClick={handleClose} className="flex gap-2 !py-2">
                  <FaRegUser className="text-[18px]" />  <span className="text-[14px]"> 
                    My Account </span> 
                </MenuItem>
              </Link>

              <Link to="/myorders" className="w-full block">
                <MenuItem onClick={handleClose} className="flex gap-2 !py-2">
                  <IoBagCheckOutline className="text-[18px]" /> <span className="text-[14px]"> Orders </span> 
                </MenuItem>
              </Link>

              <Link to="/mylist" className="w-full block">
                 <MenuItem onClick={handleClose} className="flex gap-2 !py-2">
                  <FaRegHeart className="text-[18px]" /> <span className="text-[14px]"> 
                    My List </span> 
                </MenuItem>
             </Link>


             <Link to="/" className="w-full block">
                 <MenuItem onClick={handleClose} className="flex gap-2 !py-2">
                  <IoIosLogOut className="text-[18px]"/> <span className="text-[14px]">
                     Logout </span> 
                </MenuItem>
              </Link>

              </Menu>

              </>
              )
              }
             

              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoGitCompareOutline />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="WishList">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart" onClick={()=> Context.setOpenCartPanel(true)}>
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

            </ul>


          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
