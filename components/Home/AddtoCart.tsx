'use client'

import React from 'react'
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { addItem } from '@/store/cartSlice'
import { toast } from 'react-toastify';
import { cartItem } from '@/store/cartSlice'
import { Product } from '@/type/ProductType'
type props={
    item:Product,
}
const AddtoCart = ({item}:props) => {
    const dispatch=useDispatch();
    const items=useSelector((state:RootState)=>state.cart.items);
  return (
    <div><Button className='bg-red-500 hover:bg-red-400'onClick={()=>{dispatch(addItem(item)),toast.success("Product added successfully!")}} >Add to Cart</Button></div>
  )
}

export default AddtoCart