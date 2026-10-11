"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/authContext";

export default function Funds() {
  
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
    <div className="Funds">
      <div>
        <h1>Funds</h1>
      </div>
    
      <div>
        <Link href="/funds/request">Request</Link>
      </div>
      
      <div><p>Nothing to display.</p></div>
    </div>
  )
}
