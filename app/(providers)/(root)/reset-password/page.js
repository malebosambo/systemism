"use client";

import { useState } from "react";
import { auth } from "@/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export default function ResetPassword() {
  
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ errors, setError ] = useState("");
  const [ loading, setLoading ] = useState(false);
  
  async function SendResetPasswordEmail(event) {
    
    event.preventDefault();
    
    setMessage("");
    setError("");
    setLoading(true);
    
    try {
      
      sendPasswordResetEmail(auth, email);
      
      setMessage("An email to reset your user account has been sent to the email you provided. Open the email and follow the instructions to reset your password.")
      
    } catch(error) {
      
      console.error("Password reset email error", error);
      setError(error.message || "Unable to send password reset email.");
      
    }
  }
  
  const handleChange = (e) => {
    setEmail(e.target.value);
  }
  
  return (
    <main className="ResetPassword">
      
      <div><h1>Reset Password</h1></div>
      
      <div><p>Please enter your user account email address below and press &quot;submit&quot; to receive the reset password email.</p></div>
      
      <div>
        <form onSubmit={SendResetPasswordEmail}>
          <div><input type="text" name="email" value={email} onChange={handleChange} placeholder="Email" required /></div>
          
          {message && <p style={{ color: "green" }}>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          
          <div><button type="submit">Submit</button></div>
        </form>
      </div>
      
    </main>
  )
}