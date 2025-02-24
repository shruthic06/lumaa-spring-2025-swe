import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import user_img from "../assets/person.png";
import email_img from "../assets/email.png";
import pwd_img from "../assets/password.png";

interface LoginProps {
  setToken: (token: string | null) => void;
}

const Login: React.FC<LoginProps> = ({ setToken }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [state, setState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleAuth = async () => {
    const endpoint = state === "Login" ? "login" : "register";
    const requestBody =
      state === "Login"
        ? { username: email, password }
        : { username: email, password };

    try {
      const response = await fetch(`http://localhost:3000/api/auth/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        navigate("/tasks"); // Redirect to tasks after login
      } else {
        alert(data.error || "Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{state}</div>
        <div className="underline"></div>
      </div>

      {/* Input Fields */}
      <div className="inputs">
        {/* Name field for Sign Up */}
        {state === "Sign Up" && (
          <div className="input">
            <img src={user_img} alt="" />
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        )}

        {/* Email Field */}
        <div className="input">
          <img src={email_img} alt="" />
          <input type="email" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        {/* Password Field */}
        <div className="input">
          <img src={pwd_img} alt="" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>

      {/* Forgot Password (Only for Login) */}
      {state === "Login" && <div className="forgot_password" onClick={() => navigate("/forgot-password")}>Forgot Password?</div>}

      {/* Toggle between Login and Sign Up */}
      {state === "Login" ? (
        <div className="new_user" onClick={() => setState("Sign Up")}>
          Do not have an account yet? <span className="signup_link">Sign Up Here</span>
        </div>
      ) : (
        <div className="new_user" onClick={() => setState("Login")}>
          Already have an account? <span className="signup_link">Login Here</span>
        </div>
      )}

      {/* Submit Button */}
      <div className="submit-container">
        <div className="submit" onClick={handleAuth}>
          {state === "Sign Up" ? "Sign Up" : "Login"}
        </div>
      </div>
    </div>
  );
};

export default Login;
