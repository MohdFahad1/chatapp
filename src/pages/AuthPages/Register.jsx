import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import add from '../../Assets/addImage.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../../context/Firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";


const Register = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                (error) => {
                    setErr(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then( async  (downloadURL) => {
                        await updateProfile(response.user, {
                            displayName,
                            photoURL: downloadURL,
                        });

                        await setDoc(doc(db, "users", response.user.uid), {
                            uid: response.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                          });
                          
                        await setDoc(doc(db, "userChats", response.user.uid), {})

                        navigate("/")
                    });
                }
            );

        } catch (err) {
            setErr(true);
        }
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
                            <input type="text" placeholder="Enter your username" className="bg-gray-200 p-2 outline-none w-[300px] rounded-sm pl-4" />
                        </div>

                        <div className="flex flex-col mt-3">
                            <label>E-Mail</label>
                            <input type="text" placeholder="Enter your E-Mail" className="bg-gray-200 p-2 outline-none w-[300px] rounded-sm pl-4" />
                        </div>

                        <div className="flex flex-col mt-3">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your Password" className="bg-gray-200 p-2 outline-none w-[300px] rounded-sm pl-4" />
                        </div>

                        <div className="w-[300px] mt-5">
                            <div className="flex">
                                <label htmlFor="file" className="cursor-pointer flex"><img src={add} alt="Add Avatar" className="h-[30px] w-[30px]" /><p className="ml-3 text-lg font-medium text-[#9CA3AF]">Add an Avatar</p></label>
                            </div>
                            <input type="file" id="file" className="outline-none w-[300px] hidden" />
                        </div>

                        <div>
                            <button type="submit" className="bg-[#7A92E7] text-white font-semibold text-lg w-[300px] rounded-sm my-5 p-2 hover:bg-[#6682e4]">Sign Up</button>
                        </div>
                        {err && <div className="bg-orange-100  border-orange-500 text-orange-700 p-4" role="alert">
                            <p className="font-bold">Something went wrong</p>
                        </div>}

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