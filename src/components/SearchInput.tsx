'use client';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useRideContext } from '@/contex/rideContext';
import { SourceProp, DestinationProp } from '@/contex/rideContext';

const GoogleInput = ({name}:{name:"pickup"|"drop"})=>{
    
  
  const {setSource,setDestination,setDistance} = useRideContext();

    const getLongitude_getLatitude = async (place:any)=>{
         const placeID=(place.value.place_id);
         const service = new google.maps.places.PlacesService(document.createElement('div'));
         service.getDetails({placeId:placeID},(place,status)=>{
            if(status=="OK" && place?.geometry && place.geometry.location){
             if(name=="pickup"){
               setSource({lat:place.geometry.location.lat(),lng:place.geometry.location.lng(),name:place.formatted_address!})
              return
     
              }
            if(name=="drop")
            setDestination({lat:place.geometry.location.lat(),lng:place.geometry.location.lng(),name:place.formatted_address!})
          return  
          }
         })
    }
    return (
      
        <GooglePlacesAutocomplete key={name} 
      
        selectProps={{  
        onChange: (newValue) => {
          if(name =="pickup"){
            setSource({} as SourceProp);

          }
          if(name =="drop"){
            setDestination({}as DestinationProp);
          }
           if(!newValue) { 
            setDistance(0)
            return;
          }
            getLongitude_getLatitude(newValue);
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