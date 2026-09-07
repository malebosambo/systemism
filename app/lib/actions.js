"use server";

import { redirect } from "next/navigation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserLocalPersistence, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { CreateUser, GetUser } from "./firestore";
 
export async function UserLogin(formData) {
  
  const user = {
    email: formData.get("email"),
    password: formData.get("password")
  }
  
  try {
    
    await setPersistence(auth, browserLocalPersistence);
    const currUser = await GetUser(user);
    console.log(currUser);
    
    await signInWithEmailAndPassword(auth, user.email, user.password);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
  } catch (error), {
    
    console.error("Error logging in user.", error.message);
    throw new Error(error.message);
    
  }
  
  redirect("/dashboard");

}

export async function UserSignUp(formData) {
  
  const user = {
    name: formData.get("name"),
    surname: formData.get("surname"),
    email: formData.get("email"),
    cellphone: formData.get("cellphone"),
    password: formData.get("password"),
  };
  
  const dbUser = await GetUser(user);

  try {
    
    if (user.email === dbUser.email) {
      throw new Error("User already exists.");
    }
   
    const newUser = await CreateUser(user);
    console.log(newUser)
    
    await setPersistence(auth, browserLocalPersistence);
   
    await createUserWithEmailAndPassword(auth, user.email, user.password);
   
  } catch (error) {
   
    console.error("Error creating user.", error.message);
    throw new Error(error.message);
  
  }

  redirect("/dashboard");
}

export async function UserLogout() {
  
  try {
    
    await signOut(auth);
    console.log("Successfully logged out.");
    
  } catch (error) {
    
    console.error("Error logging out", error.message);
    
  }
  
  redirect("/login");

}
/*
export async function ViewUser() {

}

export async function UpdateUser(formData) {

}

export async function ViewProfile() {
  
}

export async function UpdateProfile(formData) {
  
}

export async function AddEnterprise(formData) {
  
}

export async function ViewSMME() {
  
}

export async function UpdateSMME(formData) {
  
}
*/