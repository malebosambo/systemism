"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Analytics } from "@vercel/analytics/next"
import { useAuth } from "@/app/lib/authContext";
import UserHeader from "../components/userHeader";
import "../globals.css";

export default function UserLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    
    if (!loading && !user) {
      console.log("User not authenticated, redirecting to login.");
      router.push("/login");
    }
    }, [ user, loading, router ]
  );
  
  if (loading) return <div>Loading...</div>;
  if (!user) return null;
  
  return (
    <>
      <Analytics />
      <div><UserHeader /></div>
      <div>{children}</div>
    </>
  )
}
