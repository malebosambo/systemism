"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { useAuth } from "@/app/lib/authContext";

export default function Profile() {
  
  const { user, profile, loading } = useAuth();
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
  
  const fullName = profile.name + " " + profile.surname;
  
  return (
    <main>
      
      <div>
        <div className="Personal_Details">
          <div><button>Basic Details</button></div>
          <div><button>Contact Details</button></div>
          <div><button>Address Details</button></div>
        </div>
        
        <div className="Banking_Details">
          <div><button>Bank Accounts</button></div>
          <div><button>Transactions</button></div>
        </div>
        
        <div></div>
        <div></div>
      </div>
      
      <div>
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
      </div>
      
      <div className="Form_ProfileDetails">
        
        <div>
          <div></div>
        </div>
        
        <div className="Form_BasicDetails">
          <form action="">
            <div>
              <input type="text" name="fullName" value={fullName} />
            </div>
            
            <div>
              <input type="email" name="email" value={user.email} />
            </div>
            
            <div>
              <input type="telephone" name="cellphone" value={profile.cellphone} onChange={} required />
            </div>
            
            <div>
              <button type="submit">Save</button>
              <button type="submit">Cancel</button>
            </div>
          </form>
        </div>
        
        <div className="Form_AddressDetails">
          <form action="">
            <div><input type="textarea" name="phyAddress" value={profile.address.physical} required /></div>
            
            <div><input type="textarea" name="postalAddress" value={profile.address.postal} /></div>
            
            <div>
              <button type="submit">Save</button>
              <button type="submit">Cancel</button>
            </div>
          </form>
        </div>
        
        <div className="Form_BankingDetails">
          <form action="">
            <div><input type="text" name="account holder" value={profile.banking.holder} onChange={} required /></div>
            
            <div><input type="number" name="accNumber" value={profile.banking.account} required /></div>
            
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
