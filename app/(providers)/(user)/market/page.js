"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/authContext";
import MarketplaceItemCard from "@/app/components/shopItemCard";

export default function Market() {
  
  const [ cart, setCart ] = useState(0);
   
  const { user, profile, loading } = useAuth();
   
  const router = useRouter();

  useEffect(() => {
  
    if (loading === false && !user) {
      router.replace("/login");
    }
  
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return null;
  }

  if (!profile) {
    return <div style={{ display: "none" }}>Loading profile...</div>
  }
  
  return (
    <main>
      
      <div><h1>Market</h1></div>
      
      <div><input type="search" name="search marketplace" placeholder="Search Marketplace" /></div>
      
    </main>
  )
}