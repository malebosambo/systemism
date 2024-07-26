'use client';

import { authenticate } from "./lib/actions";
import { useFormState, useFormStatus } from "react-dom";

export default function Login() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  
  return (
    <main>
      <form action={dispatch}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <div>{errorMessage && <p>{errorMessage}</p>}</div>
        <LoginButton />
      </form>
    </main>
  );
}

function LoginButton() {
  const pending = useFormStatus();
  
  const handleClick = (event) => {
    if (pending) {
      event.preventDefault();
    }
  }
  
  return (
    <button aria-disabled={pending} type="submit" onClick={handleClick}>Login</button>
  )
  
}