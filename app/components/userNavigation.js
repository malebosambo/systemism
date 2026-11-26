"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { auth } from "@/firebase";
import { useAuth } from "@/app/lib/authContext";

const personalLinks = [{href:"/dashboard",label:"Overview",icon:"⌂"},{href:"/investments",label:"Investments",icon:"↗"},{href:"/market",label:"Marketplace",icon:"▦"},{href:"/programs",label:"Programs",icon:"▤"},{href:"/map",label:"Directory map",icon:"⌖"}];
const businessLinks = [{href:"/dashboard",label:"Overview",icon:"⌂"},{href:"/enterprise",label:"Enterprises",icon:"▣"},{href:"/funds",label:"Funding",icon:"↗"},{href:"/inventory",label:"Inventory",icon:"▦"},{href:"/hub",label:"Business hub",icon:"◈"},{href:"/listings",label:"Listings",icon:"▤"}];

export default function UserNavigation({ onNavigate }) {
  const { profile } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [signOutError,setSignOutError] = useState("");
  const links = profile?.type === "Business" ? businessLinks : personalLinks;

  async function handleLogout(){setSignOutError("");try{await signOut(auth);onNavigate?.();router.replace("/login")}catch(error){console.error("Logout failed",error);setSignOutError("We couldn’t sign you out. Please try again.")}}

  return (
    <nav className="accountNav" aria-label="Account navigation">
      <div className="accountNav__links">
        {links.map((item)=>{const isActive=item.href===\"/dashboard\"?pathname===item.href:pathname===item.href||pathname.startsWith(`${item.href}/`);return <Link aria-current={isActive?\"page\":undefined} className={`accountNav__link${isActive?\" is-active\":\"\"}`} href={item.href} key={item.href} onClick={onNavigate}><span className="accountNav__icon" aria-hidden="true">{item.icon}</span><span>{item.label}</span></Link>})}
        <Link aria-current={pathname.startsWith("/profile")?"page":undefined} className={`accountNav__link${pathname.startsWith("/profile")?" is-active":""}`} href="/profile/settings" onClick={onNavigate}><span className="accountNav__icon" aria-hidden="true">⚙</span><span>Account settings</span></Link>
      </div>
      <div className="accountNav__footer">{signOutError&&<p className="accountNav__error" role="alert">{signOutError}</p>}<button className="accountNav__logout" type="button" onClick={handleLogout}><span aria-hidden="true">↪</span> Sign out</button></div>
      <style jsx>{`
        .accountNav{align-items:center;color:#f6f7f0;display:flex;gap:.35rem}.accountNav__links{align-items:center;display:flex;gap:.2rem}.accountNav__link{align-items:center;border-radius:7px;color:#d8dacf;display:inline-flex;font-size:.83rem;font-weight:600;gap:.4rem;min-height:42px;padding:0 .65rem;text-decoration:none;transition:background .15s ease,color .15s ease;white-space:nowrap}.accountNav__link:hover{background:rgb(255 255 255 / 8%);color:#fff}.accountNav__link.is-active{background:rgb(247 246 223 / 12%);color:#f7f6df}.accountNav__icon{align-items:center;color:#e2e3d6;display:inline-flex;font-size:1rem;justify-content:center;width:18px}.accountNav__footer{border-left:1px solid rgb(255 255 255 / 17%);margin-left:.35rem;padding-left:.75rem}.accountNav__logout{background:transparent;border:1px solid rgb(255 255 255 / 23%);border-radius:7px;color:#fff;cursor:pointer;font:inherit;font-size:.82rem;font-weight:700;min-height:40px;padding:0 .75rem}.accountNav__logout:hover{background:rgb(255 255 255 / 9%)}.accountNav__link:focus-visible,.accountNav__logout:focus-visible{outline:2px solid #e6e5c4;outline-offset:3px}.accountNav__error{color:#ffd1c9;font-size:.82rem;line-height:1.5;max-width:220px}
        @media(max-width:980px){.accountNav{align-items:stretch;flex-direction:column;gap:.9rem}.accountNav__links{align-items:stretch;flex-direction:column}.accountNav__link{font-size:.96rem;min-height:48px;padding:0 .8rem}.accountNav__footer{border-left:0;border-top:1px solid rgb(255 255 255 / 16%);margin:0;padding:.85rem 0 0}.accountNav__logout{min-height:46px;width:100%}}
      `}</style>
    </nav>
  );
}
