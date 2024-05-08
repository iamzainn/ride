'use client';
import React, { useState } from 'react'
import { DirectionsRenderer, GoogleMap, MarkerF, OverlayViewF} from '@react-google-maps/api';
import { useRideContext } from '@/contex/rideContext';


const containerStyle = {
  width: '100%',
  height: '80vh'
};


function Map() {
   const {source,destnation} = useRideContext(); 
   const [center,setCenter] = useState({lat:-3.755,lng:-38.523});
   const [routePoints,setRoutePoints] = useState <google.maps.DirectionsResult | undefined>(undefined);
 
  const [map, setMap] = React.useState({} as any);

  const onLoad = React.useCallback(function callback(map:any) {
  
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map:any) {
    setMap({})
  }, [])



  React.useEffect(()=>{
    if(source.name && map){
      setCenter({lat:source.lat,lng:source.lng})
    }
    if(source.name && destnation.name){
      routeDirection();
    }
  },[source])

  React.useEffect(()=>{
    if(destnation.name && map){
      setCenter({lat:destnation.lat,lng:destnation.lng})
    }

    if(source.name && destnation.name){
      routeDirection();
    }
  },[destnation])


  const routeDirection = ()=>{
   const service =  new google.maps.DirectionsService();
   
   
   service.route({
    origin:{lng:source.lng,lat:source.lat},
    destination:{lng:destnation.lng,lat:destnation.lat},
    travelMode:google.maps.TravelMode.DRIVING
   },(result,status)=>{
    if(status=== google.maps.DirectionsStatus.OK){
     
      setRoutePoints(result!);
    }
    else{
      console.error("error in route Direction",status);
    }
   })
  }

  


  return  (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={
            {mapId:"b63686be0633f5ed"}
        }
      >
      {source ?<MarkerF position={{lat:source.lat,lng:source.lng}}>
      </MarkerF> :null}
      {destnation ?<MarkerF position={{lat:destnation.lat,lng:destnation.lng}}></MarkerF>:null}

      <DirectionsRenderer 
      directions={routePoints}
      options={{
        polylineOptions:{
          strokeColor:"red"

        },
        suppressMarkers:true
      }
    }
      ></DirectionsRenderer>
      </GoogleMap>
  )
}

export default React.memo(Map)