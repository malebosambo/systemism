"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/authContext";

export default function Investments() {
  
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
    <main className="Investments">
      
      <h1>My Investments</h1>
      
      <Link href="/investments/catalogue" className="HomeButton HomeButton--Secondary">Invest</Link>
      
    </main>
  )
}
