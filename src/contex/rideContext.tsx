'use client';
type RideContextProp = {
    source : SourceProp,
    setSource:React.Dispatch<React.SetStateAction<SourceProp>>,
    destnation : DestinationProp,
    setDestination:React.Dispatch<React.SetStateAction<DestinationProp>>
}

import React, { createContext, useState } from "react";
import { useContext } from "react";

const RideContext = createContext({} as RideContextProp);

type SourceProp = {
    lat:number,
    lng:number,
    name:string
}
type DestinationProp = {
    lat:number,
    lng:number,
    name:string
}




export default function RideContextProvider({children}:{children:React.ReactNode}){
       const [source,setSource] = useState({} as SourceProp);
       const [destnation,setDestination] = useState({} as DestinationProp);

    return (
        <RideContext.Provider value={{source,setSource,destnation,setDestination}}>
            {children}
        </RideContext.Provider>
    )
}


export const useRideContext = ()=>{
    return useContext(RideContext);
}