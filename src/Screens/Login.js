import React, { useState } from 'react'
import './Login.css'
import bg from '../pexels-scott-webb-2346594.jpg'
import { Link, useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
export default function Login() {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()
   const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
         
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
      <div className='body' style={{backgroundImage: `url(${bg})`}}>

      
    <div className="login-card">
      <h2 style={{color:"black"}}>Login</h2>
      <h3>Enter your credentials</h3>
      <form className="login-form" onSubmit={signIn}>
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit" style={{}}>LOGIN</button>
        <Link to='/Register' style={{textDecoration:"underline"}}>Dont have a account? Register</Link>
      </form>
    </div>
    </div>
  )
}
