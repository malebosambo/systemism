import { collection, setDoc, getDoc, updateDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export async function ReadProfile(data) {
  
  const id = data.uid;
  console.log(data);
  
  const profile = await getDoc(doc(db, "Profiles", id));
  
  if (!profile.exists()) {
    return null;
  }
  
  console.log("Successful read from db: ", profile);
  
  return profile.data();
  
}

export async function WriteProfile(data) {

  const profile = data;
  console.log(profile);
  
  if (!profile.id) {
    throw new Error("Cannot create Firestore profile without a Firebase UID.");
  }
  
  const docRef = doc(db, "Profiles", profile.id);
  
  const newProfile = await setDoc(docRef, profile);

  console.log("Successful write to db: ", newProfile);
  
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

export async function WriteInvestment(data, id) {
 
  const investment = data;
  const name = investment.name;
  console.log(investment);
  
  const newInvestment = await setDoc(doc(db, "Profiles", id, "Investments", name), investment);
  
  console.log("Successful write to db.", newInvestment);
  
  return investment;
  
}

export async function GetInvestment() {
  
}

export async function GetInvestments() {
  
}

export async function WriteEnterprise(data, id) {
  
  const enterprise = data;
  const name = enterprise.name;
  console.log(enterprise);
  
  const newEnterprise = await setDoc(doc(db, "Profiles", id, "Enterprises", name), enterprise);
  
  console.log("Successful write to db: ", newEnterprise);
  
  return newEnterprise;
  
}

export async function ReadEnterprise(data) {
  
  const name = data;
  
  const enterprise = await getDoc(doc(db, "Enterprises", name));
  
  if (!enterprise.exists()) {
    return null;
  }
  
  return enterprise.data();
  
}

export async function ReadEnterprises(id) {
  
  if (id === null) {
    return [];
  }
  
  const enterprises = await getDocs(collection(db("Profiles", id, "Enterprises")));

  console.log("Successful read from db: ", enterprises);
  
  return enterprises.docs;
  
}

export async function WriteInventory(data, id) {
  
  const inventory = data;
  const name = inventory.name;
  console.log(inventory);
  
  const newInventory = await setDoc(doc(db, "Profiles", id, "Inventory", name), inventory);
  
  console.log("Successful write to db", newInventory);
  
  return newInventory;
  
}

export async function ReadInventory(data) {
  
  const name = data;
  
  const inventory = await getDoc(doc(db, "Inventory", name));
  
  if (!inventory.exists) {
    return null;
  }
  
  console.log("Successful read from db: ", inventory);
  
  return inventory.data();
  
}

export async function ReadInventories(id) {
  
  if (id === null) {
    return null;
  }
  
  const inventories = await setDoc(db("Profiles", id, "Inventories"));
  
  console.log("Successful read from db:", inventories);
  
  return inventories.docs;
  
}

export async function WriteListing(data) {
  
  const listing = data;
  const name = listing.name;
  console.log(listing);
  
  const newListing = await setDoc(db("Profiles", id, "Listings", name), listing);
  
  console.log("Successful write to db:", newListing);
  
  return newListing;
  
}

export async function ReadListing(data) {
  
  const name = data;
  
  const listing = await getDoc(db("Listings", name));
  
  if (!inventory.exists) {
    return null;
  }
  
  console.log("Successful read from db: ", listing);
  
  return listing.data();
  
}

export async function ReadListings(id) {
  
  if (id === "null") {
    return null;
  }
  
  const listings = await getDocs(db("Profiles", id, "Listings"));
  
  console.log("Successful read from db:", listings);
  
  return listings.docs;
  
}