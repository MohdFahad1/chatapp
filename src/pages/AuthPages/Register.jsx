import React from 'react';
import {NavLink} from 'react-router-dom';
import add from '../../Assets/addImage.png';

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className="h-[100vh] w-[100vw] bg-[#A8BCFF] flex justify-center items-center px-4">
            <div className="bg-white h-auto md:w-[400px] rounded-lg p-4 w-[380px]">
                <h1 className="text-3xl font-bold text-center">React Chat App</h1>
                <p className="text-center">(Register)</p>
                <div>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                        <div className="flex flex-col mt-3">
                            <label>Username</label>
                            <input type="text" placeholder="Enter your username" className="bg-gray-200 p-2 outline-none w-[300px] rounded-sm pl-4"/>
                        </div>

                        <div className="flex flex-col mt-3">
                            <label>E-Mail</label>
                            <input type="text" placeholder="Enter your E-Mail" className="bg-gray-200 p-2 outline-none w-[300px] rounded-sm pl-4"/>
                        </div>

                        <div className="flex flex-col mt-3">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your Password" className="bg-gray-200 p-2 outline-none w-[300px] rounded-sm pl-4"/>
                        </div>

                        <div className="w-[300px] mt-5">
                            <div className="flex">
                                <label htmlFor="file" className="cursor-pointer flex"><img src={add} alt="Add Avatar" className="h-[30px] w-[30px]"/><p className="ml-3 text-lg font-medium text-[#9CA3AF]">Add an Avatar</p></label>
                            </div>
                            <input type="file" id="file" className="outline-none w-[300px] hidden"/>
                        </div>

                        <div>
                            <button type="submit" className="bg-[#7A92E7] text-white font-semibold text-lg w-[300px] rounded-sm my-5 p-2 hover:bg-[#6682e4]">Sign Up</button>
                        </div>

                        <div>
                            <p className="text-gray-500">You do have an account? <NavLink to="/login"><span className="underline cursor-pointer text-black">Login</span></NavLink></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Register