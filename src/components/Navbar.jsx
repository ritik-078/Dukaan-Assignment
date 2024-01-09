import React from 'react'

const Navbar = () => {
  return (
    <div className='grid grid-cols-12 p-3 bg-white border-gray border-b-2'>
      <span className='text-lg font-semibold col-span-1 my-auto mx-4 p-1'>Payments</span>
      <div className="flex col-span-2 my-auto ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-auto w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
        </svg>
        <span className='mx-2'>How it Works</span>
      </div>
      <div className="col-start-5 col-span-4">
        <form className='flex bg-gray p-2 rounded-md my-auto'>
        <svg xmlns="http://www.w3.org/2000/svg" className="my-auto mx-1 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
          <input className='bg-gray my-auto mx-2 w-4/5' type="search" name="query" id="" placeholder="Search features, tutorials, etc." ></input>
        </form>
      </div>
      <div className="flex col-start-12 col-span-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="bg-gray w-9 h-9 mx-1 p-2 my-auto rounded-3xl" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" className="bg-gray w-9 h-9 mx-1 p-2 rounded-3xl" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
      </svg>

      </div>
    </div>
  )
}

export default Navbar
