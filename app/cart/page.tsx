'use client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addItem, cartItem, removeItem } from '@/store/cartSlice';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RootState } from '@/store/store';
import { FaPaypal } from 'react-icons/fa';
import { useUser } from '@clerk/nextjs';

const CartPage = () => {
  const[subTotal,setSubTotal]=useState(0);
 const dispatch = useDispatch();
 const items=useSelector((state:RootState)=>state.cart.items);
const temp:number=Number(items?.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2))
// setSubTotal(temp);
const {user}=useUser();
  return (
    <div  className='min-h-screen grid gap-x-16 grid-cols-1 md:grid-cols-7 mx-24 mt-32 '>
<div className="col-span-5">
<h1 className='bg-blue-500 w-full text-3xl text-center text-white '>Your Cart ({items.length}) Items</h1>
<div>
            {items?.map((item) => (
              <div key={item.id} className="my-5 flex justify-start ml-32 gap-10 items-center">
                <Image alt="product image" width={200} height={200} src={item.image} className="object-cover" />
                <div className="flex flex-col items-start">
                  <div className='text-2xl font-serif font-bold'>{item.title}</div>
                  <div className='text-xl'>{"$" + item.price * item.quantity}</div>
                  <div className='text-xl'>Quantity: {item.quantity}</div>
                  <div className="flex">
                    <Button
                      variant={'destructive'}
                      className="mr-5"
                      onClick={() => {
                        dispatch(addItem(item));
                      }}
                      aria-label={`Increase quantity of ${item.title}`}
                    >
                      +
                    </Button>
                    <Button
                      onClick={() => {
                        dispatch(removeItem(item));
                      }}
                      aria-label={`Decrease quantity of ${item.title}`}
                    >
                      -
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center font-bold text-xl mt-5">
              Total:{temp}
            </div>
          </div>
</div>
<div className="bg-purple-700 h-[70vh] col-span-2 rounded-lg fixed right-24 w-[22vw] overflow-auto ">
<h1 className='text-white text-2xl text-center font-mono'>SUMMERY</h1>
<hr className='min-w-full my-5'/>
<div className="grid grid-cols-2 mx-auto text-center">
  <div className="text-white flex flex-col items-start ml-10">
    <p className="my-5 flex justify-around items-center gap-20">SUBTOTAL <span>${temp}</span></p>
    <p className="my-5 flex justify-around gap-20">VAT <span>${(temp*0.15).toFixed(2)}</span></p>
    <p className="my-5 flex justify-around gap-20">SHIPPING <span>FREE</span></p>
    <p className="my-5 flex justify-around gap-20">TOTAL <span>${1.15*temp}</span></p>
   
  </div>
  

</div>
{!user && <Link href='/sign-in' className='ml-[100px]'><Button className=' bg-yellow-500 mx-auto'>Login</Button></Link>
    }
    {user && <Link href='/paypal' className='ml-[100px]'><Button className=''>PayPal</Button></Link>
    }
</div>


    </div>
  )
}

export default CartPage