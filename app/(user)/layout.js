"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Analytics } from "@vercel/analytics/next"
import UserHeader from "../components/userHeader";
import "../globals.css";

export default function UserLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <Analytics />
        <div><UserHeader /></div>
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}
