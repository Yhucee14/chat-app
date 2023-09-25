/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const Home = () => {
  return (
  
      <div className='mt-[8%] rounded-lg px-1 py-1 flex shadow-md w-[65%] h-[70%] flex-row justify-between'>
      <Sidebar />
      <Chat />
      </div>
    
  )
}

export default Home