import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export async function GetUser(data) {

  const user = data;
  const username = user.username;
  console.log({user});
  
  try {

    const users = await doc(db, "Users", username);
    console.log({users});
    return users;
    
  } catch {

    console.log("Error reading from db.");

  }
}

export async function CreateUser(data) {

  const user = data;
  const username = user.username;
  console.log({user});
  
  try {
    
    const newUser = await addDoc(doc(db, "Users", username), user);
    console.log("Successful write to db.");
    return newUser;
    
  } catch {
    
    console.log("Error writing to db.");
    
  }
}

export async function CreateEnterprise() {
  
}

