"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/authContext";

export default function Hub() {
  
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
    <main className="Hub">
      
      <h1>Hub</h1>
      
      <Link href="/hub/application" className="HomeButton HomeButton--Secondary">Apply</Link>
      
    </main>
  )
}