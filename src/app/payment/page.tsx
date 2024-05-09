
"use client"
import CheckoutForm from '@/components/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation'
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";

import React from 'react';



function Payment() {
  const {user,isLoading } = useKindeBrowserClient();
  const searchParam=useSearchParams();
  const amount=searchParam.get('amount') as string;
 
  const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  const options={
    mode:'payment',
    amount:Math.round(parseInt(amount)*100),
    currency:'usd'
  }
  

  if(!user && !isLoading){
    redirect("/api/auth/login")
  }


  return (
    <Elements stripe={stripePromise} options={options as StripeElementsOptions}>
        <CheckoutForm amount={parseInt(amount)} />
    </Elements>
  )
}

export default Payment
