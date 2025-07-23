'use client';

import Link from "next/link";
import { useState } from "react";


export default function Login() {
  
  const [ user, setUser ] = useState({
    email: "",
    password: ""
  });
  
  return (
    <main>
      <div><h1>Sign In</h1></div>
      
      <div>
        <form action="">
          <input type="email" name="email" placeholder="Email" onChange={(e) => setUser.email(e.target.value)} value={user.email} required />
          <input type="password" name="password" placeholder="Password" onChange={(e) => setUser.password(e.target.value)} value={user.password} required />
          <button type="submit" className="Button">Login</button>
        </form>
      </div>
      
      <div><p>Reset password <span><Link href="/reset-password">here</Link></span></p></div>
      
      <div><p>Do not have an account? Sign up <span><Link href="/signup">here</Link></span></p></div>
    </main>
  )
}
