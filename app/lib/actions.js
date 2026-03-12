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

    await GetUser(user);
    
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

  redirect("/");

}

export async function UserSignUp(formData) {
  
  const user = {
    firstname: formData.get("firstName"),
    surname: formData.get("surname"),
    email: formData.get("email"),
    cellphone: formData.get("cellphone"),
    password: formData.get("password"),
    confirmPass: formData.get("confirmPassword")
  }

  try {
   
    await CreateUser(user);
   
  } catch {
   
    console.log("Error creating user.");
  
  }

  redirect("/");
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
