import { getProductByCategory, getSingleProduct } from '@/Request/request';
import { Product } from '@/type/ProductType';
import React from 'react'

const ProductDetail = async({params}:{params:{id:string}}) => {
    const id= await params.id;
    console.log(id);
    const singleProduct=await getSingleProduct(id);
    const relatedProducts:Product[]=await getProductByCategory(singleProduct.category);
    console.log(relatedProducts);
    
  return (
    <div>ProductDetail {id}</div>
  )
}

export default ProductDetail