import React, { useEffect, useRef, useState } from 'react'
import { FiSend } from "react-icons/fi";
import { MdPermMedia } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { LuMoonStar } from "react-icons/lu";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { messages } from '../constants';


import { FiMessageCircle ,FiUser} from 'react-icons/fi';
import { removeSelectedChat } from '../store/actions';


function Conversations() {
const dispatch=useDispatch()
  const [allMessageArray, setAllMessageArray] = useState([]);
  const messageRef = useRef("")
  const selectedChat = useSelector(state => state.selectedUser)
  const authUser = useSelector(state => state.authUser)
  useEffect(() => {
    if (!authUser || !selectedChat) return;

    const filteredMessages = messages.filter((message) =>
      message.participants.includes(authUser?.id) &&
      message.participants.includes(selectedChat?.id)

    );
    setAllMessageArray(filteredMessages)

  }, [authUser, selectedChat, messages])

  const handleSendMessage = () => {

    const text = messageRef.current?.value?.trim();
    if (!text) return;

    const newMessage = {
      id: "m" + (allMessageArray.length + 1),
      text,
      senderId: authUser?.id,
      receiverId: selectedChat?.id,
      participants: [authUser?.id, selectedChat?.id],
      timestamp: new Date().toISOString(),
    };

    // Update array immutably
    setAllMessageArray(prev => [...prev, newMessage]);

    // Clear input
    messageRef.current.value = "";
  }



  return (<>
  {selectedChat? <div className='flex  flex-col overflow-hidden h-full   items-center  border-red-500 '>


      {/* header part */}
      <div className="min-h-10 border-b-3 border-purple-300  w-full px-2 py-1 font-semibold text-xl flex items-center justify-between">
        <div className="font-semibold text-xl">{selectedChat?.firstName} {selectedChat?.lastName}</div>
        <div className="flex items-center  gap-4 justify-center">
          <button className='cursor-pointer bg-gray-200 rounded-lg p-1 '><BsThreeDots /> </button>
          <button className=' bg-gray-200  cursor-pointer rounded-lg p-1 '><LuMoonStar fill="black" /></button>
          <button 
          onClick={()=>dispatch(removeSelectedChat())}
          className='cursor-pointer rounded-lg px-3 font-normal text-white bg-black py-1 flex items-center text-sm gap-2'><FaEnvelopeOpenText /> Close</button>
        </div>
      </div>

      <div className="   w-full h-[70vh]  overflow-auto"
      >
        {
          allMessageArray.map((message) => <MessageComponent {...message} />)
        }




      </div>


      {/* input box part footer */}
      <div className="flex  items-center justify-between 
 border-blue-500 w-full h-9 gap-2 mt-auto  mb-2 px-2">

        {/* input box */}
        <div className="h-full w-full">
          <input type="text" placeholder='Your Message ' ref={messageRef}          
            className="outline-none border border-gray-400 w-full h-full  px-2 rounded" />
        </div>

        {/* send button */}
        <div className="  flex justify-center text-sm  items-center gap-1 ">
          <button className='cursor-pointer p-2 rounded bg-gray-800 text-white'><MdPermMedia /></button>
          <button
            onClick={() => handleSendMessage()} className='cursor-pointer p-2 rounded bg-blue-500 text-white'><FiSend /></button>


        </div>
      </div>




    </div> : <NoChatSelected/> }
  
  </>
    



  )
}

export default Conversations


export const NoChatSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center px-4 text-gray-500">
      <FiMessageCircle className="text-5xl mb-4 text-blue-400" />
      <h2 className="text-xl font-semibold mb-1">No Chat Selected</h2>
      <p className="text-sm">
        Please select a chat from the sidebar to start messaging.
      </p>
    </div>
  );
};










export const MessageComponent = ({ ...message }) => {
  const authUser = useSelector(state => state.authUser)
  const selectedChat = useSelector(state => state.selectedUser)
  let isSender = authUser?.id === message?.senderId


  return (
    <>
      <div
        className={` flex items-start gap-1 mt-2 px-2 w-full  ${isSender ? 'justify-end' : 'justify-start'
          }`}
      >
        {/* Avatar */}
        {!isSender && (
          <img
            className="w-8 h-8 rounded-full "
            src={selectedChat?.image}
            alt={`${selectedChat.firstName} ${selectedChat.lastName}`}
          />
        )}

        {/* Message content */}
        <div
          className={` border-red-500 flex flex-col gap-1 w-full max-w-[320px] px-1 ${isSender ? 'items-end' : 'items-start'
            }`}
        >
          {/* Name and Time */}
          <div
            className={` border-red-500 flex items-center gap-2  text-black ${isSender ? 'flex-row-reverse' : 'flex-row'
              }`}
          >
            <span className="text-sm font-semibold">
              {isSender ? 'You' : `${selectedChat.firstName} ${selectedChat.lastName}`}
            </span>
            <span className="text-xs font-normal ">{new Date(message.timestamp).toLocaleTimeString()}</span>
          </div>

          {/* Message Bubble */}
          <div
            className={`flex flex-col leading-relaxed p-4  border-red-500    ${isSender
                ? 'border-blue-500 bg-blue-500 text-gray-900 rounded-s-xl rounded-ee-xl'
                : 'border-gray-200 bg-gray-700 rounded-e-xl rounded-es-xl '
              }`}
          >
            <p className="text-sm font-normal text-gray-900 dark:text-white">
              {message?.text}
            </p>
          </div>

          {/* Optional: Delivered status */}
          {/* <span className="text-xs text-gray-500 dark:text-gray-400">Delivered</span> */}
        </div>

        {/* Avatar for sender */}
        {isSender && (
          <img
            className="w-8 h-8 rounded-full "
            src={authUser?.image}
            alt="Your avatar"
          />
        )}
      </div></>
  )

}