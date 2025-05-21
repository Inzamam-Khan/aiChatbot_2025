import React from 'react'
import { FaSearch, FaSearchMinus } from "react-icons/fa";
import UsersList from './UsersList';
function SearchComponent() {
  return (
    <div className=' border-green-500 w-full h-full
    flex flex-col space-y-2 px-2  items-center justify-start '>

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

export default SearchComponent
