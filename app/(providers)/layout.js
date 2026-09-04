"use client";

import { AuthProvider } from "@/app/lib/authContext";
import Header from "../components/header";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
  
  return (
    <AuthProvider>
      <div><Header /></div>
      <div>{children}</div>
      <div><Footer /></div>
    </AuthProvider>
  );
}