"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/app/lib/authContext";
import { UpdateProfile } from "@/app/lib/firestore";

export default function Profile() {
  
  const { user, profile, loading } = useAuth();
  
  const [editUser, setEditUser] = useState({
    name: { profile.name },
    surname: { profile.surname },
    email: { profile.email },
    cellphone: "",
    type: { profile.type },
    address: {
      physical: "",
      postal: ""
    },
    billing: {
      accounNr: null,
      holder: ""
    }
  });
  
  const router = useRouter();
  
  useEffect(() => {

    if (loading === false && !user) {
      router.push("/login");
    }
  
  }, [user, loading, router]);
  
  if (loading) {
    return <div>Loading...</div>
  }
  
  if (!user) {
    return null;
  }
  
  if (!profile) {
    return <div style={{ display: "none" }}>Loading profile...</div>
  }
  
  function handleChange(e) {
    const { name, value } = e.target;
    setEditUser(prev => ({ ...prev, [name]: value }));
  }
  
  const fullName = profile.name + " " + profile.surname;
  
  return (
    <main className="Profile">
      
      <div className="Profile_Menu">
        <div className="Personal_Details">
          <div><button>Basic Details</button></div>
          <div><button>Address Details</button></div>
          <div><button>Billing Details</button></div>
        </div>
      </div>
      
      <div className="Profile_Details">
        <div>
          <div><Image src="" alt="Profile Image" height={100} width={100} /></div>
        
          <div><h1>{fullName}</h1></div>
        </div>
      
        <div>
          <h1>Basic Details</h1>
          <hr />
          <p>Email: {user.email}</p>
          <p>Cellphone: {profile.cellphone}</p>
        </div>
      
        <div>
          <h1>Address Details</h1>
          <hr />
          <p>Physical Address: {profile.address.physical}</p>
          <p>Postal Address: {profile.address.postal}</p>
        </div>
        
        <div>
          <h1>Billing Details</h1>
          <hr />
          <p>Account Holder: {profile.billing.holder}</p>
          <p>Account Nr: {profile.billing.accountNr}</p>
        </div>
      </div>
      
      <div className="Form_ProfileDetails">
        
        <div>
          <div></div>
        </div>
        
        <div className="Form_BasicDetails">
          <form action={UpdateProfile}>
            <div>
              <input type="text" name="fullName" value={fullName} />
            </div>
            
            <div>
              <input type="email" name="email" value={user.email} />
            </div>
            
            <div>
              <input type="telephone" name="cellphone" value={profile.cellphone} onChange={handleChange} required />
            </div>
            
            <div>
              <button type="submit">Save</button>
              <button type="submit">Cancel</button>
            </div>
          </form>
        </div>
        
        <div className="Form_AddressDetails">
          <form action={UpdateProfile}>
            <div><input type="textarea" name="phyAddress" value={profile.address.physical} onChange={handleChange} required /></div>
            
            <div><input type="textarea" name="postalAddress" value={profile.address.postal} onChange={handleChange} /></div>
            
            <div>
              <button type="submit">Save</button>
              <button type="submit">Cancel</button>
            </div>
          </form>
        </div>
        
        <div className="Form_BillingDetails">
          <form action={UpdateProfile}>
            <div><input type="text" name="account holder" value={profile.billing.holder} onChange={handleChange} required /></div>
            
            <div><input type="number" name="accNumber" value={profile.billing.accountNr} onChange={handleChange} required /></div>
            
            <div>
              <button type="submit">Save</button>
              <button type="submit">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
