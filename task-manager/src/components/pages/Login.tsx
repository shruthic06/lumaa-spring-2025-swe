import React,  { useState } from 'react'
import './Login.css'
import user_img from '../assets/person.png'
import email_img from '../assets/email.png'
import pwd_img from '../assets/password.png'

const Login = () => {

  const [state, setState] = useState("Sign Up");
  
  return (
    <div className = 'container'>
      <div className='header'>
        <div className='text'>{state}</div>
        <div className = 'underline'></div>
      </div>
      {/* Input for name*/}
      <div className = 'inputs'>
        {state === "Login"? <div></div> : <div className = 'input'>
        <img src={user_img} alt=""/>
        <input type = "text" placeholder='Name'/>
      </div>}
      
      {/* Input for email*/}
      <div className = 'input'>
        <img src={email_img} alt=""/>
        <input type = "email"placeholder='Email Id'/>
      </div>

      {/* Input for password*/}
      <div className = 'input'>
        <img src={pwd_img} alt=""/>
        <input type = "password" placeholder='Password'/>
      </div>
      </div>
      {state === "Sign Up"? <div></div> :       <div className="forgot_password">Forgot Password?</div>}

      <div className = 'submit-container'>
        <div className = {state === 'Login'?'submit grey':'submit'} onClick={()=> {setState("Sign Up")}}>Sign Up</div>
        <div className = {state === 'Sign Up'?'submit grey':'submit'} onClick={()=> {setState("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default Login

