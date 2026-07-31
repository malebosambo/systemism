"use client";

import { useState } from "react"
import Navigation from "./navigation"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/SystemismLogoZoom.jpg"

export default function Header() {
  
  const [ mobileMenu, setMobileMenu ] = useState(false);

  const showMobileMenu = () => setMobileMenu(!mobileMenu);  
  
  return (
    <div className="Header">
      <div className="Logo">
        <div className="Image_Logo">
          <Link href="/"><Image src={logo} alt="Company Logo" height={60} width={90} /></Link>
        </div>
        
        <div className="Mobile_Menu_Btns">
          <button onClick={showMobileMenu} className={ !mobileMenu ? "Button_Small" : "Hide" }><Image src="/icons/menu.png" alt="Menu Icon" height={10} width={10} /></button>
        </div>
      </div>
      
      <div className={ mobileMenu ? "Mobile_Menu_Visible" : "Hide" }>
        <div className={ mobileMenu ? "Mobile_Menu" : "" }><Navigation /></div>
        <div className={ mobileMenu ? "Mobile_Menu_Close" : "" }><button onClick={showMobileMenu} className={ mobileMenu ? "Button_Small" : "Hide" }><Image src="/icons/close.png" alt="Menu Icon" height={10} width={10} /></button></div>
      </div>
    </div>
  );
}
