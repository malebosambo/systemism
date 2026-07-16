"use server";

import { redirect } from "next/navigation";
import { signIn, signOut } from "../../auth";
import { CreateUser, GetUser } from "./firestore";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
 
export async function UserLogin(formData) {
  
  const user = {
    email: formData.get("email"),
    password: formData.get("password")
  }
  
  try {

    const currUser = await GetUser({ user });
    console.log(currUser);
    
    const checkPassword = await compare(user?.password || "", currUser.password);
    
    if (!currUser && !checkPassword) {
      return null;
    }
    
  } catch {
    
  }

}

export async function UserSignUp(formData) {
  
  const user = {
    name: formData.get("name"),
    surname: formData.get("surname"),
    email: formData.get("email"),
    cellphone: formData.get("cellphone"),
    password: formData.get("password"),
  }
   
    const dbUser = await GetUser(user.email);

  try {
    
    if (dbUser === null && user.email === dbUser.email) {
      return null;
    }
   
  } catch {
   
    console.log("Error creating user.");
  
  }

}

export async function UserLogout() {
  
  await signOut(auth);

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
