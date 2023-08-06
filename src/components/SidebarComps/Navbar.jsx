import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-[#2F2C53] flex items-center justify-between p-3 text-[#ddddf7] text-lg">
        <h1 className="font-medium">React Chat</h1>
        <div className="flex gap-2 items-center">
            <img src="https://images.pexels.com/photos/17781600/pexels-photo-17781600.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className="bg-[#ddddf7] h-[24px] w-[24px] rounded-full object-cover" />
            <span>John</span>
            <button className="bg-[#5F5B8D] text-xs h-[25px] px-2 hover:bg-[#f56969]">logout</button>
        </div>
    </div>
  )
}

export default Navbar