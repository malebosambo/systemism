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
    <main className="SignUp">
      <div><h1>Sign Up</h1></div>
      
      <div className="SignUp_Form">
        <form action={UserSignUp}>
          <input type="text" name="firstName" placeholder="First Name" onChange="" value="" required />

          <input type="text" name="surname" placeholder="Surname" onChange="" value="" required />

          <input type="email" name="email" placeholder="Email" onChange="" value="" required />

          <input type="telephone" name="cellphone" placeholder="Cellphone" onChange="" value="" required />

          <input type="password" name="password" placeholder="Password" onChange="" value="" required />

          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange="" value="" required />

          <div style={{ marginBottom: "20px" }}><button type="submit" className="Button">Submit</button></div>
        </form>
      </div>
      
      <div><p>Already have an account? Login <span><Link href="/login">here</Link></span></p></div>
    </main>
  )
}
