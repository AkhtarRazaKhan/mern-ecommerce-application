import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import { RiMenu2Line } from "react-icons/ri"
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FaRegBell } from "react-icons/fa"
import { MyContext } from '../../App';


// cart functionality from Material UI
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));



const Header = () => {
  const Context = useContext(MyContext)

  return (
    <header className={`w-full h-[auto] ${Context.isSidebarOpen===true ? 'pl-64' : 'pl-5'} py-2 pr-7 shadow-md bg-[#fff] flex items-center justify-between transition-all `}>
        <div className='part1'>
           

        </div>

          <div className='part2 w-[40%] flex items-center justify-end gap-5'>
            <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegBell />
                    </StyledBadge>
            </IconButton>

            {
              Context.isLogin === true ? 
              <div className='rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer'>
              <img src='/product1.jpg' className='w-full h-full object-cover'/>

            </div> :
            <div>
              <Button className='!w-[80px] text-[20px] font-[600] text-blue-600 '>
                Sign Up
              </Button>
            </div>
            }

            

        </div>
      
    </header>
  )
}

export default Header

