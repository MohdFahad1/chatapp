import React from 'react'
import Sidebar from '../../components/SidebarComps/Sidebar'
import Chat from '../../components/ChatComps/Chat'

const Home = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#A8BCFF] flex justify-center items-center px-4">
      
      <div className="w-[950px] h-[500px] rounded-lg bg-white flex overflow-hidden">
        <Sidebar />
        <Chat />
      </div>


    </div>
  )
}

export default Home;