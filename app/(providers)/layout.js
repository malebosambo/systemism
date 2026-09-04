"use client";

import { AuthProvider } from "@/app/lib/authContext";

export default function Layout({ children }) {
  
  return (
    <AuthProvider>
      <div>{children}</div>
    </AuthProvider>
  );
}