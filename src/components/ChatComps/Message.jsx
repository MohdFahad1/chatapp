import React from 'react';
import messages from './messages.css';

const Message = () => {
  return (
    <div className="message owner">
      <div className=" flex flex-col items-center">
      <img src="https://images.pexels.com/photos/17781600/pexels-photo-17781600.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className="bg-[#ddddf7] h-[30px] w-[30px] rounded-full object-cover" />
        <span className="text-gray-500 text-xs">just now</span>
      </div>
      <div className="rounded-r-lg rounded-bl-lg flex flex-col items-center justify-center px-2  w-[170px] min-h-[30px] box">
        <h1>Hello, How are you ?</h1>
        <img src="https://images.pexels.com/photos/17781600/pexels-photo-17781600.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="images"/>
      </div>
    </div>
  )
}

export default Message