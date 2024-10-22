import React from 'react'
import {auth ,provider} from '../firbase-config.js'
import {signInWithPopup} from 'firebase/auth'
import Cookies from 'universal-cookie'
import './auth.css'
function Auth({setIsAuth}) {

    const cookies = new Cookies()
  
    const signInWithGoogle = async()=>{
      
        try {
            const result=  await signInWithPopup(auth,provider)
            cookies.set("auth-token",result.user.refreshToken)
            setIsAuth(true)

        } catch (error) {
            console.error(error);
            
        }
    }

  return (
    <div className='auth'>
         <p>Sign in with Google to Continue</p>
         <button onClick={signInWithGoogle}>Sign in with google</button>    
    </div>
  )
}

export default Auth
