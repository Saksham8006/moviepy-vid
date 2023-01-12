import React from 'react'
import SearchBar from './SearchBar'


const Text = () => {
  return (
    <div>
        <SearchBar />
        
        <div className='  '>
        <div className='bg-sky-500 text-white p-4 '>
                <span className='text-sm font-bold'>Add a text box</span>
            </div>
       
        
            </div>
            <p className='text-white font-bold '>Click add To text to page</p>
            <div className='gap-y-2 flex flex-col mt-4 w-[380px]'>
            <div className='bg-gray-500 text-white p-4'>
                <span className='text-3xl font-bold'>Add a heading</span>
            </div>
          
            <div className='bg-gray-500 text-white p-4'>
                <span className='text-sm font-bold'>Add a little bit of body text</span>
            </div>
            </div>
    </div>
  )
}

export default Text