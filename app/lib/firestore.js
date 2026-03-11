import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export async function GetUser(data) {

  const user = data;
  console.log({user});
  
  try {

    const users = await doc(db, "Users");
    console.log({users});
    return users;
    
  } catch {

    console.log("Error reading from db.");

  }
}

export async function CreateUser(data) {

  const user = data;
  console.log({user});
  
  try {
    
    const newUser = await addDoc(doc(db, "Users", 2), data);
    console.log("Successful write to db.");
    
  } catch {
    
    console.log("Error writing to db.");
    
  }
}

export async function CreateEnterprise() {
  
}

