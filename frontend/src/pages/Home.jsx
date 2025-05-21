import React from 'react'
import Sidebar from '../components/Sidebar'
import Conversations from '../components/Conversations'
import Aibot from '../components/Aibot'

export function Home() {
  return (
    <div className='border bg-purple-300 border-blue-500 w-full h-[100vh]  px-40 py-10 overflow-hidden'>
    
    
       <div className=" rounded-lg bg-neutral-100 border-green-500 
      max-w-7xl mx-auto flex flex-col  items-center h-full justify-start">

{/* <div className="border w-full min-h-14 grid grid-cols-10 "> */}
{/*  
  <div className="border col-span-7 flex items-center  border-blue-500 h-full">
{/*
  </div>  */}

  {/* <div className="border-l border-blue-500 col-span-3 h-full">
right div
  </div> */}

{/* </div> */}




  <div className=" border-red-500 
      w-full h-full grid grid-cols-10 justify-center">


<div className=' col-span-3'><Sidebar/></div>
<div className=' col-span-4'><Conversations/></div>
<div className='border-l-3 border-purple-300 col-span-3'><Aibot/></div>


      </div>

      </div>
        
    </div>
  )
}


