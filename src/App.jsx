
import { useState ,useRef} from 'react'
import './App.css'
 import Auth from './components/Auth'
 import Cookies from 'universal-cookie'
import Chat from './components/Chat'
import {signOut} from 'firebase/auth'
import {auth} from './firbase-config'
function App() {
  const cookies = new Cookies()
  const [isAuth,setIsAuth]=useState(cookies.get("auth-token"))
  const[room,setRoom]=useState(null)
  const roomInputRef= useRef(null)

   const signUserOut=async()=>{
      await signOut(auth)
      cookies.remove("auth-token")
      setIsAuth(null)
   }

if(!isAuth){ 
  return (
    <>
    <Auth setIsAuth={setIsAuth}/>
    </>
  )
}

return (
  <>
    {
      room ? (
          <Chat room={room}/>
      ):(
        <div className='room'>
             <label >Enter room name</label>
             <input type="text"ref={roomInputRef} />
             <button onClick={()=>setRoom(roomInputRef.current.value)}>Enter chat</button>
        </div>
      )}
     
     <div className='sign-out'>
        <button onClick={signUserOut}>Sign Out</button>
     </div>

  </>
)

}

export default App
