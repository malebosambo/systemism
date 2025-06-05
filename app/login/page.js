'use client';

import Form from "next/form";

import { authenticate } from "../lib/actions";

export default function Login() {
  
  return (
    <div>
      <div><h1>Login</h1></div>
      
      <div>
        <Form action={authenticate}>
          <input type="email" name="email" placeholder="Email" onChange={} value={} required />
          <input type="password" name="password" placeholder="Password" onChange={} value={} required />
          <button type="submit">Login</button>
        </Form>
      </div>
    </div>
  )
}