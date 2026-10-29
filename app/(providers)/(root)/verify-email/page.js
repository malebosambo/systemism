"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
      
      await signOut(auth);
      setLoading(false);
      
    }
  }
  
  return (
    <main className="Verify_Email">
      
      <div style={{ marginBottom: "20px" }}><h1>Verify your email</h1></div>
      
      <div style={{ marginBottom: "30px" }}><p>We created your account. Please check your email and click the verification link before logging in.</p></div>
      
      <div className="Form_VerifyEmail">
        <form onSubmit={resendVerificationEmail}>
          <div><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" required /></div>
          
          <div><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" required /></div>
          
          <div>{message && <p style={{ color: "green" }}>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}</div>
          
          <div><button type="submit" disabled={loading} className="Button">
            {loading ? "Sending..." : "Resend verfication email"}</button></div>
        </form>
      </div>
      
      <div style={{ marginBottom: "30px" }}>
        <button type="button" onClick={() => router.push("/login")} className="Button">Back to login</button>
      </div>
    </main>
  )
}