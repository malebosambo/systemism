"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, setPersistence, browserLocalPersistence, sendEmailVerification, signOut } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import { auth } from "@/firebase";
import { CreateProfile } from "@/app/lib/firestore";

export default function SignupForm() {
  
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    cellphone: "",
    type: "Personal",
    password: ""
  });

  const email = user.email.trim();
  const password = user.password;

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {

      await setPersistence(auth, browserLocalPersistence);

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("✅ Signup successful:", userCredential.user.email);

      const firebaseUser = userCredential.user;
      
      await sendEmailVerification(firebaseUser, {
        url: `${window.location.origin}/login`,
        handleCodeInApp: false
        }
      );
      
      await CreateProfile({
        id: firebaseUser.uid,
        name: user.name.trim(),
        surname: user.surname.trim(),
        email: firebaseUser.email,
        cellphone: user.cellphone.trim(),   
        type: user.type,
        emailVerified: false,
        walletActivated: false,
        createdDate: new Date(),
        updatedDate: null,
        address: {
          physical: "",
          postal: ""
        },
        billing: {
          accountNr: null,
          holder: ""
        }
      });
      
      console.log("Signup successful:", firebaseUser.uid);
      
      await signOut(auth);
      
      router.replace("/verify-email");
      
    } catch (error) {
      
      console.error("Signup error:", error);
      setError(getSignUpErrorMessage(error));
      setIsLoading(false);
      
    }
  }
  
  function getSignUpErrorMessage(error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return "An account with this email already exists.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/weak-password":
        return "Password must be atleast six characters";
      case "auth/operation-not-allowed":
        return "Email/password authentication is not enabled in firebase.";
      default:
        return error.message || "Sign up failed. Please try again.";
    }
  }

  return (
    <main className="SignUp">
      
      <div className="Heading"><h1>Sign Up</h1></div>
      
      <div className="SignUp_Form">
        <form onSubmit={handleSubmit}>
          
          <div style={{ marginBottom: "25px" }}>
            <div>
              <input type="radio" name="type" value="Personal" onChange={handleChange} checked={user.type === "Personal"} />
              <lable>Personal</lable>
            </div>
            <div>
              <input type="radio" name="type" value="Business" onChange={handleChange} checked={user.type === "Business"} />
              <label>Business</label>
            </div>
          </div>
          
          <div><input type="text" name="name" placeholder="First Name" onChange={handleChange} value={user.name} required className="Input" /></div>

          <div><input type="text" name="surname" placeholder="Surname" onChange={handleChange} value={user.surname} required className="Input" /></div>

          <div><input type="email" name="email" placeholder="Email" onChange={handleChange} value={user.email} required className="Input" /></div>

          <div><input type="telephone" name="cellphone" placeholder="Cellphone" onChange={handleChange} value={user.cellphone} required className="Input" /></div>

          <div><input type="password" name="password" placeholder="Password" onChange={handleChange} value={user.password} required className="Input" /></div>

          <div style={{ marginBottom: "20px" }}><button type="submit" className="Button">Create Account</button></div>
        </form>
      </div>
      
      <div className="FontColor"><p>Already have an account? Login <span><Link href="/login">here</Link></span></p></div>
      
    </main>
  )
}
