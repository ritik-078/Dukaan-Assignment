import React from 'react'
import logo from '../data/logo.png'
import dropDown from '../data/drop-down.png'
import Content from './Content.jsx'

const Sidebar = () => {
  return (
    <div className='flex flex-col h-full'>
      <div className="flex flex-row m-4">
          <img src={logo} alt='Logo' className='w-14 h-14 rounded-xl'/>
          <div className="flex flex-col grow ml-3 my-auto">
            <span className='text-white text-xl'>Nishyan</span>
            <span className='text-white text-md underline decoration-solid'>Visit Store</span>
          </div>
          <img src={dropDown} alt='Logo' className='w-6 h-6 my-auto'/>
      </div>
      <Content />
      <div className="flex bg-sidebar2 rounded-md mx-4 mt-96">
        <div className="bg-sidebar rounded-md m-2 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8 p-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
          </svg>
        </div>
        <div className="flex flex-col text-white text-md mx-2 my-auto">
          <span>Available credits</span>
          <span>222.10</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
