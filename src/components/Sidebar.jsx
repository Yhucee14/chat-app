import Navbar from './Navbar'
import Search from './Search'
import Chat from './Chat'

const Sidebar = () => {
  return (
    <div className='w-[35%] flex-col bg-gray-700 overflow-hidden rounded-l-md flex  justify-start'>
      <Navbar />
      <Search />
      <Chat />
    </div>
  )
}

export default Sidebar