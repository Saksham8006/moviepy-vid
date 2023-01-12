import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { BiText } from 'react-icons/bi'
import { MdUpload } from 'react-icons/md'
import { BsFillBagPlusFill } from 'react-icons/bs'
import { BiCoinStack, BiCustomize } from 'react-icons/bi'
import SearchBar from '../components/SearchBar'
import Text from './Text'
import Projects from './Projects'
import Upload from './Upload'
import Template from './Template'
import Elements from './Elements'


const Sidebar = () => {

    const [val, setVal] = useState(0)

    return (
        <div className='flex'>
        <aside className=" overflow-y-auto w-[6rem] flex justify-center h-screen" aria-label="Sidebar">
            <div className="h-screen overflow-y-auto pt-[50px]  px-4 bg-gray-50  dark:bg-gray-800 ">

                {/* <span className="text-3xl font-semibold flex text-white justify-start pl-3">VideoEdior</span> */}

                <ul className=" mt-[50px] space-y-4 ">
                <button onClick={()=>setVal(0)}> <li>

                        <a className="flex flex-col items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <BiCoinStack className='text-xl text-sky-300' />

                            <span className="ml-3 text-sm">Templates</span>
                        </a>
                        </li></button>

                    <button onClick={()=>setVal(1)}> <li>
                        <a className="flex flex-col items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <BiCustomize className='text-xl text-sky-300' />
                            <span className="flex-1 ml-3 whitespace-nowrap text-sm">Elements</span>
                        </a>
                        </li></button>

                    <button onClick={()=>setVal(2)}> <li>
                        <a href="#" className="flex flex-col items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <MdUpload className='text-xl text-sky-300' />
                            <span className="flex-1 ml-3 whitespace-nowrap text-sm">Upload</span>
                        </a>
                        </li></button>

                    <button onClick={()=>setVal(3)}> <li>
                        <div className="flex flex-col items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <BiText className='text-xl text-sky-300' />
                            <span className="flex-1 ml-3 whitespace-nowrap text-sm">Text</span>

                        </div>
                    </li></button>

                    <button onClick={()=>setVal(4)}> <li>
                        <a className="flex flex-col items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <BsFillBagPlusFill className='text-[15px] text-sky-300' />
                            <span className="flex-1 ml-3 whitespace-nowrap text-sm">Projects</span>
                        </a>
                    </li>
                    </button>


                </ul>
            </div>
        </aside>


{/* showind Box */}

<div className=" overflow-y-auto w-[400px] flex justify-center h-screen dark:bg-gray-400 " aria-label="Showing Box">

{ val ==0 && <Template /> }
{ val ==1 && <Elements /> }
{ val ==2 && <Upload /> }
{ val ==3 && <Text/> }
{ val ==4 && <Projects /> }

</div>

        </div>
    )
}

export default Sidebar