'use client'
import { useRideContext } from '@/contex/rideContext'
import React, { useState } from 'react';
import { Button } from './ui/button';
// import { Router , useRouter } from 'next/router';
import { useRouter } from 'next/navigation'


type RideProp = {
    id:number,
    name:string,
    seat:number,
    description:string,
    amount: number
} 

const SingleRide = ({name,seat,description,amount}:RideProp) => {
  const router = useRouter();
  const [selected,setSlected] = useState({name:"",amount:0})
  console.log(selected);

  const {distance} = useRideContext();
    return (
        <div onClick={()=>{
          setSlected({
            name,
            amount:parseFloat((amount * distance).toFixed(3))
          }) 
        }}
          className="flex h-full w-full flex-col rounded-md border bg-white p-4 hover:border-blue-500 hover:shadow-md"
        >
          <h5 className="text-lg font-medium">{name}</h5>
          <p className="text-sm">{description}</p>
          <div className="flex items-center justify-between">
            <p className="text-sm">Seats: {seat}</p>
            <p className="text-sm">Amount: {(amount * distance).toFixed(3)}</p>
          </div>
          {selected.name ==name && <Button onClick={()=>{router.push(`/payment?amount=${selected.amount}`)}} size={"sm"} variant={"default"}>Pay</Button>}
        </div>
      
      );

}

export default SingleRide
