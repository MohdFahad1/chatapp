import React from 'react';
import add from '../../Assets/add.png';
import cam from '../../Assets/cam.png';
import more from '../../Assets/more.png';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className="flex-[2]">
        <div className="flex justify-between h-[50px] px-3 bg-[#5F5B8F] text-[#ddddf7]">
            <div>
                <h1 className="text-xl font-medium">Jane</h1>
            </div>
            <div className="flex gap-2 items-center">
                <img src={add} alt="add" className="h-[25px] cursor-pointer"/>
                <img src={cam} alt="cam" className="h-[25px] cursor-pointer"/>
                <img src={more} alt="more" className="h-[25px] cursor-pointer"/>
            </div>
        </div>
        <div><Messages /></div>
        <div>
          <Input />
        </div>
    </div>
  )
}

export default Chat