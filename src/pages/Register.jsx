/* eslint-disable no-unused-vars */
import React from 'react'
import add from '../assets/add.png'

const Register = () => {
  return (
    <div className=''>
      <div className='flex flex-col  bg-white rounded-2xl shadow-lg w-[500px] '>
        <div className='flex flex-col py-2 '>
          <span className='flex justify-center text-green-600 font-bold text-2xl'>ChatBox</span>
          <span className='flex justify-center py-2'>Register</span>
        </div>
        <form className='flex flex-col py-2 px-7'>
          <input type='text' placeholder='Display name'  className='py-2 border-2 px-3 border-gray-100  rounded-2xl'/>
          <input type='email' placeholder='Email' className='py-2 border-2 px-3 border-gray-100 mt-4  rounded-2xl'/>
          <input type='password' placeholder='Password' className='py-2 border-2 px-3 border-gray-100 mt-4 rounded-2xl'/>
          <input type='file' className='py-5 px-3 cursor-pointer' id='file'/>
          <label htmlFor='file' className='flex flex-row px-2 py-1 mb-2'>
            <img src={add} alt='add avatar' className='w-7 h-6'/>
            <span className='px-3'>Add an avatar</span>
          </label>


          <button className='bg-green-600 hover:bg-gray-300 hover:text-black py-1.5 rounded-xl px-2 text-white'> Register</button>
        </form>

        <p className='py-3 mb-1 flex justify-center cursor-pointer'>Already have an account?, Login</p>
      </div>
    </div>
  )
}

export default Register