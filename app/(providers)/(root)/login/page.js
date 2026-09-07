"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/app/lib/authContext";
import LoginForm from "./form";

export default function Login() 

{

  const { user, loading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (loading === false && user) {
      router.push("/dashboard");
    }
  }, [ user, loading, router ]);
  
  if (loading) return <div>Loading...</div>;
  if (user) return null;

  return (
    <LoginForm />
  );
  
}
