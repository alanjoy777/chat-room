import React, { useEffect, useState } from 'react'
import { addDoc ,collection,serverTimestamp , onSnapshot, query ,where, doc, orderBy} from 'firebase/firestore'
import { auth, db } from '../firbase-config'
import '../chat.css'



function Chat({room}) {

const[newMsg,setNewMsg]=useState("")
const messageRef = collection(db,"messages")
 const[message,setMessages]=useState([])

useEffect(()=>{
   const queryMesaages= query(messageRef, where("room", "==" , room),orderBy("createdAt"))
     const unsuscribe= onSnapshot(queryMesaages,( snapshot)=>{
    let messages=[]
    snapshot.forEach((doc)=>{
      messages.push({...doc.data(), id: doc.id})
    })
    setMessages(messages)
   })

   return ()=> unsuscribe();
},[])

const handlesubmit= async(e)=>{
   e.preventDefault();
   if(newMsg === "") return;


    await addDoc(messageRef,{
        text:newMsg,
        createdAt: serverTimestamp(),
        user: auth.currentUser.displayName,
        room,
    })

    setNewMsg("")
}


  return (
    <div className='chat-app'>
       <div className="header">
          <h1>Welcome to:{room.toUpperCase()}</h1>
       </div>
      <div className='messages' >{message.map(msg=>  
            <div className='message' key={msg.id}>
               <span className='user'>{msg.user} </span>
               <h2>{msg.text}</h2>
               </div>
        )}</div>
      <form onSubmit={handlesubmit} className='new-message-from'>
        <input onChange={(e)=> setNewMsg(e.target.value)} value={newMsg} type="text" className='new-message-input' placeholder='type yor messeges here'  />
        <button type='submit' className='send-button'>send</button>
      </form>
    </div>
  )
}

export default Chat
