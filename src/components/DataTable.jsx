import React from 'react'
import {Transactions} from '../data/transactionsData.js'

const DataTable = () => {
  return (
      <table className='w-full m-2'>
      <thead className='bg-gray3 rounded-md '>
        <tr className='grid grid-cols-4 text-md p-2'>
            <th className='text-left'>Order ID</th>
            <th className='text-left'>Order Date ▼</th>
            <th className='text-right'>Order amount</th>
            <th className='text-right'>Transaction fees ⓘ</th>
        </tr>
      </thead>
      <tbody className='m-1'>
        {/* map through the Transaction array and create a new table row for each object */}
        {Transactions.map(transaction => (
        /* use JSX to dynamically insert data into HTML tags */
            <tr className='grid grid-cols-4 p-2 m-0.5 border-b-2 border-gray4'>
                <td className='text-left text-blue'>{transaction.id}</td>
                <td className='text-left'>{transaction.date}</td>
                <td className='text-right'>₹ {transaction.amount}</td>
                <td className='text-right'>₹ {transaction.fees}</td>
            </tr>
        ))}
     </tbody>

    </table>
  )
}

export default DataTable
