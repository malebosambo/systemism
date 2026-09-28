"use client";

import { useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/authContext";
import EnterpriseDetailsCard from "@/app/components/enterpriseDetailsCard";

export default function Enterprises() {
  
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
    return <div style={{ display: "none" }}>Loading...</div>
  }
  
  return (
    <main>
      
      <div><h1>My Enterprises</h1></div>
      
      <div>
        {profile.enterprises.map((enterprise) => (<EnterpriseDetailsCard key={enterprise.name} enterprise={enterprise} />))}
      </div>
      
    </main>
  )
}
