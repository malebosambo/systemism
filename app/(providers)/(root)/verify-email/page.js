"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

export default function VerifyEmail() {
  
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ error, setError ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const router = useRouter();
  
  async function resendVerificationEmail(event) {
    event.preventDefault();
    
    setMessage("");
    setError("");
    setLoading(true);
    
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      const firebaseUser = userCredential.user;
      
      if (firebaseUser.emailVerified) {
        router.replace("/dashboard");
        return;
      }
      
      await sendEmailVerification(firebaseUser);
      
      setMessage("A new verification email has been sent.");
    } catch (error) {
      console.error("Verification email error", error);
      setError(error.message || "Unable to send verification email.");
    } finally {
      await auth.signOut();
      setLoading(false);
    }
  }
  
  return (
    <main>
      
      <div><h1>Verify your email</h1></div>
      
      <div><p>We created your account. Please check your email and click the verification link before logging in.</p></div>
      
      <div>
        <form onSubmit={resendVerificationEmail}>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" required />
          
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" required />
          
          {message && <p style={{ color: "green" }}>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Resend verfication email"}</button>
        </form>
      </div>
      
      <div>
        <button type="button" onClick={() => router.push("/login")}>Back to login</button>
      </div>
    </main>
  )
}