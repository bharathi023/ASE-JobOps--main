import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bg from '../pexels-scott-webb-2346594.jpg'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
export default function Register() {
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [email,setEmail]=useState()
    const [mobile,setMobile]=useState()
    const navigate=useNavigate()
    const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
       navigate('/')
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='body' style={{backgroundImage: `url(${bg})`}}>

      
    <div className="login-card">
      <h2 style={{color:"black"}}>Register</h2>
      <h3>Enter your Details</h3>
      <form className="login-form" onClick={signUp}>
        <input type="text" placeholder="Username:" onChange={(e)=>setUsername(e.target.value)} />
        <input type="email" placeholder="E-mail:" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="mobile" placeholder="Mobile no:" onChange={(e)=>setMobile(e.target.value)}/>
        <input type="password" placeholder="Password:" onChange={(e)=>setPassword(e.target.value)}/>
        
        <button type="submit" >SIGN UP</button>
        <Link to='/' style={{textDecoration:"underline"}}>Already have a account? Login</Link>
        
      </form>
    </div>
    </div>
  )
}
