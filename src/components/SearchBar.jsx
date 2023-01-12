import React from 'react'
import { BsSearch} from 'react-icons/bs'

const SearchBar = () => {
  return (
    <>
    <div className='w-full  py-4'>
        
<form>   
  
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           <BsSearch className='text-[12px]'/>
        </div>
        <input type="search" id="default-search" className="block w-full p-3 pl-10 text-[12px] text-gray-900 rounded-sm
          focus:ring-gray-500 focus:border-gray-500 bg-white " placeholder="Search templates..." required></input >
        
    </div>
</form>

    </div>
   
    </>
  )
}

export default SearchBar