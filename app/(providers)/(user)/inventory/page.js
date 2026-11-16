"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/app/lib/authContext";
import { ReadInventories } from "@/app/lib/firestore";
import InventoryItemCard from "@/app/components/inventoryItemCard";

export default function Inventory() {
  
  const [ inventory, setInventory ] = useState([]);
  
  const { user, profile, loading } = useAuth();
  
  const router = useRouter();
  
  useEffect(() => {

    if (loading === false && !user) {
      router.replace("/login");
    }
    
    let cancelled = false;
    
    async function loadInventory() {
      try {
        const docs = await ReadInventories(profile.id);
        if (!cancelled) {
          setInventories(docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          })));
        }
      } catch (error) {
        console.error("Could not load inventories:", error);
      }
    }
    
    loadInventory();
    
    return () => {
      cancelled = true;
    }
  
  }, [user, loading, router, profile]);
  
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
    <main className="Inventory">
      
      <div><h1>My Inventory</h1></div>
      
      <div className="Button_Secondary"><Link href="/enterprise/add">Add</Link></div>
      
      <div className="Inventory_Filters">
        <input type="search" name="search inventory" placeholder="Search Inventory" />
      </div>
      
      <div className="Inventory_List">{inventory.map((product) => (<InventoryItemCard key={product.name} item={product} />))}</div>
      
    </main>
  )
}