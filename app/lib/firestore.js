import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export async function GetUser(data) {
  
  try {
    
  } catch {
    
  }
}

export async function CreateUser(data) {
  
  try {
    
    await addDoc(doc(db, "Users", 2), data);
    
    console.log("Successful write to db.");
    
  } catch {
    
    console.log("Error writing to db.");
    
  }
}

export async function CreateEnterprise() {
  
}
