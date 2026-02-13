"use server";
 
import { signIn, signOut, signUp } from '../../auth'
 
export async function UserLogin(formData) {
  
  try {
    await signIn(formData)
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}

export async function userSignUp(formData) {

 try {
   const user = {
    firstname: formData.get("firstName"),
    surname: formData.get("surname"),
    email: formData.get("email"),
    cellphone: formData.get("cellphone"),
    password: formData.get("password"),
    confirmPass: formData.get("confirmPassword")
   }
   await signUp(user);
 } catch {
    console.log("Error creating user.");
 }
}

export async function UserLogout() {
  
}

export async function ViewUser() {
}

export async function UpdateUser(formData) {

}

export async function ViewProfile() {
  
}

export async function UpdateProfile(formData) {
  
}

export async function AddSMME(formData) {
  
}

export async function ViewSMME() {
  
}

export async function UpdateSMME(formData) {
  
}
