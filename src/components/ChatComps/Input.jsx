import React from 'react';
import add from '../../Assets/addAvatar.png';
import attach from '../../Assets/attach.png';

const Input = () => {
  return (
    <div className="p-3 bg-white flex justify-between items-center">
      <div>
        <input type="text" placeholder="Type something..." className="w-[320px] h-[38px]  outline-none"/>
      </div>
      <div className="flex gap-3 w-auto">
        <img src={attach} alt="attachFile" className="h-[30px] cursor-pointer"/>
        <input type="file" id="file" className="hidden"/>
        <label htmlFor="file">
          <img src={add} alt="addImage" className=" h-[30px] cursor-pointer"/>
        </label>
          <button className="bg-[#879FFD] text-white px-3">send</button>
      </div>
    </div>
  )
}

export default Input