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
    
    const enterprises = async () => {
      const data = await GetEnterprises(profile.id);
      setEnterprises(data);
    }
    
    enterprise();
  
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
      
      <div>{enterprises.map((enterprise) => (<EnterpriseDetailsCard key={enterprise.name} enterprise={enterprise} />))}</div>
      
    </main>
  )
}