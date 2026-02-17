'use client';

import Link from "next/link";
import { useState } from "react";
import { UserLogin } from "../../lib/actions";


export default function Login() {
  
  return (
    <main className="Login">
      <div><h1>Login</h1></div>
      
      <div className="Login_Form">
        <form action={UserLogin}>
          <input type="email" name="email" placeholder="Email" onChange="" value="" height="10" width="20" required />
          
          <input type="password" name="password" placeholder="Password" onChange="" value="" height="10" width="20" required />
          
          <div><button type="submit" className="Button">Login</button></div>
        </form>
      </div>
      
      <div><p>Reset password <span><Link href="/reset-password">here</Link></span></p></div>
      
      <div><p>Do not have an account? Sign up <span><Link href="/signup">here</Link></span></p></div>
    </main>
  );
}
