"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import Link from "next/link";
import Image from "next/image";

export default function UserNavigation() {
  
  const router = useRouter;
  
  async function handleLogout() {
    try {
      await signOut(auth);
      
      router.replace("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  }
  
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
      
      <div><button type="button" onClick={handleLogout} className="Button">Logout</button></div>
    </div>  
  );
}
