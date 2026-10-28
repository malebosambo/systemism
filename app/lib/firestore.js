import { collection, setDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export async function GetProfile(data) {
  
  const id = data.uid;
  
  const profile = await getDoc(doc(db, "Profiles", id));
  
  if (!profile.exists()) {
    return null;
  }
  
  return profile.data();
  
}

export async function CreateProfile(data) {

  const profile = data;
  console.log(profile);
  
  if (!profile.id) {
    throw new Error("Cannot create Firestore profile without a Firebase UID.");
  }
  
  const docRef = doc(db, "Profiles", profile.id);
  
  const newProfile = await setDoc(docRef, profile);
  console.log("Successful write to db.", newProfile);
  
  return newProfile;

}

export async function UpdateProfile(data, id) {
  
  const profile = data;
  console.log(profile);
  const docRef = doc(db, "Profiles", id);
  
  const updatedProfile = await updateDoc(docRef, profile);
  console.log("Successful write to db.", updatedProfile);
  
  return updatedProfile;
  
}

export async function CreateInvestment(data) {
 
  const investment = data;
  const name = investment.name;
  console.log(investment);
  
  const newInvestment = await setDoc(doc(db, "Profiles", id, "Investments", name), investment);
  console.log("Successful write to db.", newInvestment);
  
  return investment;
  
}

export async function CreateEnterprise(data, id) {
  
  const enterprise = data;
  const name = enterprise.name;
  console.log(enterprise);
  
  const newEnterprise = await setDoc(doc(db, "Profiles", id, "Enterprises", name), enterprise);
  console.log("Successful write to db", newEnterprise);
  
  return newEnterprise;
  
}

export function GetEnterprise(data) {
  
  const name = data.name;
  
  const enterprise = getDoc(doc(db, "Enterprises", name));
  
  if (!enterprise.exists()) {
    return null;
  }
  
  return enterprise.data;
}