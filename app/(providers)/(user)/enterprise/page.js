"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/authContext";
import { GetEnterprises } from "@/app/lib/firestore";
import EnterpriseDetailsCard from "@/app/components/enterpriseDetailsCard";

export default function Enterprises() {
  
  const [ enterprises, setEnterprises ] = useState([]);
  
  const { user, profile, loading } = useAuth();
  
  const router = useRouter();
  
  useEffect(() => {

    if (loading === false && !user) {
      router.replace("/login");
    }
    
    let cancelled = false;
    
    async function loadEnterprises() {
      try {
        const docs = await GetEnterprises(profile.id);
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
    <main className="Enterprises">
      
      <div><h1>My Enterprises</h1></div>
      
      <div className="Button_Secondary"><Link href="/enterprise/add">Add</Link></div>
      
      <div className="Enterprises_List">{enterprises.map((enterprise) => (<EnterpriseDetailsCard key={enterprise.name} enterprise={enterprise} />))}</div>
      
    </main>
  )
}