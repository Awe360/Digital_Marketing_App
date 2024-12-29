
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface cartItem{
    id:number,
    title:string,
    description:string,
    price:number,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number,
    },
    quantity:number,
}

interface cartState{
    items:cartItem[];
}
const initialState:cartState={
    items:[],
}
const cartSlice=createSlice({
  name:"cart",
  initialState,
  reducers:{
    addItem:(state,action:PayloadAction<Omit<cartItem,"quantity">>)=>{
  const previousItem=state.items.find((item)=>item.id===action.payload.id);
  if(previousItem){
    previousItem.quantity+=1;
  }
  else{
    state.items.push({...action.payload,quantity:1})
  }
    },
    removeItem:(state,action:PayloadAction<{id:number}>)=>{
   const existingItem=state.items.find(item=>item.id===action.payload.id);
   if(existingItem){
    if(existingItem.quantity>1){
        existingItem.quantity-=1;
    }
    else{
        state.items =state.items.filter((item)=>item.id !==action.payload.id);
    }
    
   }
    },
    clearCart:(state)=>{
        state.items=[];
    }
  }  
})

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;