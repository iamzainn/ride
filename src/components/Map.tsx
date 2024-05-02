'use client';
import React, { useState } from 'react'
import { GoogleMap, MarkerF, OverlayViewF} from '@react-google-maps/api';
import { getRideContext } from '@/contex/rideContext';

const containerStyle = {
  width: '100%',
  height: '80vh'
};


function Map() {
   const {source,destnation} = getRideContext(); 
   const [center,setCenter] = useState({lat:-3.755,lng:-38.523});


 
  const [map, setMap] = React.useState({} as any);

  const onLoad = React.useCallback(function callback(map:any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map:any) {
    setMap({})
  }, [])



  React.useEffect(()=>{
    if(source && map){
      // map.panTo({
      //   lat:source.lat,
      //   lng:source.lng
      // })
      setCenter({lat:source.lat,lng:source.lng})
    }
  },[source])

  React.useEffect(()=>{
    if(destnation && map){
      // map.panTo({
      //   lat:destnation.lat,
      //   lng:destnation.lng
      // })
      setCenter({lat:destnation.lat,lng:destnation.lng})
    }
  },[destnation])


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
        {/* <OverlayViewF
        position={{lat:source.lat,lng:source.lng}}
        mapPaneName={OverlayViewF.OVERLAY_MOUSE_TARGET}
        >
         <p className='text-1xl border-3 botder-grey p-2'>{source.name}</p>    
        </OverlayViewF> */}
      </MarkerF> :null}
      {destnation ?<MarkerF position={{lat:destnation.lat,lng:destnation.lng}}></MarkerF>:null}
      </GoogleMap>
  )
}

export default React.memo(Map)