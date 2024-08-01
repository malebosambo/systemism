import { clientPromise } from "./mongodb"
import { useRouter } from "next/router"

export function signIn(credentials, formData) {
  
  const router = useRouter();
  
  const email = formData.get.email;
  const password = formData.get.password;
  
  async function findUser() {
    
      
      const database = clientPromise.db("administration");
      const admins = database.collection("administration");
      
      const admin = await admins.find();
    
      console.log(admin);
  }
  

}

export function signOut() {
  // Tab to edit
}

export function signUp(credentials, formData) {
  // Tab to edit
}