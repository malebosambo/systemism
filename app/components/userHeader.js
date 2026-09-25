"use client";

import { useState } from "react";
import UserNavigation from "./userNavigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/SystemismLogoZoom.jpg";

export default function UserHeader() {
  
  const [ closedMobileMenu, setClosedMobileMenu ] = useState(true);

  const showMobileMenu = () => setMobileMenu(!closedMobileMenu);  
  
  return (
    <div className="Header">
      
      <div className="Logo">
        <div className="Image_Logo">
          <Link href="/dashboard"><Image src={logo} alt="Company Logo" height={60} width={100} /></Link>
        </div>
        
        <div>
          <button onClick={showMobileMenu}><Image src="/icons/circled-profile.png" alt="Circled Profile Icon" height={20} width={20} /></button>
        </div>
      </div>
      
      <div className="Menu"><UserNavigation /></div>
      
      <div className={ !closedMobileMenu ? "Mobile_Menu_Visible" : "Hide" }>
        <div className={ !closedMobileMenu ? "Mobile_Menu" : "" }><UserNavigation /></div>
        <div className={ !closedMobileMenu ? "Mobile_Menu_Close" : "" }><button onClick={showMobileMenu} className={ !closedMobileMenu ? "Button_Small" : "Hide" }><Image src="/icons/close.png" alt="Menu Icon" height={20} width={20} /></button></div>
      </div>
      
    </div>
  );
}
