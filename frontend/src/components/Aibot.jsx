


export const ShowDetailsComponent=()=>{
return(
<div className="w-full  h-full bg-white shadow-xl p-4 
space-y-6 text-sm text-gray-800">
  <div className=" flex flex-col space-y-2">
    <div className="flex justify-between items-center">
      <span className="font-semibold">Assignee</span>
      <span className="text-gray-600">Brian Byrne</span>
    </div>
    <div className="flex justify-between items-center">
      <span className="font-semibold">Team</span>
      <span className="text-gray-600 italic">Unassigned</span>
    </div>
  </div>

  <div className="space-y-2">
    <h2 className="text-gray-700 font-semibold uppercase text-xs">Links</h2>
    {[
      { name: "Tracker ticket", icon: "ticket" },
      { name: "Back-office tickets", icon: "archive" },
      { name: "Side conversations", icon: "arrow-right" }
    ].map((link, idx) => (
      <div key={idx} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md cursor-pointer">
        <span className="flex items-center space-x-2">
          <i className={`lucide-${link.icon} w-4 h-4`} />
          <span>{link.name}</span>
        </span>
        <button className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full">+</button>
     </div>
    ))}
  </div>

  <div className="divide-y divide-gray-200">
    {[ 
      "User Data",
      "Conversation Attributes",
      "Company Details",
      "Salesforce",
      "Stripe",
      "Jira for Tickets"
    ].map((section, index) => (
      <details key={index} className="py-2">
        <summary className="font-medium cursor-pointer">{section}</summary>
         <div className="mt-2 text-gray-600 text-xs">
           {/* You can dynamically load content here */}
           Content goes here...
        </div>
      </details>
    ))}
  </div>
</div>
  )}


// import React, { useState } from 'react'
// import { FiMessageCircle, FiSend, FiSidebar } from "react-icons/fi"
// import { RiShareBoxFill } from "react-icons/ri"
// import { MdPermMedia } from 'react-icons/md'
// import { useSelector } from 'react-redux'
// import { motion, AnimatePresence } from 'framer-motion'
// import {FiUser} from 'react-icons/fi';
// import aifin from '../../public/aifin.jpg'
// import { NoChatSelected } from './Conversations'

// function Aibot() {
//   const selectedChat = useSelector(state => state.selectedUser)
//   const [showDetails, setShowDetails] = useState(false)
//   const isSender = true
//   const isChatStarted = false

//   return (
//     <div className='flex flex-col  h-full items-center '>
//       <div className=" transition-all  duration-500 ease-in-out transform min-h-10 border-b-3 border-purple-300 w-full px-2 py-0 text-sm flex items-center justify-between">
//         <div className="relative  border-blue-500 h-full flex items-center gap-3 font-sans font-semibold">
//           <div onClick={() => setShowDetails(false)} className=" flex cursor-pointer items-center text-purple-900 transition-all duration-300 ease-in-out hover:scale-105">
//             <img src={aifin} alt="" className='w-5 h-5 object-fill mr-1 transition-all duration-300 ease-in-out' />
//             AI
//             <span className='text-md text-transparent ml-1 bg-clip-text bg-gradient-to-r from-purple-900 to-purple-500 transition-all duration-300 ease-in-out'>
//               Copilot
//             </span>
//           </div>
//           <div onClick={() => setShowDetails(true)} className={`
//           text-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:text-purple-800 hover:scale-105`}>
//             Details
//           </div>
//           <div className={`absolute rounded-full h-[3px] bg-gradient-to-r from-purple-900 to-purple-500 via-purple-700 -bottom-[3px] ${showDetails ? `w-16 -right-4` : `w-21 left-1`}`}></div>
//         </div>

//         <div className="flex items-center gap-4 justify-center">
//           {showDetails && <RiShareBoxFill size={16} />}
//           <FiSidebar size={16} />
//         </div>
//       </div>

//       <AnimatePresence mode="wait">
//         {!showDetails && isChatStarted && (
//           <motion.div
//             key="chat"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.4 }}
//             className="w-full h-[70vh] overflow-auto"
//           >
//             {/* Chat Bubble */}
//             <div className={`flex items-start gap-1 mt-2 px-2 w-full ${isSender ? 'justify-end' : 'justify-start'}`}>
//               {!isSender && <img className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=John+Doe" alt="john doe" />}
//               <div className={`border-red-500 flex flex-col gap-1 w-full max-w-[320px] px-1 ${isSender ? 'items-end' : 'items-start'}`}>
//                 <div className={`border-red-500 flex items-center gap-2 text-black ${isSender ? 'flex-row-reverse' : 'flex-row'}`}>
//                   <span className="text-sm font-semibold">{isSender ? 'You' : 'John Doe'}</span>
//                   <span className="text-xs font-normal">{new Date().toLocaleTimeString()}</span>
//                 </div>
//                 <div className={`flex flex-col leading-relaxed p-4 border-red-500 ${isSender ? 'border-blue-500 bg-blue-500 text-gray-900 rounded-s-xl rounded-ee-xl' : 'border-gray-200 bg-gray-700 rounded-e-xl rounded-es-xl'}`}>
//                   <p className="text-sm font-normal text-gray-900 dark:text-white">
//                     That's awesome. I think our users will really appreciate the improvements.
//                   </p>
//                 </div>
//               </div>
//               {isSender && <img className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=John+Doe" alt="Your avatar" />}
//             </div>
//           </motion.div>
//         )}

//         {!showDetails && !isChatStarted && (
//           <motion.div
//             key="intro"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             transition={{ duration: 0.3 }}
//             className="flex flex-col items-center mt-auto"
//           >
//             <img src={aifin} alt="" className='w-7 h-7 object-fill mx-auto' />
//             <h4 className='font-bold text-md'>Hi, I'm Fin AI Copilot</h4>
//             <p className='text-gray-700 font-serif text-sm'>Ask me anything about this conversation.</p>
//           </motion.div>
//         )}

//         {!showDetails && (
//           <motion.div
//             key="input"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.3 }}
//             className="flex items-center justify-between border-blue-500 w-full h-9 gap-2 mt-auto mb-2 px-2"
//           >
//             <div className="h-full w-full">
//               <input type="text" placeholder='Your Message' className="outline-none border border-gray-400 w-full h-full px-2 rounded" />
//             </div>
//             <div className="flex justify-center text-sm items-center gap-1">
//               <button className='cursor-pointer p-2 rounded bg-gray-800 text-white'><MdPermMedia /></button>
//               <button className='cursor-pointer p-2 rounded bg-blue-500 text-white'><FiSend /></button>
//             </div>
//           </motion.div>
//         )}

//         {selectedChat && showDetails && (
//           <motion.div
//             key="details"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 50 }}
//             transition={{ duration: 0.4 }}
//             className="w-full h-full"
//           >
//             <ShowDetailsComponent />
//           </motion.div>
//         )}

//         {
//           !selectedChat && showDetails &&(
//             <NoUserSelected/>
//           )
//         }
//       </AnimatePresence>
//     </div>
//   )
// }

// export default Aibot

// export const NoUserSelected = () => {
//    const selectedChat = useSelector(state => state.selectedUser)
//   const [showDetails, setShowDetails] = useState(false)
//   // const isSender = true
//   const isChatStarted = true
//   return (
//     <div className="flex flex-col items-center justify-center h-full w-full text-center px-4 text-gray-500">
//       <FiUser className="text-5xl mb-4 text-blue-400" />
//       <h2 className="text-xl font-semibold mb-1">No User Selected</h2>
//       <p className="text-sm">
//         Please select a User from the sidebar to get Details.
//       </p>
//     </div>
//   );
// };


// import React, { useState, useRef } from 'react'
// import { FiMessageCircle, FiSend, FiSidebar, FiUser } from "react-icons/fi"
// import { RiShareBoxFill } from "react-icons/ri"
// import { MdPermMedia } from 'react-icons/md'
// import { useSelector } from 'react-redux'
// import { motion, AnimatePresence } from 'framer-motion'
// import aifin from '../../public/aifin.jpg'
// import { NoChatSelected } from './Conversations'
// // import { ShowDetailsComponent } from './ShowDetailsComponent'

// function Aibot() {
//   const selectedChat = useSelector(state => state.selectedUser)
//   const [showDetails, setShowDetails] = useState(false)
//   const isSender = true
//   const isChatStarted = true

//   const inputRef = useRef(null)

//   const handleMessageClick = (text) => {
//     if (inputRef.current) {
//       inputRef.current.value = text
//       inputRef.current.focus()
//     }
//   }

//   return (
//     <div className='flex flex-col h-full items-center'>
//       <div className="transition-all duration-500 ease-in-out transform min-h-10 border-b-3 border-purple-300 w-full px-2 py-0 text-sm flex items-center justify-between">
//         <div className="relative border-blue-500 h-full flex items-center gap-3 font-sans font-semibold">
//           <div onClick={() => setShowDetails(false)} className="flex cursor-pointer items-center text-purple-900 transition-all duration-300 ease-in-out hover:scale-105">
//             <img src={aifin} alt="" className='w-5 h-5 object-fill mr-1 transition-all duration-300 ease-in-out' />
//             AI
//             <span className='text-md text-transparent ml-1 bg-clip-text bg-gradient-to-r from-purple-900 to-purple-500 transition-all duration-300 ease-in-out'>
//               Copilot
//             </span>
//           </div>
//           <div onClick={() => setShowDetails(true)} className="text-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:text-purple-800 hover:scale-105">
//             Details
//           </div>
//           <div className={`absolute rounded-full h-[3px] bg-gradient-to-r from-purple-900 to-purple-500 via-purple-700 -bottom-[3px] ${showDetails ? `w-16 -right-4` : `w-21 left-1`}`}></div>
//         </div>

//         <div className="flex items-center gap-4 justify-center">
//           {showDetails && <RiShareBoxFill size={16} />}
//           <FiSidebar size={16} />
//         </div>
//       </div>

//       <AnimatePresence mode="wait">
//         {!showDetails && isChatStarted && (
//           <motion.div
//             key="chat"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.4 }}
//             className="w-full h-[70vh] overflow-auto"
//           >
//             <div className={`flex items-start gap-1 mt-2 px-2 w-full ${isSender ? 'justify-end' : 'justify-start'}`}>
//               {!isSender && <img className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=John+Doe" alt="john doe" />}
//               <div className={`flex flex-col gap-1 w-full max-w-[320px] px-1 ${isSender ? 'items-end' : 'items-start'}`}>
//                 <div className={`flex items-center gap-2 text-black ${isSender ? 'flex-row-reverse' : 'flex-row'}`}>
//                   <span className="text-sm font-semibold">{isSender ? 'You' : 'John Doe'}</span>
//                   <span className="text-xs font-normal">{new Date().toLocaleTimeString()}</span>
//                 </div>
//                 <div className={`flex flex-col leading-relaxed p-4 ${isSender ? 'bg-blue-500 text-gray-900 rounded-s-xl rounded-ee-xl' : 'bg-gray-700 text-white rounded-e-xl rounded-es-xl'}`}>
//                   <p
//                     onClick={() => handleMessageClick("That's awesome. I think our users will really appreciate the improvements.")}
//                     className="text-sm font-normal cursor-pointer hover:underline"
//                   >
//                     That's awesome. I think our users will really appreciate the improvements.
//                   </p>
//                 </div>
//               </div>
//               {isSender && <img className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=John+Doe" alt="Your avatar" />}
//             </div>
//           </motion.div>
//         )}

//         {!showDetails && !isChatStarted && (
//           <motion.div
//             key="intro"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             transition={{ duration: 0.3 }}
//             className="flex flex-col items-center mt-auto"
//           >
//             <img src={aifin} alt="" className='w-7 h-7 object-fill mx-auto' />
//             <h4 className='font-bold text-md'>Hi, I'm Fin AI Copilot</h4>
//             <p className='text-gray-700 font-serif text-sm'>Ask me anything about this conversation.</p>
//           </motion.div>
//         )}

//         {!showDetails && (
//           <motion.div
//             key="input"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.3 }}
//             className="flex items-center justify-between w-full h-9 gap-2 mt-auto mb-2 px-2"
//           >
//             <div className="h-full w-full">
//               <input
//                 ref={inputRef}
//                 type="text"
//                 placeholder="Your Message"
//                 className="outline-none border border-gray-400 w-full h-full px-2 rounded"
//               />
//             </div>
//             <div className="flex justify-center text-sm items-center gap-1">
//               <button className='cursor-pointer p-2 rounded bg-gray-800 text-white'><MdPermMedia /></button>
//               <button className='cursor-pointer p-2 rounded bg-blue-500 text-white'><FiSend /></button>
//             </div>
//           </motion.div>
//         )}

//         {selectedChat && showDetails && (
//           <motion.div
//             key="details"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 50 }}
//             transition={{ duration: 0.4 }}
//             className="w-full h-full"
//           >
//             {/* <ShowDetailsComponent /> */}
//           </motion.div>
//         )}

//         {!selectedChat && showDetails && (
//           <NoUserSelected />
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// export default Aibot



import React, { useState, useEffect, useRef } from 'react';
import { FiMessageCircle, FiSend, FiSidebar, FiUser } from "react-icons/fi";
import { RiShareBoxFill } from "react-icons/ri";
import { MdPermMedia } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import aifin from '../../public/aifin.jpg';
// import { ShowDetailsComponent } from './ShowDetailsComponent';

export const NoUserSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center px-4 text-gray-500">
      <FiUser className="text-5xl mb-4 text-blue-400" />
      <h2 className="text-xl font-semibold mb-1">No User Selected</h2>
      <p className="text-sm">Please select a User from the sidebar to get Details.</p>
    </div>
  );
};

function Aibot() {
const [inputValue, setInputValue] = useState('');


  const selectedChat = useSelector(state => state.selectedUser);
  const [showDetails, setShowDetails] = useState(false);
  const isSender = true;
  const isChatStarted = true; // Assume true for demo
  const inputRef = useRef(null);



   const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const [showTooltip, setShowTooltip] = useState(false)
  const [selectedText, setSelectedText] = useState('')
  
  
useEffect(() => {
  const handleMouseUp = (e) => {
    const selection = window.getSelection();
    const selected = selection.toString().trim();

    // Show tooltip only if text is selected
    if (selected.length > 0) {
      setSelectedText(selected);
      setTooltipPos({ x: e.clientX, y: e.clientY });
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
      setSelectedText('');
    }
  };

  document.addEventListener('mouseup', handleMouseUp());
  // return () => document.removeEventListener('mouseup', handleMouseUp);
}, []);



  return (
    <div className='flex flex-col h-full items-center relative'>
      {/* Header */}
      <div className="transition-all duration-500 ease-in-out transform min-h-10 border-b-3 border-purple-300 w-full px-2 py-0 text-sm flex items-center justify-between">
        <div className="relative border-blue-500 h-full flex items-center gap-3 font-sans font-semibold">
          <div onClick={() => setShowDetails(false)} className="flex cursor-pointer items-center text-purple-900 transition-all duration-300 ease-in-out hover:scale-105">
            <img src={aifin} alt="" className='w-5 h-5 object-fill mr-1 transition-all duration-300 ease-in-out' />
            AI
            <span className='text-md text-transparent ml-1 bg-clip-text bg-gradient-to-r from-purple-900 to-purple-500'>Copilot</span>
          </div>
          <div onClick={() => setShowDetails(true)} className="text-gray-700 cursor-pointer hover:text-purple-800 hover:scale-105">
            Details
          </div>
          <div className={`absolute rounded-full h-[3px] bg-gradient-to-r from-purple-900 to-purple-500 via-purple-700 -bottom-[3px] ${showDetails ? `w-16 -right-4` : `w-21 left-1`}`}></div>
        </div>
        <div className="flex items-center gap-4 justify-center">
          {showDetails && <RiShareBoxFill size={16} />}
          <FiSidebar size={16} />
        </div>
      </div>

      {/* Main Body */}
      <AnimatePresence mode="wait">
        {/* Chat View */}
        {!showDetails && isChatStarted && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full h-[70vh] overflow-auto"
          >
            <div className={`flex items-start gap-1 mt-2 px-2 w-full ${isSender ? 'justify-end' : 'justify-start'}`}>
              {!isSender && <img className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=John+Doe" alt="john doe" />}
              <div className={`flex flex-col gap-1 w-full max-w-[320px] px-1 ${isSender ? 'items-end' : 'items-start'}`}>
                <div className={`flex items-center gap-2 text-black ${isSender ? 'flex-row-reverse' : 'flex-row'}`}>
                  <span className="text-sm font-semibold">{isSender ? 'You' : 'John Doe'}</span>
                  <span className="text-xs font-normal">{new Date().toLocaleTimeString()}</span>
                </div>
                <div className={`flex flex-col leading-relaxed p-4 ${isSender ? 'bg-blue-500 text-white rounded-s-xl rounded-ee-xl' : 'bg-gray-700 text-white rounded-e-xl rounded-es-xl'}`}>
                  <p className="text-sm font-normal"
                  //  onClick={(e) => handleMessageClick(e)}
                   >
                    That's awesome. I think our users will really appreciate the improvements.
                  </p>
                </div>
              </div>
              {isSender && <img className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=John+Doe" alt="Your avatar" />}
            </div>
          </motion.div>
        )}

        {/* Intro */}
        {!showDetails && !isChatStarted && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center mt-auto"
          >
            <img src={aifin} alt="" className='w-7 h-7 object-fill mx-auto' />
            <h4 className='font-bold text-md'>Hi, I'm Fin AI Copilot</h4>
            <p className='text-gray-700 font-serif text-sm'>Ask me anything about this conversation.</p>
          </motion.div>
        )}

        {/* Input Box */}
        {!showDetails && (
          <motion.div
            key="input"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between border-blue-500 w-full h-9 gap-2 mt-auto mb-2 px-2"
          >
            <div className="h-full w-full">
              <input
                ref={inputRef}
                type="text"
                // value={inputValue}
                placeholder='Your Message'
                className="outline-none border border-gray-400 w-full h-full px-2 rounded"
              />
            </div>
            <div className="flex justify-center text-sm items-center gap-1">
              <button className='cursor-pointer p-2 rounded bg-gray-800 text-white'><MdPermMedia /></button>
              <button className='cursor-pointer p-2 rounded bg-blue-500 text-white'><FiSend /></button>
            </div>
          </motion.div>
        )}

        {/* Details View */}
        {selectedChat && showDetails && (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <ShowDetailsComponent />
          </motion.div>
        )}

        {!selectedChat && showDetails && (
          <NoUserSelected />
        )}
      </AnimatePresence>


        {/* Tooltip button near click position */}
      {showTooltip && (
        <div
          className="fixed z-50 bg-white text-sm shadow-md  px-2 py-1 rounded cursor-pointer hover:bg-gray-100"
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`,
            transform: 'translate(-50%, -120%)',
            pointerEvents: 'auto',
          }}
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.value = selectedText
              inputRef.current.focus(); 
              //  setInputValue(selectedText);
            }
            setShowTooltip(false)
          }}
          onMouseLeave={() => setShowTooltip(false)} // hide tooltip if mouse leaves
        >
          Ask AI
        </div>
      )}
    
    </div>
  );
}

export default Aibot;
