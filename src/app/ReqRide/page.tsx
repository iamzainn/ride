
import Search from "@/components/SearchBox";
import Map from "@/components/Map";
const RidePage = () => {
  return (
    <div className="max-width grid grid-cols-1 md:grid-cols-3 p-5">
      <Search></Search>
      <div className="col-span-2 p-5">
       <Map></Map>
      </div>

    </div>
  )
}

export default RidePage
