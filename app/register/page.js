"use client";

import Form from "next/form";

export default function Register() {
  
  return (
    <div>
      <div><h1>Sign Up</h1></div>
      
      <div>
        <Form action={}>
          <input type="text" name="Fullname" placeholder="Full Name" onChange={} value={} required />
          <input type="email" name="Email" placeholder="Email" onChange={} value={} required />
          <input type="telephone" name="Cellphone" placeholder="Cellphone" onChange={} value={} required />
          <input type="password" name="password" placeholder="Password" onChange={} value={} required />
          <input type="password" name="Confirm Password" placeholder="Confirm Password" onChange={} value={} />
          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  )
}