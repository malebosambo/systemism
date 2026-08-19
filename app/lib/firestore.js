import { collection, setDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export async function GetUser(data) {

  const user = data;
  const email = user.email;
  console.log(user);
  
  try {

    const currUser = await getDoc(doc(db, "Users", email));
    
    if (currUser.exists()) {
      
      const dbUser = currUser.data();
      console.log("DB user found", currUser);
      return dbUser;
      
    } else {
      
      console.log("DB user not found.");
      return null;
      
    }
    
  } catch() {

    console.log("Error reading from db.");

  }
  
}

export async function CreateUser(data) {

  const user = data;
  const email = user.email;
  console.log({ user });
  
  try {
    
    const newUser = await setDoc(doc(db, "Users", email), user);
    console.log("Successful write to db.", user);
    return newUser;
    
  } catch {
    
    console.log("Error writing to db.");
    
  }
}

export async function CreateEnterprise() {
  
}

