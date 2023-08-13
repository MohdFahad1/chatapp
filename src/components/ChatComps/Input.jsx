import React, { useContext, useState } from 'react';
import add from '../../Assets/addAvatar.png';
import attach from '../../Assets/attach.png';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../context/Firebase';
import { v4 as uuid} from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext); 

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  return (
    <div className="p-3 bg-white flex justify-between items-center">
      <div>
        <input type="text" placeholder="Type something..." className="w-[320px] h-[38px]  outline-none" onChange={(e)=>setText(e.target.value)} value={text}/>
      </div>
      <div className="flex gap-3 w-auto">
        <img src={attach} alt="attachFile" className="h-[30px] cursor-pointer"/>
        <input type="file" id="file" className="hidden" onChange={(e)=> setImg(e.target.files[0])}/>
        <label htmlFor="file">
          <img src={add} alt="addImage" className=" h-[30px] cursor-pointer"/>
        </label>
          <button className="bg-[#879FFD] text-white px-3" type="submit" onClick={handleSend}>send</button>
      </div>
    </div>
  )
}

export default Input