import { clientPromise } from "./mongodb"

export function signIn(credentials, formData) {
  
  const email = formData.get.email;
  const password = formData.get.password;
  
  async function findUser() {
      
      const database = await clientPromise.db("website");
      const users = await database.collection("users");
      
      const user = await users.find();
    
      console.log(user);
  }

}

export function signOut() {
  // Tab to edit
}

export function signUp(credentials, formData) {
  // Tab to edit
}