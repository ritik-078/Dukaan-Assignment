import React from 'react'
import TransactionsHeader from './TransactionsHeader'
import DataTable from './DataTable'

const Transactions = () => {
    const left = '<', right="  Next   >"
  return (
    <div className='m-8'>
        <span className='text-xl font-semibold mx-1 my-9'>Transactions  | This Month </span>
        <div className=" bg-white rounded-md">
            <TransactionsHeader />
            <DataTable />
        </div>
        <div className="grid grid-cols-12 m-4 mb-4 p-2">
            <span className="col-start-4 col-span-1 border-2 border-gray p-1">{left} Previous</span>
            <span className="col-start-6 col-span-3 my-auto">1 ... 10 11 12 13 14 15 16 17 18</span>
            <span className="col-start-9 col-span-1  border-2 border-gray p-1"> {right}</span>
        </div>
    </div>
  )
}

export default Transactions
