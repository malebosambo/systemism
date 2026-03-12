import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export async function GetUser(data) {

  const user = data;
  const email = user.email;
  console.log({ user });
  
  try {

    const currUser = await doc(db, "Users", email);
    console.log({ currUser });
    return currUser;
    
  } catch {

    console.log("Error reading from db.");

  }
}

export async function CreateUser(data) {

  const user = data;
  const email = user.email;
  console.log({ user });
  
  try {
    
    const newUser = await addDoc(doc(db, "Users", email), user);
    console.log("Successful write to db.");
    return newUser;
    
  } catch {
    
    console.log("Error writing to db.");
    
  }
}

export async function CreateEnterprise() {
  
}

