"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/authContext";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function RootLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (!loading && user) {
      router.replace("/dashboard");
    }
  }, [user, loading, router])
  
  return (
    <>
      <div><Header /></div>
      <div>{children}</div>
      <div><Footer /></div>
    </>
  )
}
