"use client";

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation";
import Navigation from "./navigation"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/SystemismLogoZoom.jpg"

export default function Header() {
  
  const [ menuOpen, setMenuOpen ] = useState(false);
  
  const pathname = usePathname();
  
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  
  useEffect(() => {
    if (!menuOpen) return undefined;
    
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    
    window.addEventListener("keydown", handleKeyDown);
    
    return () => window.removeEventListener("keydown", handleKeyDown);
    
  }, [menuOpen]);


  const showMobileMenu = () => setMenuOpen(!menuOpen);
  
  const closeMenu = () => setMenuOpen(false);
  
  return (

    <div className="SiteHeader"> 
      
      <div className="SiteHeader__Bar">
        <Link href="/" className="SiteHeader__Brand">
          <Image src={logo} alt="Company Logo" height={60} width={90} style={{ border: "1px solid #F9F9E1" }} />
        </Link>
      
        <div className="SiteHeader__DesktopNav"><Navigation /></div>
        
        <button type="button" onClick={() => setMenuOpen((isOpen) => !isOpen)} className="SiteHeader__MenuButton" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="Site-Mobile-Navigation">
          <span className={`SiteHeader__MenuIcon${menuOpen ? "Is-Open" : ""}`} aria-hidden="True">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
      
      <div id="Site-Mobile-Navigation" className={`SiteHeader__MobilePanel${menuOpen ? "Is-Open" : ""}`} aria-hidden={!menuOpen} inert={!menuOpen}>
        <Navigation />
      </div>
      
      {menuOpen && (
        <button type="button" onClick={() => setMenuOpen(false)} className="SiteHeader__Backdrop" aria-label="Close navigation menu" />
      )}
      
    </div>
  );
}
