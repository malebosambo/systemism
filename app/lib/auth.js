import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "./../../firebase.js";

export async function signIn() {

}

export async function signUp(data) {
  try {
    await setDoc(doc(db, "users", 2), data);
    console.log("Successful write to db.");
  } catch {
    console.log("Error writing to db.");
  }

}

export async function signOut() {

}
