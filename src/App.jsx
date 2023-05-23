import { Outlet } from 'react-router-dom'
import './App.css'
import NaveItems from './component/NaveItems/NaveItems'
import SocalMidea from './component/SocialMidea/SocalMidea'

function App() {
  return (
    <div className='md:flex'>
      <div className='hidden md:block w-[5%] h-[100vh] bg-[#2C2C6C] border-r-[1px] sticky z-10 top-0'>
        <SocalMidea></SocalMidea>
      </div>
      <div className="md:w-[15%] md:h-[100vh] border-r-[1px] bg-[#151C48] sticky z-10 top-0">
        <NaveItems></NaveItems>
      </div>
      <div className='w-full md:w-[80%]'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
