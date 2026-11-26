"use client";

import { useState } from "react";
import Link from 'next/link'

export default function Navigation() {
  
  const [ personalMenu, setPersonalMenu ] = useState(false);
  
  const [ businessMenu, setBusinessMenu ] = useState(false);
  
  const handlePersonalOnClick = () => {
    setPersonalMenu(!personalMenu);
    setBusinessMenu(!businessMenu)
  }
  
  const handleBusinessOnClick = () => {
    setBusinessMenu(!businessMenu);
    setPersonalMenu(!personalMenu);
  }
  
  return (
    <div className="RootNav" aria-label="Main navigation">
      
      <Link className="RootNav__Link" href="/">Home</Link>
      
      <div>
        <Link href="/personal" className="RootNav__Link">Personal</Link><span onClick={handlePersonalOnClick}>o</span>
        
        <div className={ personalMenu ? "RootNavGroup_Personal" : "Hide" }>
          <Link href="/investing" className="RootNav__Link">Investing</Link>
          
          <Link href="/marketplace" className="RootNav__Link">Marketplace</Link>
          
          <Link href="/directory" className="RootNav__Link">Directory</Link>
          
          <Link href="/academy" className="RootNav__Link">Academy</Link>
        </div>
      </div>
      
      <div>
        <Link href="/business" className="RootNav__Link">Business</Link><span onClick={handleBusinessOnClick}>o</span>
        
        <div className={ businessMenu ? "RootNavGroup_Business" : "Hide" }>
          <Link href="/funding" className="RootNav__Link">Funding</Link>
          
          <Link href="/vendor" className="RootNav__Link">Vendor</Link>
          
          <Link href="/listing" className="RootNav__Link">Listing</Link>
          
          <Link href="/accelerator" className="RootNav__Link">Accelerator</Link>
          
          <Link href="/complaince" className="RootNav__Link">Compliance</Link>
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
