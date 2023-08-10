import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../context/Firebase';

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");

        } catch (err) {
            setErr(true);
        }
    }

  return (
    <>
        <div className="h-[100vh] w-[100vw] bg-[#A8BCFF] flex justify-center items-center px-4">
            <div className="bg-white h-auto md:w-[400px] rounded-lg p-4 w-[380px]">
                <h1 className="text-3xl font-bold text-center">React Chat App</h1>
                <p className="text-center">(Log in to start chatting)</p>
                <div>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                        <div className="flex flex-col mt-3">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your E-mail" className="bg-gray-200 p-2 outline-none w-[300px] rounded-sm pl-4"/>
                        </div>

                        <div className="flex flex-col mt-3">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your Password" className="bg-gray-200 p-2 outline-none w-[300px] rounded-sm pl-4"/>
                        </div>

                        <div>
                            <button type="submit" className="bg-[#7A92E7] text-white font-semibold text-lg w-[300px] rounded-sm my-5 p-2 hover:bg-[#6682e4]">Sign In</button>
                        </div>

                        {err && <div className="bg-orange-100  border-orange-500 text-orange-700 p-4" role="alert">
                            <p className="font-bold">Something went wrong</p>
                        </div>}

                        <div>
                            <p className="text-gray-500">You don't have an account? <NavLink to="/register"><span className="underline cursor-pointer text-black">Register</span></NavLink></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login