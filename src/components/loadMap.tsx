'use client';

import { LoadScript } from '@react-google-maps/api'


const LoadMap = ({children}:{children:React.ReactNode}) => {
    
  return (
   (!window.google?
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}
    libraries={['places']}
    >
    {children}
      </LoadScript>
    :
    <>{children}</>) 
  )
}

export default LoadMap
