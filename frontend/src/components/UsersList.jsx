import React from 'react'

function UsersList() {
  return (
    <div className='border rounded-lg border-gray-300 px-2 cursor-pointer hover:bg-gray-200'>
      <div className="flex items-center justify-around gap-4 ">
        {/* user image */}
        <div className=" rounded-full w-10 min-w-10 h-10 flex items-center justify-center bg-gray-300 overflow-hidden">LK</div>
        {/* username and content */}
        <div className=" h-12 w-full px-2">
            <h2>John Doe</h2>
            <span className='text-sm'>hey how are you doing??</span>
        </div>
        <div className=" w-[10%] flex items-center justify-center rounded-full text-xs py-1 bg-gray-300 ">2</div>
      </div>
    </div>
  )
}

export default UsersList
