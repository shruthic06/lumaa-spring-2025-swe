import React,  { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Login.css'
import user_img from '../assets/person.png'
import email_img from '../assets/email.png'
import pwd_img from '../assets/password.png'

const Login = () => {

    const navigate = useNavigate();  // Hook to navigate programmatically

  const authenticateLogin = (currentState: string) => {
    
    if (currentState === "Login") {
        // Authnetication with db performed here
      } 
      
      navigate("/tasks"); // Redirect to tasks page
  };


  const [state, setState] = useState("Login");
  
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
      {state === "Sign Up"? <div></div> : <div className="forgot_password">Forgot Password?</div>}
      {state === "Login" && (
        <div className="new_user" onClick={() => setState("Sign Up")}>
          Do not have an account yet? <span className="signup_link">Sign Up Here</span>
        </div>
      )}
      <div className = 'submit-container'>
      <div className='submit' onClick={() => authenticateLogin(state)}>
          {state === 'Sign Up' ? 'Sign Up' : 'Login'}
        </div>
      </div>
    </div>
  )
}

export default Login

