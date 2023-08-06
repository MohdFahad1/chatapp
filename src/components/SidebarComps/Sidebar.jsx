import React from 'react'
import Navbar from './Navbar'
import Chats from './Chats'
import Search from './Search'

const Sidebar = () => {
  return (
    <div className="flex-1 border-r border-[#3e3c61] bg-[#3e3c61]">
        <Navbar />
        <Search />
        <Chats />
    </div>
  )
}

export default Sidebar