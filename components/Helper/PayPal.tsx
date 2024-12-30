//@ts-nocheck

import React from 'react'
import { PayPalScriptProvider,FUNDING, PayPalButtons } from "@paypal/react-paypal-js";
import { Client } from '@clerk/nextjs/server';
interface PayPalButtonProps{
    amount:string,
    onSuccess:(details:any)=>void,
}
const PayPal = ({amount,onSuccess}:PayPalButtonProps) => {
  return (
    <PayPalScriptProvider options={{clientId:process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        currency:"USD"
    }}>
        <PayPalButtons
  fundingSource={FUNDING.PAYPAL}
  createOrder={(data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    });
  }}
  onApprove={(data, actions) => {
    return actions.order.capture().then((details) => {
      onSuccess(details); 
    });
  }}
/>


    </PayPalScriptProvider>
  )
}

export default PayPal