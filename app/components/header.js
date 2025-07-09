"use client";

import React, { useState } from "react"
import Navigation from "./navigation"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/Systemism-Logo.png"

export default function Header() {
  
  const [ mobileMenu, setMobileMenu ] = useState(false);

  const showMenu = () => setMobileMenu(!mobileMenu);  
  
  return (
    <div className="Header">
      <div className="Logo">
        <div className="Image_Logo">
          <Link href="/"><Image src={logo} alt="Logo" height={50} width={50} /></Link>
        </div>
        <div className="Mobile_Menu">
          <button onClick={showMenu} className={ !mobileMenu ? "" : "Menu" }>=</button>
          <button onClick={showMenu} className={ mobileMenu ? "" : "Menu" }>X</button>
        </div>
      </div>
      
      <div className={ mobileMenu ? "Menu_Visible" : "Menu" }>
        <Navigation />
      </div>
    </div>
  );
}
