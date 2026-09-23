import { collection, setDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export async function GetProfile(data) {
  
  const profile = await getDoc(doc(db, "Profiles", data));
  
  if (!profile.exists()) {
    return null;
  }
  
  return profile.data();
  
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

export async function UpdateProfile(data) {
  
  const profile = data;
  console.log(profile);
  
  const updatedProfile = await updateDoc(doc(db, "Profiles", profile.uid), profile);
  console.log("Successful write to db.", updatedProfile);
  
  return updatedProfile;
  
}