"use client";

import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/authContext";
import UserHeader from "../../components/userHeader";
import "../../globals.css";

export default function UserLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => { if (!loading && !user) router.replace(`/login?next=${encodeURIComponent(pathname || "/dashboard")}`); }, [user, loading, pathname, router]);
  if (loading || !user) return <main className="accountAccessLoading" aria-live="polite" aria-busy="true"><span aria-hidden="true" /><p>{loading ? "Loading your secure account…" : "Taking you to sign in…"}</p><style jsx>{`.accountAccessLoading{align-items:center;background:#f8f8f3;color:#383b33;display:flex;flex-direction:column;justify-content:center;min-height:55vh;padding:2rem;text-align:center}.accountAccessLoading span{animation:accountPulse 1s ease-in-out infinite alternate;background:#252b24;border-radius:50%;height:14px;width:14px}.accountAccessLoading p{color:#65685f;font-size:.95rem;margin:1rem 0 0}@keyframes accountPulse{to{opacity:.35;transform:scale(.8)}}`}</style></main>;
  return <><Analytics /><UserHeader /><div className="accountLayoutContent">{children}</div><style jsx>{`.accountLayoutContent{min-height:60vh}`}</style></>;
}
