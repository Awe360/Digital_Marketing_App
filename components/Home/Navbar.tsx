'use client'
import React,{useState} from 'react'
import { CartSidebar } from '../Helper/CartSidebar'
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
// import SearchIcon from '../Helper/NavbarIcons'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { CarIcon, HeartIcon, Search, User } from 'lucide-react'
import { FaShoppingCart } from "react-icons/fa";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { addItem, removeItem } from '@/store/cartSlice'


const Navbar = () => {
  const items=useSelector((state:RootState)=>state.cart.items);
  const dispatch=useDispatch();
  const totalSum=items.reduce((total,item)=>total=total+item.quantity,0)
  const[quant,setQuant]=useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
   
    <div className='h-20 shadow-lg flex items-center justify-around fixed w-full top-0  bg-gray-300'>
  <Image src='/images/logo.png' alt='Logo image' className='cursor-pointer' width={50} height={50} />
  <div className="">

    <div className="">
         <div className='flex'>
          <div className="flex gap-5">
            <Dialog>
            <DialogTrigger><Search/></DialogTrigger>
            <DialogContent className=''>
            <DialogTitle >Type to search what you want</DialogTitle>
            <Input  placeholder="Type to search" />
            </DialogContent>
          </Dialog>
            <HeartIcon className='cursor-pointer'/>
            <div className="flex relative ">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger><FaShoppingCart size={26} className='cursor-pointer'/></SheetTrigger>
             <SheetContent className='overflow-auto'>
                  <CartSidebar items={items}/>
                  
              </SheetContent>
              </Sheet>
            <div className="absolute bg-red-500 cursor-pointer rounded-lg left-4 bottom-3 flex items-center h-6  p-1 text-center">{totalSum}</div>
            
            </div>
            <SignedOut>
            <SignInButton >
            <User className='cursor-pointer'/>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
            
            </div>
          </div>
    </div>
  </div>
    </div>
    
  )
}

export default Navbar