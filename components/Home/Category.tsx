import { getAllCategory } from '@/Request/request'
import React from 'react'

const Category = async() => {
  const categories:string[]=await getAllCategory();
  
  return (
    <div className='text-center'>
      <h1 className='text-2xl font-bold '>All Available Categories</h1>
      <div className="grid grid-cols-2 md:flex md:justify-around mt-10">
        {categories.map((item,index)=>{
          return (<div key={index} className='bg-gray-400 rounded-lg text-xl px-6 py-3 cursor-pointer hover:bg-gray-300' >{item}</div>
          )
        })}
      </div>
    </div>
  )
}

export default Category