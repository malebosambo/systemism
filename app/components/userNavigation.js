"use client";

import Link from "next/link";
import Image from "next/image";
// import { UserLogout } from "../lib/actions"

export default function UserNavigation() {
  
  return (
    <div className="UserNavigation">
      <div><Link href="/dashboard">Dashboard</Link></div>
      <div><Link href="/investments">Investments</Link></div>
      <div><Link href="/funds">Funds</Link></div>
      <div><Link href="/market">Market</Link></div>
      <div><Link href="/enterprise">Enterprise</Link></div>
      <div><Link href="/programs">Programs</Link></div>
      <div><Link href="/listings">Listings</Link></div>
      <div><Link href="/hub">Hub</Link></div>
      <div><Link href="/profile"><Image src="/icons/circled-profile.png" alt="Profile Icon" height={20} width={20} /></Link></div>
      
      <div className="Button" >Logout</div>
    </div>  
  );
}
