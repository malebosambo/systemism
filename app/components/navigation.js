"use client";

import { useState } from "react";
import Link from 'next/link'

export default function Navigation() {
  
  const [ personalSubMenu, setPersonalSubMenu ] = useState(false);
  
  const [ businessSubMenu, setBusinessSubMenu ] = useState(false);
  
  const showPersonalSubMenu = () => {
    setPersonalSubMenu(!personalSubMenu);
  }
  
  const showBusinessSubMenu = () => {
    setBusinessSubMenu(!businessSubMenu);
  }
  
  return (
    <div className="RootNavigation" aria-label="Main navigation">
      
      <Link className="RootNav__Link" href="/">Home</Link>
      
      <div>
        <div className="Menu_Nav_Link"><Link href="/personal">Personal</Link></div>
        
        <div className={ personalSubMenu ? "ShowSubMenu" : "Hide" }>
          <div className="Menu_Nav_Link"><Link href="/investing">Investing</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/marketplace">Marketplace</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/directory">Directory</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/academy">Academy</Link></div>
        </div>
      </div>
      
      <div>
        <Link href="/business">Business</Link>
        
        <div className={ businessSubMenu ? "ShowSubMenu" : "Hide" }>
          <div className="Menu_Nav_Link"><Link href="/funding">Funding</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/vendor">Vendor</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/listing">Listing</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/accelerator">Accelerator</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/complaince">Compliance</Link></div>
        </div>
      </div>
      
      <Link href="/contact-us" className="RootNav__Link">Contact Us</Link>
      
      <div className="RootNav__Actions">
        <Link href="/login" className="RootNav__Login">Login</Link>
        
        <Link href="/signup" className="RootNav_Signup">Sign Up</Link> 
      </div>
    </div>  
  );
}
