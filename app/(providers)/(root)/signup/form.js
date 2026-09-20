"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from "@/firebase";
import { CreateProfile } from "@/app/lib/firestore";

export default function SignupForm() {
  
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    cellphone: "",
    password: "",
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
      
      await CreateProfile({
        uid: firebaseUser.uid,
        name: user.name.trim(),
        surname: user.surname.trim(),
        email: firebaseUser.email,
        cellphone: user.cellphone.trim()
      });
      
      console.log("Signup successful:", firebaseUser.uid);
      
      router.replace("/dashboard");
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

  /*
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
*/

  return (
    <main className="SignUp">
      
      <div className="Heading"><h1>Sign Up</h1></div>
      
      <div className="SignUp_Form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="First Name" onChange={handleChange} value={user.name} required className="Input" />

          <input type="text" name="surname" placeholder="Surname" onChange={handleChange} value={user.surname} required className="Input" />

          <input type="email" name="email" placeholder="Email" onChange={handleChange} value={user.email} required className="Input" />

          <input type="telephone" name="cellphone" placeholder="Cellphone" onChange={handleChange} value={user.cellphone} required className="Input" />

          <input type="password" name="password" placeholder="Password" onChange={handleChange} value={user.password} required className="Input" />

          <div style={{ marginBottom: "20px" }}><button type="submit" className="Button">Create Account</button></div>
        </form>
      </div>
      
      <div><p>Already have an account? Login <span><Link href="/login">here</Link></span></p></div>
      
    </main>
  )
}
