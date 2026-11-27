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
    <div className="DashboardPage">
      
      <div className="DashboardPage__Container">
        
        <div className="DashboardWelcome" aria-labelledby="Dashboard-Title">
          <div>
            <p className="DashboardEyebrow">Your Systemism account</p>
            <h1 id="Dashboard-Title">Welcome, {greetingName}</h1>
            <p className="DashboardWelcome__Summary">Heres a clear starting point for your { profile?.type === "Business" ? "business" : "personal" } journey.</p>
          </div>
            
          <div className="DashboardWelcome__Profile"><span className="DashboardProfileBadge">{ profile?.type || "Member" }</span><Link href="/profile/settings">Account settings <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        
        { !profile ? 
        <div className="DashboardSetup">
          <span aria-hidden="True">!</span>
          <div>
            <h2>Finish setting up your profile</h2>
            <p>Your account is signed in, but profile details could not be found.</p>
            <Link className="DashboardButton DashboardButton—Primary" href="/profile/settings">Open account settings</Link>
          </div>
        </div> : 
        <>
          <div className={ `WalletStatus${walletActivated ? "Is-Active" : "" }` } aria-labelledby="Wallet-Title">
            <div className="WalletStatus__Copy">
              <span className="WalletStatus__Icon" aria-hidden="True">{ walletActivated ? "✓" : "◌" }</span>
              <div>
                <p className="DashboardEyebrow">Account access</p>
                <h2 id="wallet-title">{ walletActivated ? "Your wallet is active" : "Activate your wallet" }</h2>
                <p>{ walletActivated ? "Your wallet status is active. Continue exploring the tools available to your account." : "Activate your wallet to enable account features that depend on it." }</p>
                { walletError && 
                <p className="WalletStatus__error" role="alert">{ walletError }</p>}
              </div>
            
              { !walletActivated && 
              <button className="dashboardButton dashboardButton—primary" disabled={ walletSaving || !profile?.id } onClick={ activateWallet } type="button">{ walletSaving ? "Activating…" : "Activate wallet" }</button> }
            </div>
          </div>
        
          <div className="DashboardSection" aria-labelledby="Shortcuts-Title">
            <div className="DashboardSection__Heading">
              <div>
                <p className="DashboardEyebrow">Your workspace</p>
                <h2 id="Shortcuts-Title">Pick up where you want to go</h2>
              </div>
              <span>{shortcuts.length} areas</span>
            </div>
            <div className="DashboardCards">
              {shortcuts.map((item)=>
              <div className="DashboardCard" key={item.href}>
                <span className="DashboardCard__Mark" aria-hidden="True">{item.mark}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link href={item.href}>{item.action} <span aria-hidden="true">→</span></Link>
              </div>
              )}
            </div>
          </div>
          
          <div className="DashboardAccountStrip" aria-label="Account summary">
            <div>
              <span className="DashboardAccountStrip__Label">Signed in as</span>
              <strong>{ user.email || "Verified account" }</strong>
            </div>
            <div>
              <span className="DashboardAccountStrip__Label">Profile</span>
              <strong>{ profile.type || "Member" }</strong>
            </div>
            <Link href="/profile/settings">Review account details <span aria-hidden="True">↗</span></Link>
          </div>
        </>} 
        
      </div>
      
      <div className="Account_Overview">
        
        <h1>Hello, {profile.name || user.email}</h1>
        
        {!walletActivated ? <div><p>To interact with the features please activate your wallet.</p><div><button onClick={handleOnClick} className="HomeButton HomeButton--Primary">Activate Wallet</button></div></div> : <WalletGateway />}
        
      </div>
      
      <div className={ profileType == "Personal" ? "Personal" : "Hide" }>
        
        <div className="Feature_Disabled">
          
          <div className="ComingSoon">
            <p style={{ color: "white", fontWeight: "bold" }}>Coming soon...</p>
          </div>
          
          <Link href="/investments/catalogue" className="HomeButton HomeButton--Secondary">Browse</Link>
          
          <div>
            <h3>Investments: Portfolio</h3>
          </div>
          
          <hr className="HomeInvestmentCard__Divider" />
          
          <p>You have not added investments into your potfolio.</p>
        
        </div>
        
        <div className="Marketplace_Overview">
          
          <h3>Marketplace: Promotions</h3>
          
          <hr className="HomeInvestmentCard__Divider" />
          
          <p>Promotions are not available in this area.</p>
          
        </div>
        
        <div className={ walletActivated ? "Programs_Overview" : "Feature_Disabled" }>
          
          <Link href="/programs/browse" className="HomeButton HomeButton--Secondary">Browse</Link>
          
          <h3>Programs: Enrolled</h3>
          
          <hr className="HomeInvestmentCard__Divider" />
          
          <p>You are not enrolled in a program.</p>
        
        </div>
        
        <div className="Map_Overview">
          
          <h3>Map: Trending</h3>
          
          <hr className="HomeInvestmentCard__Divider" />
          
          <p>Nothing is trending in your area.</p>
          
        </div>
        
      </div>
      
      <div className={ profileType == "Business" ? "Business" : "Hide" }>
        
        <div className="Feature_Disabled">
          
          <div className="ComingSoon">
            <p style={{ color: "white", fontWeight: "bold" }}>Coming soon...</p>
          </div>
          
          <Link href="/funds/request" className="HomeButton HomeButton--Secondary">Request</Link>
          
          <h3>Funds: Active</h3>
          
          <hr className="HomeInvestmentCard__Divider" />
          
          <p>Request funding for your business.</p>
        
        </div>
      
        <div className="Inventory_Overview">
          
          <Link href="/inventory/add" className="HomeButton HomeButton--Secondary">Add</Link>
          
          <h3>Inventory: Latest Statistics</h3>
          
          <hr className="HomeInvestmentCard__Divider" />
          
          <p>Add inventory to the marketplace.</p>
        
        </div>
      
        <div className="Enterprise_Overview">
          
          <Link href="/enterprise/add" className="HomeButton HomeButton--Secondary">Add</Link>
          
          <h3>Enterprises: Verified</h3>
          
          <hr className="HomeInvestmentCard__Divider" />
          
          <p>Add your enterprise for verification.</p>
        
        </div>
        
        <div className="Hub_Overview">
          
          <h3>Hub: Tasks</h3>
          
          <hr className="HomeInvestmentCard__Divider" />
          
          <p>Start your entrepreneurship journey.</p>
          
        </div>
        
        <div className="Listings_Overview">
          
          <Link href="/listing/add" className="HomeButton HomeButton--Secondary">Link</Link>
          
          <h3>Listings: Approved</h3>
          
          <hr className="HomeInvestmentCard__Divider" />
          
          <p>Submit a listing for approval.</p>
          
        </div>
    
      </div>
      
    </div>
  );
}
