import React from 'react'
import SearchComponent from './SearchComponent'

function Sidebar() {
  return (
    <div className='border-r-3 border-purple-300 w-full h-full px-0'>
      <div className=" min-h-10 border-b-3  border-purple-300 w-full px-2 py-1 font-semibold text-xl  ">Your inbox</div>
<SearchComponent/>

      {/* <div className="flex flex-col items-center justify-start space-y-4 border border-red-500 h-full  px-1">
        <div className='border'>search div</div>
        <div className='border'>list of users</div>
      </div> */}
    </div>
  )
}

export default Sidebar
