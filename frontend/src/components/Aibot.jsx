import React from 'react'

import { FiSend, FiSidebar } from "react-icons/fi";

import aifin from '../../public/aifin.jpg'
import { MdPermMedia } from 'react-icons/md';

function Aibot() {
  let isSender=true
  let isChatStarted=false
  return (
    <div className='flex flex-col  h-full  items-center  border-red-500'>
      <div className="min-h-10 border-b-3 border-purple-300  w-full px-2 py-0  text-sm flex items-center justify-between">
  
  
  <div className="relative border-blue-500 h-full flex items-center   gap-3 font-sans font-semibold">

<div className="flex   items-center text-purple-900">
  <img src={aifin} alt=""  className='w-5 h-5 object-fill  mr-1'/>
   AI<span className='text-md text-transparent ml-1
  bg-clip-text bg-gradient-to-r from-purple-900 
  to-purple-500'>Copilot</span></div>
<div className=" text-gray-700 ">Details</div>



<div className="absolute w-21 rounded-full h-[3px] bg-gradient-to-r from-purple-900 to-purple-500 via-purple-700 -bottom-[3px] left-1"></div>
  </div>






  <div className="flex items-center  gap-4 justify-center">
   <FiSidebar size={16}/>
  </div>
</div>

{
  isChatStarted ??  <div className=" w-full h-[70vh] overflow-auto"
      >
          
            <div
            className={` flex items-start gap-1 mt-2 px-2 w-full  ${
              isSender ? 'justify-end' : 'justify-start'
            }`}
          >
            {/* Avatar */}
            {!isSender && (
              <img
                className="w-8 h-8 rounded-full "
                src="https://ui-avatars.com/api/?name=John+Doe"
                alt={`john doe`}
              />
            )}
      
            {/* Message content */}
            <div
              className={` border-red-500 flex flex-col gap-1 w-full max-w-[320px] px-1 ${
                isSender ? 'items-end' : 'items-start'
              }`}
            >
              {/* Name and Time */}
              <div
                className={` border-red-500 flex items-center gap-2  text-black ${
                  isSender ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <span className="text-sm font-semibold">
                  {isSender ? 'You' : 'John Doe'}
                </span>
                <span className="text-xs font-normal ">{new Date().toLocaleTimeString()}</span>
              </div>
      
              {/* Message Bubble */}
              <div
                className={`flex flex-col leading-relaxed p-4  border-red-500    ${
                 isSender
                    ? 'border-blue-500 bg-blue-500 text-gray-900 rounded-s-xl rounded-ee-xl'
                    : 'border-gray-200 bg-gray-700 rounded-e-xl rounded-es-xl '
                }`}
              >
                <p className="text-sm font-normal text-gray-900 dark:text-white">
                  That's awesome. I think our users will really appreciate the improvements.
                </p>
              </div>
      
              {/* Optional: Delivered status */}
              {/* <span className="text-xs text-gray-500 dark:text-gray-400">Delivered</span> */}
            </div>
      
            {/* Avatar for sender */}
            {isSender && (
              <img
                className="w-8 h-8 rounded-full "
                src="https://ui-avatars.com/api/?name=John+Doe"
                alt="Your avatar"
              />
            )}
          </div>
          
       
      
          </div>
      
}

<div className="flex flex-col items-center  mt-auto">
  <img src={aifin} alt=""  className='w-7 h-7 object-fill  mx-auto '/>
  <h4 className='font-bold text-md '>Hi, I'm Fin AI Copilot</h4>
    <p className='text-gray-700 font-serif text-sm'>Ask me anything about this conversation.</p>
  
</div>

     
      
      {/* input box part footer */}
      <div className="flex items-center justify-between
       border-blue-500 w-full h-9 gap-2 mt-auto mb-2 px-2">
      
        {/* input box */}
        <div className="h-full w-full">
          <input type="text" placeholder='Your Message ' className="outline-none border border-gray-400 w-full h-full  px-2 rounded" />
        </div>
      
        {/* send button */}
      <div className="  flex justify-center text-sm  items-center gap-1 ">
        <button  className='cursor-pointer p-2 rounded bg-gray-800 text-white'><MdPermMedia/></button>
          <button className='cursor-pointer p-2 rounded bg-blue-500 text-white'><FiSend/></button>
          
          
        </div>
      </div>
  </div>
  )
}

export default Aibot
