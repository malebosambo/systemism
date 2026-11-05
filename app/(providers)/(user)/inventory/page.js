"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/app/lib/authContext";
import { GetProfile } from "@/app/lib/firestore";
import InventoryItemCard from "@/app/components/inventoryItemCard";

export default function Inventory() {
  
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
  
  const inventories = await GetInventory();
  
  return (
    <main>
      
      <div><h1>Inventory</h1></div>
      
      <div><Link href="/enterprise/add">Add</Link></div>
      
      <div><input type="search" name="search inventory" placeholder="Search Inventory" /></div>
      
      <div>{inventories.map((inventory) => (<InventoryItemCard item={inventory} />))}</div>
      
    </main>
  )
}