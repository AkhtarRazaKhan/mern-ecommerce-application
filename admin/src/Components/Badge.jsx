import React from 'react'

const Badge = (props) => {

  return (

        <span className={`inline-block py-1 px-4 rounded-full capitalize 
      ${props.status === "pending" && 'bg-primary text-white'} 
      ${props.status === "confirm" && 'bg-green-500 text-white'} 
      ${props.status === "Delivered" && 'bg-green-700 text-white'}
      ${props.status === "success" && 'bg-blue-500 text-white'}
    `}>
      {props.status}
    </span>


  )
}

export default Badge

// this is for  tailwind css table use in Dashboard (recenet orders) and copy form client MyOrders


