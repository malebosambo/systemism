"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/lib/authContext";
import UserNavigation from "./userNavigation";
import logo from "../../public/SystemismLogoZoom.jpg";

export default function UserHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, profile } = useAuth();

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const firstName = profile?.name?.trim()?.split(/\s+/)[0];
  const initials = (profile?.name || user?.email || "U").split(/[\s@._-]+/).filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");

  return (
    <header className="accountHeader">
      <div className="accountHeader__bar">
        <Link className="accountHeader__brand" href="/dashboard" aria-label="Systemism dashboard">
          <Image src={logo} alt="Systemism" priority sizes="(max-width: 760px) 130px, 145px" />
        </Link>
        <div className="accountHeader__desktopNav"><UserNavigation /></div>
        <div className="accountHeader__identity">
          <span className="accountHeader__avatar" aria-hidden="true">{initials || "U"}</span>
          <span className="accountHeader__identityText"><strong>{firstName || "My account"}</strong><small>{profile?.type || "Member"}</small></span>
        </div>
        <button className="accountHeader__menuButton" type="button" aria-label={menuOpen ? "Close account navigation" : "Open account navigation"} aria-expanded={menuOpen} aria-controls="account-mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span className={`accountHeader__menuIcon${menuOpen ? " is-open" : ""}`} aria-hidden="true"><span /><span /><span /></span>
        </button>
      </div>
      <div id="account-mobile-navigation" className={`accountHeader__mobilePanel${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen} inert={!menuOpen}><UserNavigation onNavigate={() => setMenuOpen(false)} /></div>
      {menuOpen && <button className="accountHeader__backdrop" type="button" aria-label="Close account navigation" onClick={() => setMenuOpen(false)} />}
      <style jsx>{`
        .accountHeader { --account-ink:#171a16; --account-cream:#f7f6df; background:var(--account-ink); color:#fff; position:sticky; top:0; z-index:40; }
        .accountHeader__bar { align-items:center; display:flex; gap:1.5rem; justify-content:space-between; margin:0 auto; max-width:1480px; min-height:78px; padding:.65rem clamp(1rem,3vw,2.5rem); position:relative; z-index:2; }
        .accountHeader__brand { align-items:center; display:inline-flex; flex:0 0 auto; line-height:0; }
        .accountHeader__brand :global(img) { border:1px solid rgb(247 246 223 / 55%); display:block; height:auto; max-height:48px; object-fit:contain; width:138px; }
        .accountHeader__desktopNav { margin-left:auto; }
        .accountHeader__identity { align-items:center; border-left:1px solid rgb(255 255 255 / 18%); display:flex; gap:.65rem; padding-left:1.1rem; }
        .accountHeader__avatar { align-items:center; background:#dfe2d1; border-radius:50%; color:#23271f; display:inline-flex; font-size:.78rem; font-weight:800; height:38px; justify-content:center; width:38px; }
        .accountHeader__identityText { display:grid; gap:.15rem; }
        .accountHeader__identityText strong { font-size:.83rem; }
        .accountHeader__identityText small { color:#c9cbbf; font-size:.72rem; }
        .accountHeader__menuButton { align-items:center; background:var(--account-cream); border:0; border-radius:50%; color:var(--account-ink); cursor:pointer; display:none; height:46px; justify-content:center; padding:0; width:46px; }
        .accountHeader__menuButton:focus-visible,.accountHeader__brand:focus-visible,.accountHeader__backdrop:focus-visible { outline:3px solid #d6daa9; outline-offset:3px; }
        .accountHeader__menuIcon { display:flex; flex-direction:column; gap:5px; width:21px; }
        .accountHeader__menuIcon span { background:currentColor; border-radius:2px; display:block; height:2px; transition:transform .18s ease,opacity .18s ease; width:100%; }
        .accountHeader__menuIcon.is-open span:first-child { transform:translateY(7px) rotate(45deg); }
        .accountHeader__menuIcon.is-open span:nth-child(2) { opacity:0; }
        .accountHeader__menuIcon.is-open span:last-child { transform:translateY(-7px) rotate(-45deg); }
        .accountHeader__mobilePanel,.accountHeader__backdrop { display:none; }
        @media(max-width:980px){
          .accountHeader__bar{min-height:70px}.accountHeader__desktopNav{display:none}.accountHeader__identity{margin-left:auto}.accountHeader__menuButton{display:inline-flex}
          .accountHeader__mobilePanel{background:var(--account-ink);border-top:1px solid rgb(255 255 255 / 12%);box-shadow:0 18px 30px rgb(0 0 0 / 22%);display:block;inset:100% 0 auto;max-height:calc(100dvh - 70px);overflow-y:auto;padding:1rem 1.25rem 1.5rem;position:absolute;transform:translateY(-8px);transition:opacity .18s ease,transform .18s ease,visibility .18s ease;visibility:hidden;opacity:0;z-index:3}
          .accountHeader__mobilePanel.is-open{opacity:1;transform:translateY(0);visibility:visible}.accountHeader__backdrop{background:rgb(0 0 0 / 35%);border:0;display:block;inset:100% 0 auto;min-height:calc(100dvh - 70px);position:fixed;width:100%;z-index:1}
        }
        @media(max-width:420px){.accountHeader__bar{gap:.65rem;padding-inline:.8rem}.accountHeader__brand :global(img){max-height:42px;width:120px}.accountHeader__identity{gap:.45rem;padding-left:.65rem}.accountHeader__identityText strong{max-width:78px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.accountHeader__menuButton{height:42px;width:42px}}
        @media(prefers-reduced-motion:reduce){.accountHeader *{transition-duration:.01ms!important}}
      `}</style>
    </header>
  );
}
