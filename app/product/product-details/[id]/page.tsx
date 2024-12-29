import AddtoCart from '@/components/Home/AddtoCart';
import RelatedProducts from '@/components/Home/RelatedProducts';
import { getProductByCategory, getSingleProduct } from '@/Request/request';
import { Product } from '@/type/ProductType';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const ProductDetail = async({params}:{params:{id:string}}) => {
    const id= await params.id;
    console.log(id);
    const singleProduct:Product=await getSingleProduct(id);
    const relatedProducts:Product[]=await getProductByCategory(singleProduct.category);
    const num=Math.round(singleProduct?.rating?.rate);
    const ratingArray=new Array(num).fill(0);
    
  return (
    <div className='mt-20 min-h-screen'>
    <div className="grid grid-cols-1 md:grid-cols-7 md:items-center">
        <div className="col-span-3 flex justify-center">
        <Image alt="product image" src={singleProduct.image} width={200} height={200}/>
        </div>
        <div className=" col-span-3">
            <h1 className='text-2xl font-bold'>{singleProduct.title}</h1>
            <p className='flex'>{ratingArray.map((item,index)=>(<StarIcon size={16} color='yellow' key={index}/>))} <span>{" " +" ("+singleProduct.rating.count +" Reviews)"}</span></p>
            <p className='text-2xl font-bold'>{"$"+singleProduct.price}</p>
            <p>{singleProduct.description}</p>
            <p className='mb-20 '><span className='font-bold'>Category:</span>{singleProduct.category}</p>
            <AddtoCart item={singleProduct}/>
           
        </div>
    </div>
    <div className="">
        <RelatedProducts category={singleProduct.category}/>
    </div>

    </div>
  )
}

export default ProductDetail