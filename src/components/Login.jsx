import React from 'react'
import "../styles/register.css"
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  return (
    <div className='login-bod'>
        <h3 className='head'>Enter Your Mobile Number</h3>
        <p className='subhead'>We will send you the 4 digit verification conde</p>
        <input className='reginput' type="number" placeholder='Enter your number'/>
        <button onClick={()=>{navigate("/otp")}}>Send Code</button>
    </div>
  )
}

export default Login