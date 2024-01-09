import React from 'react'
import Navbar from "./Navbar.jsx";
import Overview from './Overview.jsx';
import Transactions from './Transactions.jsx';
const Main = () => {
  return (
    <div className='bg-gray2 h-full'>
      <Navbar />
      <Overview />
      <Transactions />
    </div>
  )
}

export default Main
