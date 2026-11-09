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
    <div className="Navigation">
      
      <div className="Menu_Nav_Link"><Link href="/">Home</Link></div>
      
      <div onClick={showPersonalSubMenu}>
        <div><p>Personal</p></div>
        <div className={ personalSubMenu ? "ShowSubMenu" : "Hide" }>
          <div className="Menu_Nav_Link"><Link href="/investing">Investing</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/marketplace">Marketplace</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/directory">Directory</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/academy">Academy</Link></div>
        </div>
      </div>
      
      <div onClick={showBusinessSubMenu}>
        <div><p>Business</p></div>
        <div className={ businessSubMenu ? "ShowSubMenu" : "Hide" }>
          <div className="Menu_Nav_Link"><Link href="/funding">Funding</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/vendor">Vendor</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/listing">Listing</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/accelerator">Accelerator</Link></div>
          
          <div className="Menu_Nav_Link"><Link href="/complaince">Compliance</Link></div>
        </div>
      </div>
      
      <div><Link href="/contact-us">Contact Us</Link></div>
      
      <div className="Menu_Buttons">
        <div className="Menu_Button">
          <div className="Button"><Link href="/login">Login</Link></div>
        </div>
        
        <div className="Menu_Button">
          <div className="Button"><Link href="/signup">Sign Up</Link></div>
        </div>
      </div>
    </div>  
  );
}
