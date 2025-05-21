import React from 'react'
import { FaSearch, FaSearchMinus } from "react-icons/fa";

import { FaBars, FaTimes } from 'react-icons/fa';
import UsersList from './UsersList';
export default function SearchComponent({isOpen,setIsOpen}) {
  
  return (
    <div className={` border-green-500  h-[79.5vh] hidden
    sm:flex flex-col space-y-2  px-2 w-full bg-gray-100 z-10 items-center justify-start 
    transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
    `}>

      

      <div className=" w-full relative flex mt-5 border-gray-300 items-center justify-center">
        <input type="text" className='border outline-none text-md  border-gray-400 w-[70%] rounded-lg px-2  ' placeholder='Search'/>
        <div className=' absolute right-15  rounded-full p-1  flex items-center justify-center'><FaSearch className='size-3 fill-gray-800'/></div>
      </div>
      <div className="h-0 w-[90%] border-b border-gray-300"></div>
      <div className=" border-blue-500  w-full h-[69vh] overflow-auto  flex flex-col justify-start gap-3">
        <UsersList/>
        <UsersList/>
        <UsersList/>
        <UsersList/>   <UsersList/>
        <UsersList/>
        <UsersList/>
        <UsersList/>   <UsersList/>
        <UsersList/>
        <UsersList/>
        <UsersList/>
      </div>

     
    </div>
  )
}




      // {/* Sidebar */}
      // <div
      //   className={`fixed md:static top-0 left-0 z-40 bg-white border-r border-gray-300
      //     w-[260px] h-full transform transition-transform duration-300 ease-in-out
      //     ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      // >
      //   <div className="w-full h-full flex flex-col px-2 py-4 items-center space-y-2">
      //     {/* Search Input */}
      //     <div className="w-full relative flex items-center justify-center">
      //       <input
      //         type="text"
      //         className="border outline-none text-md border-gray-400 w-[90%] rounded-lg px-3 py-1"
      //         placeholder="Search"
      //       />
      //       <div className="absolute right-6 flex items-center justify-center p-1">
      //         <FaSearch className="size-4 text-gray-800" />
      //       </div>
      //     </div>

