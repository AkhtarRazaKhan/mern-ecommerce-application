import React, { useContext } from 'react'
import ProductTable from '../../Components/ProductTable/ProductTable'
import { Button } from '@mui/material'
import { IoMdAdd } from 'react-icons/io'
import { MyContext } from '../../App'

const ProductList = () => {

  const Context = useContext(MyContext)

  return (
    <>
    <div className="card bg-[#ffffffd3] shadow-md rounded-md p-8 flex items-center justify-between ">
            <h1 className='font-[700] text-[20px] text-gray-800'> Products</h1>
            <Button className='btn-blue btn-sm ml-auto'  onClick={()=> Context.setIsOpenFullScreenPanel({
              open: true,
              model: 'Add Product'
            })}> <IoMdAdd className='text-white text-[20px]'/>  Add Products </Button>
    </div>
    <ProductTable/>
        
      
    </>
  )
}

export default ProductList
