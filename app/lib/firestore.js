import { collection, setDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export async function GetProfile(data) {

  const profile = data;
  const email = profile.email;
  console.log(profile);
  
  try {

    const currProfile = await getDoc(doc(db, "Profiles", email));
    
    if (currProfile.exists()) {
      
      const dbProfile = currProfile.data();
      console.log("DB profile found", dbProfile);
      return dbProfile;
      
    } else {
      
      const emptyProfile = {
        name: "",
        surname: "",
        email: "",
        cellphone: "",
      }
      
      console.log("DB profile not found.");
      return emptyProfile;
      
    }
    
  } catch {

    console.log("Error reading from db.");

  }
  
}

export async function CreateProfile(data) {

  const profile = data;
  console.log(profile);
  
  if (!profile.uid) {
    throw new Error("Cannot create Firestore profile without a Firebase UID.");
  }
  
  const newProfile = await setDoc(doc(db, "Profiles", profile.uid), profile);
  console.log("Successful write to db.", newProfile);
  
  return newProfile;

}
