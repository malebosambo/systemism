import React, { useState } from "react"
import Navigation from "./navigation"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/STARCH.png"

export default function Header() {
  
  const [ mobileMenu, setMobileMenu ] = useState(false);

  const showMenu = () => setMobileMenu(!mobileMenu);  
  
  return (
    <div className="Header">
      <div className="Logo">
        <div>
          <Link href="/"><Image src={logo} alt="Logo" style={{ height: "60px" }} /></Link>
        </div>
        <div className="Mobile-Menu">
          <button onClick={showMenu} className={ !mobileMenu ? "" : "Menu" }>=</button>
          <button onClick={showMenu} className={ mobileMenu ? "" : "Menu" }>X</button>
        </div>
      </div>
      <div className={ mobileMenu ? "Menu-Visible" : "Menu" }>
        <Navigation />
      </div>
    </div>
  );
}