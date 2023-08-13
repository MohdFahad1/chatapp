import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';

const Message = ({ message }) => {

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({behaviour:"smooth"})
  }, [message])

  return (
      <div className={`message ${message.senderId === currentUser.uid && "owner"}`} ref={ref}>
        <div className="box">
        <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" className="bg-[#ddddf7] h-[30px] w-[30px] rounded-full object-cover" />
          <span className="text-gray-500 text-xs">just now</span>
        </div>
        <div className="rounded-r-lg rounded-bl-lg flex flex-col items-center justify-center px-2  w-[170px] min-h-[30px] box">
          <h1>{message.text}</h1>
          {message.img && <img src={message.img} alt="images"/>}
        </div>
      </div>
  )
}

export default Message