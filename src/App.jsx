import { Outlet } from 'react-router-dom'
import './App.css'
import NaveItems from './component/NaveItems/NaveItems'
import SocalMidea from './component/SocialMidea/SocalMidea'

function App() {
  return (
    <div className='md:flex'>
      <div className='hidden md:block w-[5%] h-[100vh] bg-[rgb(21,28,72)] border-r-[1px]'>
        <SocalMidea></SocalMidea>
      </div>
      <div className="md:w-[15%] md:h-[100vh] border-r-[1px] bg-[rgb(16,0,40)]">
        <NaveItems></NaveItems>
      </div>
      <div className='w-full md:w-[80%]'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
