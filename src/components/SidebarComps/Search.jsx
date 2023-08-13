import React, { useContext, useState } from 'react';
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore"
import { db } from '../../context/Firebase';
import { AuthContext } from '../../context/AuthContext';

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);


  const {currentUser} = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", userName)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (err) {
      setErr(true);
    }
  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch(); 
  }

  const handleSelect = async () => {
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));


      if(!res.exists()){
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          }, [combinedId+".date"]: serverTimestamp()
        })

      }
    } catch (err) {}

    setUser(null);
    setUserName("");
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Find a user" className="outline-none bg-transparent px-3 py-1  text-white mt-2 border-b-[1px] border-[#ddddf7] ml-3" onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKey} value={userName}/>
      </div>
      {err && <span>User not found !!!</span>}
      {user && (<div className="flex items-center gap-[10px] mt-3 px-3 hover:bg-[#2F2C53] py-1 cursor-pointer text-[#ddddf7]" onClick={handleSelect}>
        <img src={user.photoURL} alt="user" className="bg-[#ddddf7] h-[43px] w-[43px] rounded-full object-cover" />
        <div>
          <span className="text-lg">{user.displayName}</span>
        </div>
      </div>)}
    </div> 
  )
}

export default Search