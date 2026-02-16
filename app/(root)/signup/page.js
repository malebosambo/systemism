"use client";

import Link from "next/link";
import { useState } from "react";
import { UserSignUp } from "../../lib/actions";


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
        <form action={UserSignUp}>
          <input type="text" name="firstName" placeholder="First Name" onChange="" value={user.firstName} height={} width={} required />

          <input type="text" name="surname" placeholder="Surname" onChange="" value={user.surname} height={} width={} required />

          <input type="email" name="email" placeholder="Email" onChange="" value={user.email} height={} width={} required />

          <input type="telephone" name="cellphone" placeholder="Cellphone" onChange="" value={user.cellphone} height={} width={} required />

          <input type="password" name="password" placeholder="Password" onChange="" value={user.password} height={} width={} required />

          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange="" value={user.confirmPassword} height={} width={} required />

          <button type="submit" className="Button">Submit</button>
        </form>
      </div>
      
      <div><p>Already have an account? Login <span><Link href="/login">here</Link></span></p></div>
    </main>
  )
}
