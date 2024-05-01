
import Search from "@/components/SearchBox"
const RidePage = () => {
  return (
    <div className="max-width grid grid-cols-1 md:grid-cols-3">
        <Search></Search>
      <div className="col-span-2">Google map</div>
    </div>
  )
}

export default RidePage
