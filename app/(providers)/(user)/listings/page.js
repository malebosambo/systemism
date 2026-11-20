"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/app/lib/authContext";
import { ReadListings } from "@/app/lib/firestore";
import ListingDetailsCard from "@/app/components/listingDetailsCard";

export default function Listings() {
  
  const { user, profile, loading } = useAuth();
  
  const router = useRouter();

  useEffect(() => {
  
    if (loading === false && !user) {
      router.replace("/login");
    }
    
    let cancelled = false;
    
    async function loadListings() {
      try {
        const docs = await ReadListings(profile.id);
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
    
    loadListings();
    
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
    <main className="Listings">
      
      <h1>My Listings</h1>
      
      <Link href="/listings/add" className="HomeButton HomeButton--Secondary">Add</Link>
      
      <div>{listings.map((listing) => (<ListingDetailsCard key={listing.name} listing={listing} />))}</div>
      
    </main>
  )
}
