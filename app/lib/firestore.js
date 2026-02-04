import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "./../../firebase.js";

export async function getUser(data) {
  
  try {
    
  } catch {
    
  }
}

export async function createUser(data) {
  
  try {
    await setDoc(doc(db, "users", 2), data);
    console.log("Successful write to db.");
  } catch {
    console.log("Error writing to db.");
  }
}
