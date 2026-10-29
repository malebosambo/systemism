"use client";

import { useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";
import { useRouter, redirect } from "next/navigation";
import { useAuth } from "@/app/lib/authContext";
import { UpdateProfile } from "@/app/lib/firestore";
import WalletGateway from "@/app/components/walletGateway";

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
    return <div style={{ display: "none" }}>Loading profile...</div>
  }
  
  const handleOnClick = async () => {
    UpdateProfile({ walletActivated: true}, profile.id);
    redirect("/dashboard");
  }
  
  const profileType = profile.type;
  const walletActivated = profile.walletActivated;

  return (
    <div className="Dashboard">
      
      <div className="Account_Overview">
        
        <div><h1>Hello, {profile.name || user.email}</h1></div>
        
        {!walletActivated ? <div><p>To interact with the features please activate your wallet.</p><div><button onClick={handleOnClick} className="ActivateButton">Activate Wallet</button></div></div> : <WalletGateway />}
        
      </div>
      
      <div className={ profileType == "Personal" ? "Personal" : "Hide" }>
        
        <div className={ walletActivated ? "Investments_Overview" : "Feature_Disabled" }>
          
          <div><Link href="/investments/catalogue"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /><p>Browse</p></Link></div>
          
          <div><h3>Investments: Portfolio</h3></div>
          
          <div><p>You have not added investments into your potfolio.</p></div>
        
        </div>
        
        <div className="Marketplace_Overview">
          
          <div><h3>Marketplace: Promotions</h3></div>
          
          <div><p>Promotions are not available in this area.</p></div>
          
        </div>
        
        <div className={ walletActivated ? "Programs_Overview" : "Feature_Disabled" }>
          
          <div><Link href="/programs/browse"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /></Link></div>
          
          <div><h3>Programs: Enrolled</h3></div>
          
          <div><p>You are not enrolled in a program.</p></div>
        
        </div>
        
        <div className="Directory_Overview">
          
          <div><h3>Providers: Trending</h3></div>
          
          <div><p>Providers have not listed in this area.</p></div>
          
        </div>
        
      </div>
      
      <div className={ profileType == "Business" ? "Business" : "Hide" }>
        
        <div className="Funds_Overview">
          
          <div><Link href="/funds/request"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /></Link></div>
          
          <div><h3>Funds: Active</h3></div>
          
          <div><p>Request funding for your enterprise.</p></div>
        
        </div>
      
        <div className="Inventory_Overview">
          
          <div><Link href="/inventory/add"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /></Link></div>
          
          <div><h3>Inventory: Latest Statistics</h3></div>
          
          <div><p>Add inventory to the marketplace.</p></div>
        
        </div>
      
        <div className="Enterprise_Overview">
          
          <div><Link href="/enterprise/add"><Image src="/icons/circled-add.png" alt="Add Icon" height={40} width={40} /></Link></div>
          
          <div><h3>Enterprises: Approved</h3></div>
          
          <div><p>Add your enterprise for approval.</p></div>
        
        </div>
        
        <div className="Hub_Overview">
          
          <div><h3>Hub: Tasks</h3></div>
          
          <div><p>Start your entrepreneurship journey.</p></div>
          
        </div>
        
        <div className="Listings_Overview">
          
          <div><h3>Listings: Approved</h3></div>
          
          <div><p>Submit a listing for approval.</p></div>
          
        </div>
    
      </div>
    </div>
  );
}
