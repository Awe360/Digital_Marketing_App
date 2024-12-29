'use client'

import { Product } from '@/type/ProductType'
import { Heart, StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

 type props={
    product:Product,
 }
const ProductCard = ({product}:props) =>{
    const num=Math.round(product.rating.rate);
    console.log(product.image);
    const ratingArray=new Array(num).fill(0);

    console.log("image url:"+product.image)
  return (<div className="flex flex-col justify-end mt-10 mb-5 mx-5">
    <div className='flex justify-center items-baseline '>
    {<Image alt="prouct image" src={product.image} width={100} height={100} className='w-[80%] h-[80%] object-contain cursor-pointer'/>}
    
    </div>
    <div className="flex flex-col items-start sm:truncate">
    <div className="capitalize">{product.category}</div>
    <Link href={`/product/product-details/${product.id}`}>
    <p className='text-bold hover:underline sm:truncate cursor-pointer hover:text-blue-900'>{product.title}</p>
    </Link>
    <div className='flex'>
      {ratingArray.map((item,index)=>(
        <div key={index} className=""><StarIcon size={16} color='yellow'/></div>))}
    </div>
    <div className="">
      <p><span className='line-through opacity-50 mr-2'>{'$'+(product.price+10.22).toFixed(2)}</span> {'$'+product.price}</p>
    </div>
    <div className="flex items-center justify-center gap-5">
      <Button className='bg-red-500 hover:bg-red-400'>Add to Cart</Button>
      <Button><Heart/></Button>
    </div>
    </div>
    </div>
  )
}

export default ProductCard
