'use client'
import { getAllProducts } from '@/Request/request';
import { Product } from '@/type/ProductType'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { Loader } from 'lucide-react';
const AllProducts = () => {

    const[products,setProducts]=useState<Product[]|null>(null);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
    const getData=async()=>{
        setLoading(true);
        try { 
            const data:Product[]=await getAllProducts();
            if(data){
               setProducts(data);
               setLoading(false);
            }
        } catch (error) {
           setLoading(false);
           console.log(error); 
        }


    };
    getData();
    },[]);
    // console.log(products);
    
  return (
    <div className='mx-auto mt-10 '>
        <h1 className='text-xl font-bold text-center mb-10'>All Products List</h1>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto text-center">
        {loading? <Loader size={32} className='animate-spin col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 mx-auto '/>:(products?.map((item)=>{
                return <ProductCard key={item.id} product={item} />
            }))
        }
        </div>
    </div>
  )
}

export default AllProducts
