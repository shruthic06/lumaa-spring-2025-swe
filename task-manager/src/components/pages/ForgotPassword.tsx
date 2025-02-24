import React, { useState } from "react";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    const response = await fetch("http://localhost:3000/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessage("Password reset link sent to your email.");
    } else {
      setMessage(data.error || "Something went wrong.");
    }
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <p>Enter your email to receive a password reset link.</p>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Send Reset Link</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
