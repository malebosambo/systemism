"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from "@/firebase";
import { CreateUser } from "@/app/lib/firestore";
// import { UserSignUp } from "../../../lib/actions";

export default function SignupForm() {
  
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    cellphone: "",
    password: "",
  });

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
      await CreateUser(formData);
      console.log("✅ User created in Firestore");

      await setPersistence(auth, browserLocalPersistence);

      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("✅ Signup successful:", userCredential.user.email);

      await new Promise(resolve => setTimeout(resolve, 500));

      router.push("/dashboard");
    } catch (error) {
      console.error("Signup error:", error.message);
      setError(error.message || "Signup failed. Please try again.");
      setIsLoading(false);
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
        <form action={handleSubmit}>
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
