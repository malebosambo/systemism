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
          <Link href="/"><Image src={logo} alt="Company Logo" height={50} style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}width={80} /></Link>
        </div>
        
        <div className="Mobile_Menu_Btns">
          <button onClick={showMobileMenu} className={ !mobileMenu ? "Button" : "Hide" }>menu</button>
          <button onClick={showMobileMenu} className={ mobileMenu ? "Button" : "Hide" }><span className="material-symbols-outlined">close</span></button>
        </div>
      </div>
      
      <div className={ mobileMenu ? "Mobile_Menu_Visible" : "Hide" }>
        <Navigation />
      </div>
    </div>
  );
}
