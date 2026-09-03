'use client';

import Link from "next/link";
import { useState } from "react";
import { UserLogin } from "../../../lib/actions";

export default function LoginForm()

{
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <main className="Login">
      
      <div className="Heading"><h1>Login</h1></div>
      
      <div className="Login_Form">
        <form action={UserLogin}>
          <input type="email" name="email" placeholder="Email" onChange={handleEmailChange} value={email} required className="Input" />
          
          <input type="password" name="password" placeholder="Password" onChange={handlePasswordChange} value={password} required className="Input" />
          
          <div style={{ marginBottom: "20px" }}><button type="submit" className="Button">Login</button></div>
        </form>
      </div>
      
      <div><p>Reset password <span style={{ fontColor: "blue" }}><Link href="/reset-password">here</Link></span></p></div>
      
      <div><hr /></div>
      
      <div><p>Do not have an account? Sign up <span style={{ color: "blue" }}><Link href="/signup">here</Link></span></p></div>
      
    </main>
  )
}