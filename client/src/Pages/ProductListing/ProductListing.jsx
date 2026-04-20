import React from 'react'


const ProductListing = () => {

  // From MUI 
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 
   const [itemView, setItemView] = useState('grid')




  return (
    <section className='py-5 mt-5 bg-white'>
      <div className='container  flex gap-3 h-full'>
        <div className='sidebarWrapper w-[20%] shrink-0'>
          <Sidebar />
        </div>



    {/* RightContent (Products) */}

        <div className='righContent w-[80%]'>


           {/* Grid Logo (Product View) */}

      
             <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              
              slotProps={{
                list: {
                  'aria-labelledby': 'basic-button',
                },
              }}
            >
              <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000]'>Name , A to Z</MenuItem>
              <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000]' >Name , Z to A</MenuItem>
              <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000]'>Price, low to high</MenuItem>
              <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000]'>Price, high to low</MenuItem>
              
      
            </Menu>

            </div>
           
          </div>  

          {/* RightContent (Products) Start */}
  

    
          
          <div className={`grid ${itemView==='grid' ? 'grid-cols-4 md:grid-cols-4 gap-4' : 
          'grid-cols-1 md:grid-cols-1'} gap-4`}>

            {
              itemView === 'grid' ?
              <>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
         
            :
           
            }

            

          </div>

        </div>

      </div>
    </section>
  )
}

export default ProductListing
