'use client';

import Form from "next/form";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "../lib/auth";

export default function SignIn() {
  
  const [ user, setUser ] = useState({
    email: "",
    password: ""
  });
  
  return (
    <div>
      <div><h1>Sign In</h1></div>
      
      <div>
        <Form action={signIn}>
          <input type="email" name="email" placeholder="Email" onChange={} value={user.email} required />
          <input type="password" name="password" placeholder="Password" onChange={} value={user.password} required />
          <button type="submit">Login</button>
        </Form>
      </div>
      <div><p>Reset password <span><Link href="/reset-password">here</Link></span></p></div>
      <div>
        <p>Don't have an account? Sign up <span><Link href="/signup">here</Link></span></p>
      </div>
    </div>
  )
}