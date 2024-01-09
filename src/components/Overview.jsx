import React from 'react'

const Overview = () => {
  return (
    <div className='m-8 '>
      <span className='text-xl font-semibold m-1'>Overview </span>
      <div className="grid grid-cols-2 gap-6 my-6 ">
        <div className="flex flex-col col-span-1 bg-white h-full p-4 rounded-lg">
            <span className="text-lg m-2">Online Orders</span>
            <span className="text-3xl m-2  font-semibold ">231</span>
        </div>
        <div className="flex flex-col col-span-1 bg-white h-full p-4 rounded-lg">
            <span className="text-lg m-2 ">Amount Recieved</span>
            <span className="text-3xl font-semibold m-2"> ₹ 23,92,312.19</span>
        </div>
      </div>
    </div>
  )
}

export default Overview
