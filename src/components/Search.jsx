import jane from '../assets/jane.jpg'

const Search = () => {
  return (
    <div className='px-3 shadow-md'>
      <div className='py-2'>
        <input type='text' placeholder='find a user' className='bg-transparent text-white'/>
      </div>

      <div className='flex flex-row cursor-pointer py-2 hover:bg-gray-600'>
        <img src={jane} alt='jane' className='w-12 h-12 object-cover rounded-full'/>
        <div className='flex justify-center px-3 mt-2 text-white'>
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search