import { collection, setDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export async function GetProfile(data) {
  
  const type = data.type;
  
  const profile = await getDoc(doc(db, type, data));
  
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
  
  const docRef = doc(db, "Profiles", type, profile.uid);
  const type = profile.type;
  
  const newProfile = await setDoc(docRef, profile);
  console.log("Successful write to db.", newProfile);
  
  return newProfile;

}

export async function UpdateProfile(data) {
  
  const profile = data;
  console.log(profile);
  const type = profile.type;
  const docRef = doc(db, "Profiles", type, profile.uid);
  
  const updatedProfile = await updateDoc(docRef, profile);
  console.log("Successful write to db.", updatedProfile);
  
  return updatedProfile;
  
}

export async function AddEnterprise(data) {
  
  const profile = await GetProfile();
  const oldEnterprise = profile.enterprise;
  
  const enterprise = data;
  console.log(enterprise);
  
  const newEnterprise = await updateDoc(doc(db, "Profiles", profile.uid), { "enterprise": {enterprise},
  });
  
  return newEnterprise;
  
}
