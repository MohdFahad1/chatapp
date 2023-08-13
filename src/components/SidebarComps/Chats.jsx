import { doc, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { db } from '../../context/Firebase';
import { ChatContext } from '../../context/ChatContext';

const Chats = () => {
    const [chats, setChats] = useState([]);

    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsub();
            }
        }
        currentUser.uid && getChats()
    }, [currentUser.uid]);
    

    const handleSelect = (u) => {
        dispatch({type:"CHANGE_USER", payload: u})
    }

    console.log(Object.entries(chats));

  return (
    <div>
    {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
        <div className="flex items-center gap-[10px] mt-3 px-3 hover:bg-[#2F2C53] py-1 cursor-pointer text-[#ddddf7]" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
            <img src={chat[1].userInfo.photoURL} alt="user" className="bg-[#ddddf7] h-[43px] w-[43px] rounded-full object-cover"/>
            <div>
                <span className="text-lg">{chat[1].userInfo.displayName}</span>
                <p className="text-xs text-gray-400 -mt-1">{chat[1].lastMessage?.text}</p>
            </div>
        </div>
    ))}
    </div>
  )
}

export default Chats