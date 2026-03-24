"use client";

import Link from "next/link";
import Image from "next/image";
import { UserLogout } from "../lib/actions"

export default function UserNavigation() {
  
  return (
    <div className="UserNavigation">
      <div><Link href="/dashboard">Dashboard</Link></div>
      <div><Link href="/investments">Investments</Link></div>
      <div><Link href="/funds">Funds</Link></div>
      <div><Link href="/marketplace">Marketplace</Link></div>
      <div><Link href="/directory">Directory</Link></div>
      <div><Link href="/programs">Programs</Link></div>
      <div><Link href="/profile"><Image src="" alt="Profile Thumbnail" height={20} width={20} /></Link></div>
      
      <div className="Button" onClick={ UserLogout }>Logout</div>
    </div>  
  );
}
