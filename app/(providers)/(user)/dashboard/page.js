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
        <div><h3>Hello, {profile.name || user.email}</h3></div>
        <div><h4>Balance: R0</h4></div>
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
      
      <div className={ profileType == "Consumer" ? "Consumer" : "Hide" }>
        <div className="Investments_Overview">
          
          <div><Link href="/investments/catalogue"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /></Link></div>
          
          <div><h4>Investments: Active</h4></div>
          <div><p>No active investments.</p></div>
        
        </div>
        
        <div className="Shop_Overview">
          
          <div><h4>Shop: Latest Sales</h4></div>
          
        </div>
        
        <div className="Directory_Overview">
          
          <div><h4>Directory: New Listings</h4></div>
          
        </div>
      </div>
      
      <div className={ profileType == "Director" ? "Director" : "Hide" }>
        <div className="Funds_Overview">
          
          <div><Link href="/funds/request"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /></Link></div>
          
          <div><h4>Funds: Active</h4></div>
          
          <div><p>Nothing to display.</p></div>
        
        </div>
      
        <div className="Inventory_Overview">
          
          <div><Link href="/inventory/add"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /></Link></div>
          
          <div><h4>Inventory: Latest Statistics</h4></div>
          
          <div><p>No inventory available.</p></div>
        
        </div>
      
        <div className="Programs_Overview">
          
          <div><Link href="/programs/browse"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /></Link></div>
          
          <div><h4>Programs: Enrolled</h4></div>
          
          <div><p>No programs enrolled.</p></div>
        
        </div>
      
        <div className="Listings_Overview">
          
          <div><Link href="/listings/add"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /></Link></div>
          
          <div><h4>Listings: Approved</h4></div>
          
          <div><p>No listings available.</p></div>
        
        </div>
    
      </div>
    </div>
  );
}
