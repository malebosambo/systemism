"use client";

import { useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/authContext";

export default function Dashboard() {
  
  const { user, profile, loading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {

    if (loading === false && !user) {
      router.replace("/login");
    }
  
  }, [user, loading, router]);
  
  if (loading) {
    return <div>Loading...</div>
  }
  
  if (!user) {
    return null;
  }
  
  if (!profile) {
    return <div>Loading profile...</div>
  }
  
  const profileType = profile.type;

  return (
    <div className="Dashboard">
      
      <div className="Account_Overview">
        <div><h1>Hello, {profile.name || user.email}</h1></div>
        <div><h2>Balance: R0</h2></div>
        <div className="Wallet_Buttons">
          <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}><Link href="/account/deposit"><Image src="/icons/circled-add.png" alt="Add Icon" height={35} width={35} /></Link></div>
            <div style={{ textAlign: "center" }}><p>Deposit</p></div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}><Link href="/account/withdraw"><Image src="/icons/circled-minus.png" alt="Minus Icon" height={35} width={35} /></Link></div>
            <div style={{ textAlign: "center" }}><p>Withdraw</p></div>
          </div>
        </div>
      </div>
      
      <div className={ profileType == "Personal" ? "Personal" : "Hide" }>
        <div className="Investments_Overview">
          
          <div><Link href="/investments/catalogue"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /></Link></div>
          
          <div><h3>Investments: Active</h3></div>
          
          <div><p>No active investments.</p></div>
        
        </div>
        
        <div className="Store_Overview">
          
          <div><h3>Store: Local Sales</h3></div>
          
          <div><p>No local sales available.</p></div>
          
        </div>
        
        <div className="Programs_Overview">
          
          <div><Link href="/programs/browse"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /></Link></div>
          
          <div><h3>Programs: Enrolled</h3></div>
          
          <div><p>No programs enrolled yet.</p></div>
        
        </div>
        
        <div className="Listings_Overview">
          
          <div><h3>Listings: Top Providers</h3></div>
          
          <div><p>No listings in the area.</p></div>
          
        </div>
      </div>
      
      <div className={ profileType == "Business" ? "Business" : "Hide" }>
        <div className="Funds_Overview">
          
          <div><Link href="/funds/request"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /></Link></div>
          
          <div><h3>Funds: Active</h3></div>
          
          <div><p>No funds have been activated.</p></div>
        
        </div>
      
        <div className="Inventory_Overview">
          
          <div><Link href="/inventory/add"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /></Link></div>
          
          <div><h3>Inventory: Latest Statistics</h3></div>
          
          <div><p>No inventory has been added.</p></div>
        
        </div>
      
        <div className="Enterprise_Overview">
          
          <div><Link href="/enterprise/add"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /></Link></div>
          
          <div><h3>Enterprises: Approved</h3></div>
          
          <div><p>You are not a director of an enterprise.</p></div>
        
        </div>
        
        <div className="Hub_Overview">
          
          <div><h3>Hub: Tasks</h3></div>
          
          <div><p>No tasks to be completed.</p></div>
        </div>
    
      </div>
    </div>
  );
}
