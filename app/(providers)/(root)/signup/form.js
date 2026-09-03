"use client";

import Link from "next/link";
import { useState } from "react";
import { UserSignUp } from "../../lib/actions";


export default function SignupForm() 

{
  
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    cellphone: "",
    password: "",
    confirmPassword: ""
  });

  function handleNameChange(e) {
    setUser({ ...user, name: e.target.value });
  }

  function handleSurnameChange(e) {
    setUser({ ...user, surname: e.target.value });
  }

  function handleEmailChange(e) {
    setUser({ ...user, email: e.target.value });
  }

  function handleCellphoneChange(e) {
    setUser({ ...user, cellphone: e.target.value });
  }

  function handlePasswordChange(e) {
    setUser({ ...user, password: e.target.value });
  }

  function handleConfirmPasswordChange(e) {
    setUser({ ...user, confirmPassword: e.target.value });
  }

  return (
    <main className="SignUp">
      
      <div className="Heading"><h1>Sign Up</h1></div>
      
      <div className="SignUp_Form">
        <form action={UserSignUp}>
          <input type="text" name="name" placeholder="First Name" onChange={handleNameChange} value={user.name} required className="Input" />

          <input type="text" name="surname" placeholder="Surname" onChange={handleSurnameChange} value={user.surname} required className="Input" />

          <input type="email" name="email" placeholder="Email" onChange={handleEmailChange} value={user.email} required className="Input" />

          <input type="telephone" name="cellphone" placeholder="Cellphone" onChange={handleCellphoneChange} value={user.cellphone} required className="Input" />

          <input type="password" name="password" placeholder="Password" onChange={handlePasswordChange} value={user.password} required className="Input" />

          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleConfirmPasswordChange} value={user.confirmPassword} required className="Input" />

          <div style={{ marginBottom: "20px" }}><button type="submit" className="Button">Create Account</button></div>
        </form>
      </div>
      
      <div><p>Already have an account? Login <span><Link href="/login">here</Link></span></p></div>
      
    </main>
  )
}