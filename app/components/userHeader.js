"use client";

import { useState } from "react";
import UserNavigation from "./userNavigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/SystemismLogoZoom.jpg";

export default function UserHeader() {
  
  const [ mobileMenu, setMobileMenu ] = useState(true);

  const showMobileMenu = () => setMobileMenu(!closedMobileMenu);  
  
  return (
    <div className="Header">
      
      <div className="Logo">
        <div className="Image_Logo">
          <Link href="/dashboard"><Image src={logo} alt="Company Logo" height={60} width={100} style={{ border: "1px solid #F9F9E1" }} /></Link>
        </div>
        
        <div className="Mobile_Menu_Open">
          <button onClick={showMobileMenu}><Image src="/icons/circled-profile.png" alt="Circled Profile Icon" height={20} width={20} /></button>
        </div>
      </div>
      
      <div className="Menu"><UserNavigation /></div>
      
      <div className={ mobileMenu ? "Mobile_Menu_Visible" : "Hide" }>
        <div className={ mobileMenu ? "Mobile_Menu" : "" }><UserNavigation /></div>
        <div className={ mobileMenu ? "Mobile_Menu_Close" : "" }><button onClick={showMobileMenu} className={ mobileMenu ? "Button_Small" : "Hide" }><Image src="/icons/close.png" alt="Menu Icon" height={20} width={20} /></button></div>
      </div>
      
    </div>
  );
}
