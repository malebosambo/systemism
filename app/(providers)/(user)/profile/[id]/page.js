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
  
  const fullName = profile.name + profile.surname;
  
  return (
    <main>
      
      <div>
        <div>
          <div><Image src="" alt="Profile Image" height={100} width={100} /></div>
        
          <div><h1>{fullName}</h1></div>
        </div>
      
        <div>
          <h1>Personal Details</h1>
          <hr />
          <p>Email: {user.email}</p>
          <p>Cellphone: {profile.cellphone}</p>
        </div>
      
        <div>
          <h1>Address Details</h1>
          <hr />
          <p>Physical Address:</p>
          <p>Postal Address:</p>
        </div>
      
        <div>
          <h1>Banking Details</h1>
        </div>
      </div>
      
      <div className="Profile_Form">
        
        <div>
          <div></div>
          <div><h1></h1></div>
          <div></div>
        </div>
        
        <div>
          <form action="">
            <div>
              <input type="text" name="fullName" />
            </div>
            
            <div>
              <input type="email" name="email" />
            </div>
            
            <div>
              <input type="telephone" name="cellphone" />
            </div>
            
            <div>
              <button type="submit">Save</button>
              <button type="submit">Cancel</button>
            </div>
          </form>
        </div>
        
        <div>
          <form action="">
            <div><input type="textarea" name="phyAddress" required /></div>
            
            <div><input type="textarea" name="postalAddress" /></div>
            
            <div>
              <button type="submit">Save</button>
              <button type="submit">Cancel</button>
            </div>
          </form>
        </div>
        
        <div>
          <form action="">
            <div><input type="number" name="accNumber" required /></div>
            
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
