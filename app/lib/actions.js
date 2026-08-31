"use server";

import { redirect } from "next/navigation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { CreateUser, GetUser } from "./firestore";
// import { hash, compare } from "bcrypt";
import { signIn } from "../../auth";
 
export async function UserLogin(formData) {
  
  const user = {
    email: formData.get("email"),
    password: formData.get("password")
  }
  
  try {
    
    const currUser = await GetUser(user);
    console.log(currUser);
    
    await signInWithEmailAndPassword(auth, user.email, user.password);
    
  } catch {
    
    console.log("Error logging in user.");
    return null;
    
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
      return null;
    }
   
    const newUser = await CreateUser(user);
    console.log(newUser)
   
    await createUserWithEmailAndPassword(auth, user.email, user.password);
   
  } catch {
   
    console.log("Error creating user.");
    return null;
  
  }

  redirect("/login");
}
/*
export async function UserLogout() {
  
  await signOut({ redirectTo: "/login" });

}

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