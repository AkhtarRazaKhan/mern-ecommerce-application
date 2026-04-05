import React from 'react'
import DashboardBoxes from '../../Components/DashboardBoxes/DashboardBoxes'
import Button from '@mui/material/Button'
import { FaPlus } from 'react-icons/fa'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'
import Badge from '../../Components/Badge'
import { useState } from 'react'
// import ProductTable from '../../Components/ProductTable2'
import ProductTable from '../../Components/ProductTable/ProductTable'

import { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

  // For tailwind Table from MyOrder-client
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null)

  // Graph Chart
  const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

  const [Chart1Data, setChart1Data] = useState(data)

  const isShowOrderProduct = (index) => {

    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null)
    } else {
      setIsOpenOrderProduct(index)
    }

  }

  return (
    <>
      <div className='w-full bg-[#f1faff] p-6 border border-[rgba(0,0,0,0.1)] flex items-center justify-between rounded-md mb-5 gap-8 '>
        <div className='info'>
          <h1 className='text-[35px] font-[600] leading-9 mb-3'> Hello <br /> Mr Khan</h1>
          <p> Here's What happening on your store today. See the statistics at once</p>
          <br />

          <Button className='btn-blue !capitalize'><FaPlus /> Add Product </Button>
        </div>

        <img src='/shop.png' className='w-[250px]' />
      </div>
      <DashboardBoxes />


      <div className='cart my-4 bg-white  shodow-md sm:rounded-lg'>
        <div className='flex items-center justify-between px-5 py-5'>
          <h1 className='text-[18px] font-[600]'> Recent Orders </h1>

        </div>
        {/* Tailwind Table from Myorder-client */}

        <div className='shadow-md w-full mb-5 rounded-md '>
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
                  <th scope="col5" className="px-6 py-3 whitespace-nowrap">Phone Number</th>
                  <th scope="col6" className="px-6 py-3 whitespace-nowrap">Adress</th>
                  <th scope="col7" className="px-6 py-3 whitespace-nowrap">Pincode</th>
                  <th scope="co8" className="px-6 py-3 whitespace-nowrap">Total Amount</th>
                  <th scope="col9" className="px-6 py-3 whitespace-nowrap">Email</th>
                  <th scope="col10" className="px-6 py-3 whitespace-nowrap">User id</th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">Order Status</th>
                  <th scope="col11" className="px-6 py-3 whitespace-nowrap">Date</th>

                </tr>
              </thead>
              <tbody>
                {/* Main Changeable Data  */}


                {/* First Table and SubTable */}
                <tr className="bg-white border-b border-gray-200 font-[600]">

                  <td className="px-6 py-4">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]' onClick={() => isShowOrderProduct(0)}>

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
                  <td className="px-6 py-4"> <Badge status="success" /> </td>
                  <td className="px-6 py-4 whitespace-nowrap">20/09/25</td>

                </tr>

                {(
                  isOpenOrderProduct === 0 &&
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
                                  <img src='/product1.jpg' className='w-[50px] h-[50px] object-cover rounded-md' />
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

                )}

                {/* Second Table and SubTable */}
                <tr className="bg-white border-b border-gray-200 font-[600]">

                  <td className="px-6 py-4">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]' onClick={() => isShowOrderProduct(1)}>

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
                  <td className="px-6 py-4"> <Badge status="success" /> </td>
                  <td className="px-6 py-4 whitespace-nowrap">20/09/25</td>

                </tr>

                {(
                  isOpenOrderProduct === 1 &&
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
                                  <img src='/product1.jpg' className='w-[50px] h-[50px] object-cover rounded-md' />
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

                )}


              </tbody>
            </table>
          </div>
        </div>

        {/* Product Section */}

        <div className='flex items-center justify-between px-5 py-5'>
          <h1 className='text-[18px] font-[600]'> Recent Orders </h1>
        </div>
        <ProductTable />


        {/* Graph Chart */}
        <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
          <div className='flex items-center jsutify-between px-5 py-5 pb-0'>
            <h2 className='text-[18px] font-[600]'>Total Users & Total Sales </h2>
          </div>

        <div className='flex items-center gap-5 px-5 py-5 pt-2'>
          <span className='flex items-center gap-1 text=[15px]'> 
            <span className='block w-[8px] h-[8px] rounded-full bg-green-600'> 
              </span> Total Users </span>

            
          <span className='flex items-center gap-1 text=[15px]'> 
            <span className='block w-[8px] h-[8px] rounded-full bg-primary'> 
              </span> Total Sales </span>

        </div>

        
          
            <LineChart
              width={1000}
              height={500}
              data={Chart1Data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="none" />
              <XAxis dataKey="name" tick={{fontSize: 12}} />
              <YAxis tick={{fontSize: 12}} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={3} />
            </LineChart>
          

        </div>

      </div>



    </>
  )
}

export default Dashboard
