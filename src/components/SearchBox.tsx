
import Renders from './RendersDrives';
import GoogleInput from './SearchInput';
import { Rides } from '@/lib/Rides';

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import SingleRide from './Ride';
const Search = () => {
 
  return (
    <div className='w-full p-4 border-gray-300 border-2 rounded-md'>
      <p className='font-extrabold text-2xl'>Book A Ride</p>
      <div className="searchInputs flex flex-col gap-6 mt-10">
      <GoogleInput key={"pickup"} name="pickup"/>
      <GoogleInput key={"drop"} name="drop"/>
      </div>
     <Renders>
     <ScrollArea className="h-72 w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium  leading-none">RECOMENDED RIDES</h4>
        {Rides.map((R) => (
          <>
            <SingleRide  key={R.id} {...R}></SingleRide>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
     </Renders>
    </div>
  )
}

export default Search
