import React from 'react'

const TransactionsHeader = () => {
  return (
    
        <div className="grid grid-cols-12 ">
            <form className='flex col-span-3 mx-2  p-1 border-2 border-gray rounded-sm my-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" className="my-auto mx-1 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input className= 'my-auto mx-2 ' type="search" name="query" id="" placeholder="Search by Order ID..." ></input>
            </form>
            <div className="flex col-start-11 col-span-2 pl-10">
                <div className="flex border-2 border-gray rounded-sm m-2 ">
                    <span className='m-2'>Sort</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 my-auto mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="border-2 border-gray rounded-sm w-10 ml-3 h-10 my-auto p-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
            </div>
        </div>

    
    
  )
}

export default TransactionsHeader
