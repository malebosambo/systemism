"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/authContext";
import { ReadEnterprises } from "@/app/lib/firestore";
import EnterpriseDetailsCard from "@/app/components/enterpriseDetailsCard";

export default function Enterprises() {
  
  const [ enterprises, setEnterprises ] = useState([]);
  
  const { user, profile, loading } = useAuth();
  
  const router = useRouter();
  
  useEffect(() => {

    if (loading || !user || !profile?.id) {
      return; 
    }
    
    let cancelled = false;
    
    async function loadEnterprises() {
      
      try {
        
        const docs = await ReadEnterprises(profile.id);
        if (!cancelled) {
          setEnterprises(docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          })));
        }
        
      } catch (error) {
        
        console.error("Could not load enterprises:", error);
        
      }
      
    }
    
    loadEnterprises();
    
    return () => {
      cancelled = true;
    }
    
  }, [user, loading, profile?.id]);
  
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
    <main className="Enterprises">
      
      <h1>My Enterprises</h1>
      
      <Link href="/enterprise/add" className="HomeButton HomeButton--Secondary">Add</Link>
      
      <div className="Enterprises_List">{enterprises.map((enterprise) => (<EnterpriseDetailsCard key={enterprise.name} enterprise={enterprise} />))}</div>
      
    </main>
  )
}