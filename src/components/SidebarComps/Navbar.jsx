import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../../context/Firebase'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <div className="bg-[#2F2C53] flex items-center justify-between p-3 text-[#ddddf7] text-lg">
        <h1 className="font-medium">React Chat</h1>
        <div className="flex gap-2 items-center">
            <img src={currentUser.photoURL} alt="" className="bg-[#ddddf7] h-[24px] w-[24px] rounded-full object-cover" />
            <span>{currentUser.displayName}</span>
            <button className="bg-[#5F5B8D] text-xs h-[25px] px-2 hover:bg-[#f56969]" onClick={() => signOut(auth)}>logout</button>
        </div>
    </div>
  )
}

export default Navbar