'use client';
type RideContextProp = {
    source : SourceProp,
    setSource:React.Dispatch<React.SetStateAction<SourceProp>>,
    destnation : DestinationProp,
    setDestination:React.Dispatch<React.SetStateAction<DestinationProp>>,
    distance : number,
    setDistance:React.Dispatch<React.SetStateAction<number>>
}

import React, { createContext, useState } from "react";
import { useContext } from "react";

const RideContext = createContext({} as RideContextProp);

export type SourceProp = {
    lat:number,
    lng:number,
    name:string
}
export type DestinationProp = {
    lat:number,
    lng:number,
    name:string
}




export default function RideContextProvider({children}:{children:React.ReactNode}){
       const [source,setSource] = useState({} as SourceProp);
       const [destnation,setDestination] = useState({} as DestinationProp);
       const [distance,setDistance] = useState(0);
       

    return (
        <RideContext.Provider value={{source,setSource,destnation,setDestination,distance,setDistance}}>
            {children}
        </RideContext.Provider>
    )
}


export const useRideContext = ()=>{
    return useContext(RideContext);
}