"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navigation from "./navigation";
import logo from "../../public/SystemismLogoZoom.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="siteHeader">
      <div className="siteHeader__bar">
        <Link className="siteHeader__brand" href="/" aria-label="Systemism home">
          <Image
            src={logo}
            alt="Systemism"
            priority
            sizes="(max-width: 760px) 140px, 160px"
          />
        </Link>

        <div className="siteHeader__desktopNav">
          <Navigation />
        </div>

        <button
          className="siteHeader__menuButton"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="site-mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span className={`siteHeader__menuIcon${menuOpen ? " is-open" : ""}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="site-mobile-navigation"
        className={`siteHeader__mobilePanel${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <Navigation />
      </div>

      {menuOpen && (
        <button
          className="siteHeader__backdrop"
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <style jsx>{`
        .siteHeader {
          --header-ink: #171815;
          --header-cream: #f7f6df;
          background: var(--header-ink);
          color: #fff;
          position: relative;
          z-index: 50;
        }
        .siteHeader__bar {
          align-items: center;
          display: flex;
          gap: 1.5rem;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 1440px;
          min-height: 88px;
          padding: .7rem clamp(1rem, 4vw, 3.5rem);
          position: relative;
          z-index: 2;
        }
        .siteHeader__brand {
          align-items: center;
          display: inline-flex;
          flex: 0 0 auto;
          line-height: 0;
        }
        .siteHeader__brand :global(img) {
          border: 1px solid rgb(247 246 223 / 70%);
          display: block;
          height: auto;
          max-height: 58px;
          object-fit: contain;
          width: 150px;
        }
        .siteHeader__desktopNav { margin-left: auto; }
        .siteHeader__menuButton {
          align-items: center;
          background: var(--header-cream);
          border: 0;
          border-radius: 50%;
          color: var(--header-ink);
          cursor: pointer;
          display: none;
          height: 52px;
          justify-content: center;
          padding: 0;
          width: 52px;
        }
        .siteHeader__menuButton:focus-visible,
        .siteHeader__brand:focus-visible,
        .siteHeader__backdrop:focus-visible {
          outline: 3px solid #d6daa9;
          outline-offset: 4px;
        }
        .siteHeader__menuIcon {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 24px;
        }
        .siteHeader__menuIcon span {
          background: currentColor;
          border-radius: 2px;
          display: block;
          height: 2px;
          transition: transform .18s ease, opacity .18s ease;
          width: 100%;
        }
        .siteHeader__menuIcon.is-open span:first-child { transform: translateY(7px) rotate(45deg); }
        .siteHeader__menuIcon.is-open span:nth-child(2) { opacity: 0; }
        .siteHeader__menuIcon.is-open span:last-child { transform: translateY(-7px) rotate(-45deg); }
        .siteHeader__mobilePanel { display: none; }
        .siteHeader__backdrop { display: none; }

        @media (max-width: 900px) {
          .siteHeader__bar { min-height: 78px; }
          .siteHeader__desktopNav { display: none; }
          .siteHeader__menuButton { display: inline-flex; }
          .siteHeader__mobilePanel {
            background: var(--header-ink);
            border-top: 1px solid rgb(255 255 255 / 12%);
            box-shadow: 0 18px 30px rgb(0 0 0 / 20%);
            display: block;
            inset: 100% 0 auto;
            max-height: calc(100dvh - 78px);
            overflow-y: auto;
            padding: 1.25rem clamp(1rem, 5vw, 2rem) 1.5rem;
            position: absolute;
            transform: translateY(-8px);
            transition: opacity .18s ease, transform .18s ease, visibility .18s ease;
            visibility: hidden;
            opacity: 0;
            z-index: 3;
          }
          .siteHeader__mobilePanel.is-open {
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
          }
          .siteHeader__backdrop {
            background: rgb(0 0 0 / 34%);
            border: 0;
            display: block;
            inset: 100% 0 auto;
            min-height: calc(100dvh - 78px);
            position: fixed;
            width: 100%;
            z-index: 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .siteHeader * { transition-duration: .01ms !important; }
        }
      `}</style>
    </header>
  );
}
