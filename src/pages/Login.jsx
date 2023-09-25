

const Login = () => {
  return (
    <div className=''>
    <div className='flex flex-col  bg-white rounded-2xl shadow-lg w-[500px] '>
      <div className='flex flex-col py-2 '>
        <span className='flex justify-center text-green-600 font-bold text-2xl'>ChatBox</span>
        <span className='flex justify-center py-2'>Login</span>
      </div>
      <form className='flex flex-col py-2 px-7'>
        <input type='email' placeholder='Email' className='py-2 border-2 px-3 border-gray-100 mt-4 rounded-2xl'/>
        <input type='password' placeholder='Password' className='py-2 border-2 px-3 border-gray-100 mt-4 mb-4 rounded-2xl'/>
       
        <button className='bg-green-600 hover:bg-gray-300 hover:text-black py-1.5 rounded-xl px-2 text-white'> Login </button>
      </form>

      <p className='py-3 mb-1 flex justify-center cursor-pointer'>Dont have an account?, Register</p>
    </div>
  </div>
  )
}

export default Login