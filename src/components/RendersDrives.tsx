'use client';

import { useRideContext } from '@/contex/rideContext';
import { Button } from './ui/button';
import { useEffect } from 'react';



export default function Renders({children}:{children:React.ReactNode}){
    const {source,destnation,distance,setDistance} = useRideContext();
    console.log({

     "source":source,
     "destnation":destnation,
     "distance":distance
    })


    useEffect(()=>{
      //  console.log("set distance to zero"); 
     if(!source.name || !destnation.name){
       
     }
    },[])


  const distCalculate = ()=>{
    const distance = google.maps.geometry.spherical.computeDistanceBetween({
      lat:source.lat,
      lng:source.lng
    },{
      lat:destnation.lat,
      lng:destnation.lng
    })
    setDistance(distance * 0.000621371);
  }
    return (
        <div className='mt-6'>
        <Button onClick={distCalculate} disabled={!source.name || !destnation.name}
        
        className={`disabled:cursor-not-allowed opacity-10 enabled:opacity-100 w-full `} size={"sm"}>Request</Button>
        {distance && 
        <div className='cars'>
            <p className='font-bold mb-2 mt-2' >Distance :  {distance.toFixed(2)} miles</p>
            {children}
            </div>}
        </div>
      
      
    )
}