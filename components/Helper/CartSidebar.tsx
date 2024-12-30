"use client";

import { addItem, cartItem, removeItem } from '@/store/cartSlice';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SheetClose } from '../ui/sheet';

type Props = {
  items: cartItem[];
};

export const CartSidebar = ({ items }: Props) => {
 
  const dispatch = useDispatch();

  return (
    <div className="overflow-auto">
      <div>
        <h1 className="text-2xl font-serif font-bold text-center mb-10">Your Cart</h1>
        {items.length === 0 ? (
          <div className="mx-auto">
            <Image
              alt="empty cart"
              src="/images/emptyCart.png"
              width={400}
              height={200}
              className="mx-auto my-20"
            />
            <h1 className="text-xl text-center">Your Cart is Empty</h1>
              <Link href={'/'} className="mx-auto mt-5">
            <SheetClose>
                <Button  >
               Continue Shopping
              </Button>
              </SheetClose>
              </Link>
            
          </div>
        ) : (
          <div>
            {items.map((item) => (
              <div key={item.id} className="my-5 flex flex-col items-center">
                <Image alt="product image" width={100} height={100} src={item.image} className="object-cover" />
                <div className="flex flex-col items-start">
                  <div>{item.title}</div>
                  <div>{"$" + item.price * item.quantity}</div>
                  <div>Quantity: {item.quantity}</div>
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
              Total: ${items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </div>
          </div>
        )}
      </div>
      <div className="w-full text-center">
        {items.length > 0 && (
          
            <Link href={'/cart'} className="mx-auto w-full">
              <SheetClose>
          <Button>
            View All Carts
           </Button>
           </SheetClose>
          </Link>
         
        )}
      </div>
    </div>
  );
};
