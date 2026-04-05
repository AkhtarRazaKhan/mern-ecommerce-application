import React, { useState } from 'react'
import AccountSidebar from '../../components/AccountSidebar/AccountSidebar'
import { Button } from '@mui/material'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'
import Badge from './Badge'




const MyOrders = () => {

  const [isOpenOrderProduct , setIsOpenOrderProduct] = useState(null)

   const isShowOrderProduct =(index)=> {

    if(isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null)
    } else{
      setIsOpenOrderProduct(index)
    }
    
   }
 


  return (
    <section className='w-full py-10'>
        <div className='container flex gap-5'>

             <div className='col1 w-[15%]'>
            {/* Component */}
            <AccountSidebar/>
            </div>

            <div className='col2 w-[80%]'>


            <div className='shadow-md rounded-md bg-white'>

            <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.1)]'>
             <h2> My List </h2>
              <p className='mt-0'> There are <span className='font-bold text-primary'> 2 </span> Prodcuts in your My List</p>

              {/* TailwindCss Table */}

    <div className='shadow-md w-full p-5 mb-5 rounded-md mt-5'>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col1" className="px-6 py-3">
                  &nbsp;

                    </th>
                <th scope="col2" className="px-6 py-3  whitespace-nowrap">Order Id</th>

                <th scope="col3" className="px-6 py-3 whitespace-nowrap">Payment Id</th>
                <th scope="col4" className="px-6 py-3 whitespace-nowrap">Name</th>
                
              </tr>
            </thead>
            <tbody>
              {/* Main Changeable Data  */}

              <tr className="bg-white border-b border-gray-200 font-[600]">
                
                <td className="px-6 py-4">
                   <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]' onClick={()=> isShowOrderProduct(0)}> 
                    
                    {
                      isOpenOrderProduct === 0 ? 
                      <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> :
                      <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                    }
                    

                     </Button>

                </td>
            
                <td className="px-6 py-4">
                    <span className='text-primary'> 8965283478342092384</span>
                </td>
                <td className="px-6 py-4">
                     <span className='text-primary'> 8989f9sdfg5656sdf98</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Code with ak</td>
                <td className="px-6 py-4">9874561230</td>
                <td className="px-6 py-4">
                    <span className='block w-[300px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, provident?</span>
                </td>
                <td className="px-6 py-4">456008</td>
                <td className="px-6 py-4">999</td>
                 <td className="px-6 py-4">codewithak@gmail.com</td>
                <td className="px-6 py-4">
                    <span className='text-primary'> 98653204556 </span>
                </td>
                <td className="px-6 py-4"> <Badge status="success"/> </td>
                <td className="px-6 py-4 whitespace-nowrap">20/09/25</td>
                
              </tr>

              {
                 isOpenOrderProduct ===0  &&
                 <tr>
                <td className=' pl-20' colSpan={6}>

                  {/* Another Table */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3  whitespace-nowrap">Product Id</th>

                <th scope="col" className="px-6 py-3 whitespace-nowrap">Product Title</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Product Image</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Quantity</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Price</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Subtotal</th>
              
            
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b border-gray-200 font-[600]">
                
                <td className="px-6 py-4 text-primary">8554599865658</td>
                <td className="px-6 py-4">
                    <span className='text-primary'> Lorem ipsum dolor sit amet.</span>
                </td>
                <td className="px-6 py-4">
                     <span className='text-primary'>
                      <img src='/product1c.jpg' className='w-[50px] h-[50px] object-cover rounded-md'/>
                     </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">2</td>
                <td className="px-6 py-4">999</td>
                <td className="px-6 py-4">
                  999
                </td>
               
                

                
              </tr>

              <tr>
                <td className='bg-[#f1f1f1]' colSpan={12}>


                </td>
              </tr>

  
            </tbody>
          </table>
        </div>
        


                </td>
              </tr>

              }

              

               {/* Main Changeable Data  */}
            

  
            </tbody>
          </table>
        </div>
    </div>
              
    </div>

          {/* Badge component belongs to MyOrders not MyOrders2*/}
          
          </div>
            </div>
        </div>
    </section>
  )
}

export default MyOrders
