"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ReadInventory } from "@/app/lib/firestore";

export default function ViewInventoryItem() {
  
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
  
  const product = async () => {
    await ReadInventory(id);
  }
  
  return (
    <main className="Inventory_Details">
      
      <div><h1>{product.name}</h1></div>
      
      <div><p>{product.description}</p></div>
      
      <div><p>{product.category}</p></div>
      
      <div><p>{product.price}</p></div>
      
      <div><p>{product.stock}</p></div>
      
      <div><p>{product.sku}</p></div>
      
      <div><p>{product.vat}</p></div>
      
      <div><p>{product.vendor}</p></div>
      
    </main>
  )
}
