'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence, signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { GetProfile, UpdateProfile } from "@/app/lib/firestore";

export default function LoginForm() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      
      await setPersistence(auth, browserLocalPersistence);

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Login successful:", userCredential.user.email);
      
      const firebaseUser = userCredential.user;
      
      if (!firebaseUser.emailVerified) {
        await signOut(auth);
        router.replace("/verify-email");
        return;
      }
      
      const profile = await GetProfile(firebaseUser);

      const emailVerified = { emailVerified: profile.emailVerified};
      
      if (!emailVerified) {
        await UpdateProfile(emailVerified, firebaseUser.id);
      }

      await new Promise(resolve => setTimeout(resolve, 500));

      router.push("/dashboard");
      
    } catch (error) {
      
      console.error("Login error:", error.message);
      setError(error.message || "Login failed. Please try again.");
      setIsLoading(false);
      
    }
  }

  return (
    <main className="Login">
      
      <div className="Heading"><h1>Login</h1></div>
      
      <div className="Login_Form">
        <form onSubmit={handleSubmit}>
          <div><input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required className="Input" /></div>
          
          <div><input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required className="Input" /></div>
          
          <div style={{ marginBottom: "20px" }}><button type="submit" className="Button">Login</button></div>
        </form>
      </div>
      
      <div><p>Reset password <span style={{ fontColor: "blue" }}><Link href="/reset-password">here</Link></span></p></div>
      
      <div><hr /></div>
      
      <div><p>Do not have an account? Sign up <span style={{ color: "blue" }}><Link href="/signup">here</Link></span></p></div>
      
    </main>
  )
}
