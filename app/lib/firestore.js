import { collection, setDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function GetUser(data) {

  const user = data;
  const email = user.email;
  console.log({ user });
  
  try {

    const currUser = await getDoc(doc(db, "Users", email));
    console.log({ currUser });
    return currUser;
    
  } catch {

    console.log("Error reading from db.");

  }
}

export async function CreateUser(data) {

  const user = data;
  const email = user.email;
  const password = user.password;
  console.log({ user });
  
  try {
    
    const newUser = await createUserWithEmailAndPassword(email, password);
    console.log("Successful write to db.");
    return newUser;
    
  } catch {
    
    console.log("Error writing to db.");
    
  }
}

export async function CreateEnterprise() {
  
}

