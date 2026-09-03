"use client";

import { AuthProvider } from "@/app/lib/authContext";
import { Rubik } from "next/font/google"; 
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: '400'
});

export const metadata = {
  title: "SYSTEMISM",
  description: "Fintech solutions for individuals and SMMEs.",
};

export default function Layout({ children }) {
  
  return (
    <html lang="en" className={rubik.className}>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
