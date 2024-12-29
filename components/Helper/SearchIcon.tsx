'use client'

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { CarIcon, HeartIcon, Search, User } from 'lucide-react'
import { FaShoppingCart } from "react-icons/fa";
const SearchIcon = () => {
    const[quant,setQuant]=useState(0);
  return (
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
    <div className="flex relative">
    <FaShoppingCart size={26} className='cursor-pointer'/>
    <div className="absolute bg-red-500 cursor-pointer rounded-lg left-4 bottom-3 flex items-center h-6  p-1 text-center">{quant}</div>
    
    </div>
    <User className='cursor-pointer'/>
    </div>
  </div>
  )
}

export default SearchIcon