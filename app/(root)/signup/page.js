"use client";

import Link from "next/link";
import { useState } from "react";
import { userSignUp } from "/../../lib/actions";


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
    <main>
      <div><h1>Sign Up</h1></div>
      
      <div>
        <form action={userSignUp}>
          <input type="text" name="firstName" placeholder="First Name" onChange={(e) => setUser.firstName(e.target.value)} value={user.firstName} required />

          <input type="text" name="surname" placeholder="Surname" onChange={(e) => setUser.surname(e.target.value)} value={user.surname} required />

          <input type="email" name="email" placeholder="Email" onChange={(e) => setUser.email(e.target.value)} value={user.email} required />

          <input type="telephone" name="cellphone" placeholder="Cellphone" onChange={(e) => setUser.cellphone(e.target.value)} value={user.cellphone} required />

          <input type="password" name="password" placeholder="Password" onChange={(e) => setUser.password(e.target.value)} value={user.password} required />

          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={(e) => setUser.confirmPassword(e.target.value)} value={user.confirmPassword} required />

          <button type="submit" className="Button">Submit</button>
        </form>
      </div>
      
      <div><p>Already have an account? Login <span><Link href="/login">here</Link></span></p></div>
    </main>
  )
}
