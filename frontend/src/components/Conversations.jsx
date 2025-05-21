import React from 'react'
import { FiSend } from "react-icons/fi";
import { MdPermMedia } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { LuMoonStar } from "react-icons/lu";
import { FaEnvelopeOpenText } from "react-icons/fa6";
function Conversations() {
  
  let isSender=true
  return (
    <div className='flex flex-col  h-full  items-center  border-red-500'>
       
       
       {/* header part */}
       <div className="min-h-10 border-b-3 border-purple-300  w-full px-2 py-1 font-semibold text-xl flex items-center justify-between">
  <div className="font-semibold text-xl">John Doe</div>
  <div className="flex items-center  gap-4 justify-center">
    <button className=' bg-gray-200 rounded-lg p-1 '><BsThreeDots/> </button>
     <button className=' bg-gray-200 rounded-lg p-1 '><LuMoonStar fill="black"/></button>
     <button className='rounded-lg px-3 font-normal text-white bg-black py-1 flex items-center text-sm gap-2'><FaEnvelopeOpenText /> Close</button>
  </div>
</div>

<div className=" w-full h-[70vh]  overflow-auto"
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


{/* input box part footer */}
<div className="flex  items-center justify-between 
 border-blue-500 w-full h-9 gap-2 mt-auto  mb-2 px-2">

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

export default Conversations







    