import React from 'react'
import Sidebar from '../components/Sidebar'
import Conversations from '../components/Conversations'
import Aibot from '../components/Aibot'
import { useSelector } from 'react-redux';
export function Home() {
  
  
  return (
    <div className=' bg-purple-300  border-blue-500 w-full  h-[100vh] flex  px-40  overflow-hidden'>
    
    
       <div className=" rounded-lg overflow-hidden bg-neutral-100 border-green-500 
      w-7xl mx-auto flex flex-col  items-center  h-[97vh] my-auto  justify-start">

  <div className=" border-red-500 
      w-full h-full grid grid-cols-10 justify-center">


<div className=' col-span-3 '><Sidebar/></div>
<div className=' col-span-4'><Conversations/></div>
<div className='border-l-3 border-purple-300 col-span-3'><Aibot/></div>


      </div>

      </div>
        
    </div>
  )
}


