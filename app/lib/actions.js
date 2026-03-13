"use server";

import { redirect } from "next/navigation";
import { signIn, signOut } from "../../auth";
import { CreateUser, GetUser } from "./firestore";
 
export async function UserLogin(formData) {
  
  const user = {
    email: formData.get("email"),
    password: formData.get("password")
  }
  
  try {

    const currUser = await GetUser({ user });
    console.log(currUser);
    
    // await signIn("credentials", { redirectTo: "/dashboard" });
    
  } catch (error) {
    
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    
    throw error;
    
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
  }

  try {
   
    const newUser = await CreateUser(user);
    console.log(newUser)
   
  } catch {
   
    console.log("Error creating user.");
  
  }

  redirect("/login");
}

export async function UserLogout() {
  
  await signOut({ redirectTo: "/" });

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
