import React from 'react'

const Navbar = () => {
  return (
    <div className='flex px-2 py-2 text-gray-100 h-[50px] justify-between w-full bg-gray-800'>
      <span className='font-bold mt-1'>ChatBox</span>
      <div className='flex '>
        <img className='bg-white bg-cover rounded-full w-6 h-6 mt-1'/>
        <span className='mt-1 px-1.5'>Ucee</span>
        <button className='px-1 bg-gray-400 hover:bg-gray-300 rounded-lg py-1 text-black font-semibold'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar