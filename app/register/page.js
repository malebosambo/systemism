"use client";

import Form from "next/form";
import Link from "next/link";
import { useState } from "react";
import { signUp } from "../lib/auth";

export default function Signup() {
  
  const [ user, setUser ] = useState({
    firstName: "",
    surname: "",
    email: "",
    cellphone: "",
    password: "",
    confirmPassword: ""
  });
  
  return (
    <div>
      <div><h1>Sign Up</h1></div>
      
      <div>
        <Form action={signUp}>
          <input type="text" name="Fullname" placeholder="Full Name" onChange={} value={user.name} required />
          <input type="email" name="Email" placeholder="Email" onChange={} value={user.surname} required />
          <input type="telephone" name="Cellphone" placeholder="Cellphone" onChange={} value={user.cellphone} required />
          <input type="password" name="password" placeholder="Password" onChange={} value={user.password} required />
          <input type="password" name="Confirm Password" placeholder="Confirm Password" onChange={} value={user.confirmPassword} />
          <button type="submit">Submit</button>
        </Form>
      </div>
      <div>
        <p>Already have an account? Login <span><Link href="/login">here</Link></span></p>
      </div>
    </div>
  )
}