// 'use client'

// import React, { useState } from 'react'
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from "@/components/ui/sheet"

// import {
//     Dialog,
//     DialogContent,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { CarIcon, HeartIcon, Search, User } from 'lucide-react'
// import { FaShoppingCart } from "react-icons/fa";
// import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from '@/store/store'
// const SearchIcon = () => {
//    const items=useSelector((state:RootState)=>state.cart.items);
//    const dispatch=useDispatch();
//    const totalSum=items.reduce((total,item)=>total=total+item.quantity,0)
//     const[quant,setQuant]=useState(0);
//   return (
//     <Sheet>
//     <div className='flex'>
//   <div className="flex gap-5">
//     <Dialog>
//     <DialogTrigger><Search/></DialogTrigger>
//     <DialogContent className=''>
//     <DialogTitle >Type to search what you want</DialogTitle>
//     <Input  placeholder="Type to search" />
//     </DialogContent>
//   </Dialog>
//     <HeartIcon className='cursor-pointer'/>
//     <div className="flex relative">
//     <SheetTrigger><FaShoppingCart size={26} className='cursor-pointer'/></SheetTrigger>
//     <SheetContent>
   
//       Hii
//   </SheetContent>
//     <div className="absolute bg-red-500 cursor-pointer rounded-lg left-4 bottom-3 flex items-center h-6  p-1 text-center">{totalSum}</div>
    
//     </div>
//     <User className='cursor-pointer'/>
//     </div>
//   </div>
//   </Sheet>
//   )

// }

// export default SearchIcon