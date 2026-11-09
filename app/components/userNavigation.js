"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useAuth } from "@/app/lib/authContext";
import Link from "next/link";
import Image from "next/image";

export default function UserNavigation() {
  
  const { user, profile, loading } = useAuth();
  
  const router = useRouter();
  
  async function handleLogout() {
    try {
      await signOut(auth);
      
      router.replace("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  }
  
  if (!profile) {
    return <div style={{ display: "none" }}>Loading...</div>
  }
  
  const profileType = profile.type;
  
  return (
    <>
      <div className="UserNavigation">
        <div className="Menu_Nav_Link"><Link href="/dashboard">Dashboard</Link></div>
      
        <div className={ profileType == "Personal" ? "" : "Hide" }>
          <div className="Menu_Nav_Link"><Link href="/investments">Investments</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/market">Market</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/programs">Programs</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/map">Map</Link></div>
        </div>
      
        <div className={ profileType == "Business" ? "" : "Hide" }>
          <div className="Menu_Nav_Link"><Link href="/enterprise">Enterprises</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/funds">Funds</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/inventory">Inventory</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/hub">Hub</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/listings">Listings</Link></div>
        </div>
      
        <div className="Menu_Nav_Link"><Link href="/profile/settings">Settings</Link></div>
      
        <div><button type="button" onClick={handleLogout} className="Button">Logout</button></div>
      </div>  
    </>
  )
}