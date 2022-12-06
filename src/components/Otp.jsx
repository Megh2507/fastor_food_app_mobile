import React from 'react'
import "../styles/register.css"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Otp() {
  const navigate = useNavigate()
  const verifyHandler = () => {
    axios.post('https://staging.fastor.in/v1/pwa/user/login?OTP=123456', {
      phone:"9818979450",
      otp:"123456",
      dial_code:"+91"
    })
    .then(function (response) {
      console.log(response.data.data.token);
      localStorage.setItem("token",JSON.stringify(response.data.data.token))
      navigate("/home")
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className='login-bod'>
        <h1 className='head'>OTP Verification</h1>
        <p className='subhead'>Enter the verification code we just sent on your Mobile Number.</p>
        <div className="otpinput">
            <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" />

        </div>
        <button onClick={verifyHandler}>Verify</button>
        <p style={{marginTop:"10px"}} className="subhead">Didn’t received code?<span style={{color:"blue"}}>Resend</span></p>
    </div>
  )
}

export default Otp