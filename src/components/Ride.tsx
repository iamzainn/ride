'use client'
import { useRideContext } from '@/contex/rideContext'
import React from 'react'

type RideProp = {
    id:number,
    name:string,
    seat:number,
    description:string,
    amount: number
} 

const SingleRide = ({name,seat,description,amount}:RideProp) => {
  const {distance} = useRideContext()
    
    return (
        <div
          className="flex h-full w-full flex-col rounded-md border bg-white p-4 hover:border-blue-500 hover:shadow-md"
        >
          <h5 className="text-lg font-medium">{name}</h5>
          <p className="text-sm">{description}</p>
          <div className="flex items-center justify-between">
            <p className="text-sm">Seats: {seat}</p>
            <p className="text-sm">Amount: {(amount * distance).toFixed(3)}</p>
          </div>
        </div>
      );
}

export default SingleRide
