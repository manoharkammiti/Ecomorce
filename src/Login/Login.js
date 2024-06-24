import React, { useState } from 'react'
import axios from 'axios'
import'./Login.css'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigation=useNavigate()
   async function login(){
    const newUser={email,password}
    const responce=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,newUser)
    console.log(responce)
    if( responce.status==200){
        navigation("/")
        localStorage.setItem("userRole",responce.data.role)
        localStorage.setItem("userId",responce.data.userId)
    }
   }
  return (
    <div className='login-container'>
        <div className='form-group'>
      <label>Email</label>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
     <div className='form-group'>
     <label>password</label>
     <input value={password} onChange={(e)=>setPassword(e.target.value)} />
     </div>
     <button onClick={login}>Login</button>
     </div>
  )
}
