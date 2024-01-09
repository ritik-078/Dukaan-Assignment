import React from 'react'
import {lists} from '../data/lists.js'

const Content = () => {

    return (     
        <div  className="flex flex-col m-2">
            {lists.map((list) => 
                <div  className="flex flex-row mx-1 p-2.5 hover:bg-sidebar2 hover:rounded-md">
                    <img src={list.icon} alt='icon' className='ml-1 my-auto w-7 h-7' />
                    <h4 className="ml-5 my-auto text-white text-lg">{list.name}</h4>
                </div>
                )
            }
        </div>
    )
}

export default Content
