import React from 'react'

const Search = () => {
  return (
    <div>
        <div>
                <input type="text" placeholder="Find a user" className="outline-none bg-transparent px-3 py-1  text-white mt-2 border-b-[1px] border-[#ddddf7] ml-3"/>
        </div>
        <div className="flex items-center gap-[10px] mt-3 px-3 hover:bg-[#2F2C53] py-1 cursor-pointer text-[#ddddf7]">
            <img src="https://images.pexels.com/photos/17781600/pexels-photo-17781600.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="user" className="bg-[#ddddf7] h-[43px] w-[43px] rounded-full object-cover"/>
            <div>
                <span className="text-lg">Jane</span>
            </div>
        </div>
    </div>
  ) 
}

export default Search