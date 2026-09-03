"use client";

import { AuthProvider } from "@/app/lib/authContext";

export default function RootLayout({ children }) {
  
  return (
    <AuthProvider>
      <div><Header /></div>
      <div>{children}</div>
      <div><Footer /></div>
    </AuthProvider>
  );
}