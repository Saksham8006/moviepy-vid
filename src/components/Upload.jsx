import React, {useState} from 'react'
import SearchBar from './SearchBar'
import Images from './Images'
import Audios from './Audios'


const Upload = () => {

    const [val, setVal] = useState(0)


  return (
    <div>
        <div className='w-[380px]'> <SearchBar  /></div>
 
  <div className='bg-sky-500 text-white p-4 '>
                <span className='text-sm font-bold'>Upload Files</span>
            </div>

<div className='flex justify-around mt-4 text-white font-bold p-4 '>
   {val ===0 ? <button className='mb-2 inline-block bg-blue-900 px-8 py-4' onClick={()=>setVal(0)}>Images</button>: 
   <button className='mb-2 inline-block  px-8 py-4' onClick={()=>setVal(0)}>Images</button>}

    {val ===1 ? <button className='mb-2 inline-block bg-blue-900 px-8 py-4' onClick={()=>setVal(1)}>Audios</button>: 
   <button className='mb-2 inline-block  px-8 py-4' onClick={()=>setVal(1)}>Audios</button>}
</div>

{ val ===0 && <Images /> }
{ val ===1 && <Audios /> }

    </div>
  )
}

export default Upload