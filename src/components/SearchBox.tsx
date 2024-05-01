

import GoogleInput from './SearchInput';

const Search = () => {
  
  return (
    <div className='w-full p-4 border-gray-300 border-2 rounded-md'>
      <p className='font-extrabold text-2xl'>Book A ride</p>
      <div className="searchInputs flex flex-col gap-6 mt-10">
      <GoogleInput name="pickup"/>
      <GoogleInput name="drop"/>
      </div>
    </div>
  )
}

export default Search
