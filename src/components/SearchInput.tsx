'use client'
import { SingleValue } from 'react-select';
import { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { getRideContext } from '@/contex/rideContext';

const GoogleInput = ({name}:{name:"pickup"|"drop"})=>{
     const {source,destnation,setSource,setDestination} = getRideContext()
    const [value, setValue] = useState<SingleValue<any>>(null);
    useEffect(() => {
        if(value){
             getLongitude_getLatitude(value)
        }    
    },[value])

    useEffect(()=>{
      if(source){
        console.log("Source : ",source);
      }
       else if(destnation){
        console.log("Source : ",destnation);
      }
    },[source,destnation])

    const getLongitude_getLatitude = async (place:any)=>{
         const placeID=(place.value.place_id);
         const service = new google.maps.places.PlacesService(document.createElement('div'));
         service.getDetails({placeId:placeID},(place,status)=>{
            if(status=="OK" && place?.geometry && place.geometry.location){
             if(name=="pickup"){
               setSource({lat:place.geometry.location.lat(),lng:place.geometry.location.lng(),name:place.formatted_address!})
             }
             else if(name=="drop")
            setDestination({lat:place.geometry.location.lat(),lng:place.geometry.location.lng(),name:place.formatted_address!})
            }
         })
    }
    return (
      
        <GooglePlacesAutocomplete key={name} apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY} 
      
        selectProps={{
          value,
          onChange: (newValue, actionMeta) => {
              setValue(newValue);
            },
          isClearable:true,
          placeholder:name=="pickup"?"Pickup Location":"Drop Location",
          components:{
              DropdownIndicator:null
          }
        }}
        />

    )
}
export default GoogleInput;