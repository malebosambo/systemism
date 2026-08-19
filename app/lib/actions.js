"use server";

import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import { CreateUser, GetUser } from "./firestore";
// import { hash, compare } from "bcrypt";
 
export async function UserLogin(formData) {
  
  const user = {
    email: formData.get("email"),
    password: formData.get("password")
  }
  
  try {
    
    const currUser = await GetUser(user.email);
    console.log(currUser);
    
    // const checkPassword = await compare(user?.password || "", currUser.password);
    
    /* if (!currUser && !checkPassword) {
      return null;
    } */
    
    // await signIn("credentials", { redirectTo: "/dashboard" });
    
    redirect("/dashboard");
    
  } catch (error) {
    
    console.log("Error logging in user.");
    
  }

  // redirect("/dashboard");

}

export async function UserSignUp(formData) {
  
  const user = {
    name: formData.get("name"),
    surname: formData.get("surname"),
    email: formData.get("email"),
    cellphone: formData.get("cellphone"),
    password: formData.get("password"),
  };
  
  const dbUser = await GetUser(user.email);

  try {
    
    if (dbUser === null && user.email === dbUser.email) {
      return null;
    }
   
    const newUser = await CreateUser(user);
    console.log(newUser)
   
  } catch {
   
    console.log("Error creating user.");
  
  }

  redirect("/login");
}

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
