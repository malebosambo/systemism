"use client";

import { useState } from "react";
import AdminNavigation from "./adminNavigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Systemism-Logo.png";

export default function AdminHeader() {
  
  const [ mobileMenu, setMobileMenu ] = useState(false);

  const showMobileMenu = () => setMobileMenu(!mobileMenu);  
  
  return (
    <div className="Header">
      <div className="Logo">
        <div className="Image_Logo">
          <Link href="/"><Image src={logo} alt="Company Logo" height={50} width={50} /></Link>
        </div>
        
        <div className="Mobile_Menu_Btns">
          <button onClick={showMobileMenu} className={ mobileMenu ? "Button" : "Hide" }><Image src="" alt="Profile Thumbnail" height={20} width={20} /></button>
        </div>
      </div>
      
      <div className={ mobileMenu ? "Mobile_Menu_Visible" : "Hide" }>
        <AdminNavigation />
      </div>
    </div>
  );
}
