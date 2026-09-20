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
      router.push("/login");
    }
  
  }, [user, loading, router]);
  
  if (loading) {
    return <div>Loading...</div>
  }
  
  if (!user) {
    return null;
  }

  return (
    <div className="Dashboard">
      
      <div className="Account_Overview">
        <div><h3>Hello, {profile.name || user.email}</h3></div>
        <div><h4>Balance: R0</h4></div>
        <div className="Wallet_Buttons">
          <div>
            <div><Link href="/account/deposit"><Image src="/icons/circled-add.png" alt="Add Icon" height={35} width={35} /></Link></div>
            <div><p>Deposit</p></div>
          </div>
          <div>
            <div><Link href="/account/withdraw"><Image src="/icons/circled-minus.png" alt="Minus Icon" height={35} width={35} /></Link></div>
            <div><p>Withdraw</p></div>
          </div>
        </div>
      </div>
      
      <div className="Consumer">
        <div className="Investments_Overview">
          <div><Link href="/investments/add"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /></Link></div>
          
          <div><h4>Investments: Active</h4></div>
          <div><p>Nothing to display.</p></div>
        
          <div><Link href="/investments">View</Link></div>
        </div>
        
        <div className="Market_Overview">
          <div><h4>Shop: Cart</h4></div>
          <div><p>No invoices available.</p></div>
        
          <div><Link href="/market/invoices">View</Link></div>
        </div>
      </div>
      
      <div className="Director">
        <div className="Funds_Overview">
          <div><h4>Funds: Active</h4></div>
          <div><p>Nothing to display.</p></div>
        
          <div><Link href="/funds/active">View</Link></div>
        </div>
      
        <div className="Inventory_Overview">
          <div><h4>Inventory: Levels</h4></div>
          <div><p>No inventory available.</p></div>
        
          <div><Link href="/marketplace/inventory">View</Link></div>
        </div>
      
        <div className="Programs_Overview">
          <div><h4>Programs: Enrolled</h4></div>
          <div><p>No programs enrolled.</p></div>
        
          <div><Link href="/programs/enrolled">View</Link></div>
        </div>
      
        <div className="Listings_Overview">
          <div><h4>Listings: Approved</h4></div>
          <div><p>No listings available.</p></div>
        
          <div><Link href="/listings/approved"></Link></div>
        </div>
    
      </div>
    </div>
  );
}
