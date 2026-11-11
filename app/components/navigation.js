"use client";

import { useState } from "react";
import Link from "next/link";

const personalLinks = [
  { href: "/investing", label: "Investing" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/directory", label: "Directory" },
  { href: "/academy", label: "Academy" },
];

const businessLinks = [
  { href: "/funding", label: "Funding" },
  { href: "/enterprise/add", label: "Become a vendor" },
  { href: "/directory", label: "Business directory" },
  { href: "/accelerator", label: "Accelerator" },
  { href: "/legal", label: "Compliance & legal" },
];

function MenuGroup({ label, href, links, open, onToggle }) {
  const menuId = `${label.toLowerCase()}-menu`;

  return (
    <div className={`Navigation_Group${open ? " is-open" : ""}`}>
      <div className="Navigation_GroupHeading">
        <Link href={href} className="Navigation_Link">
          {label}
        </Link>
        <button
          type="button"
          className="Navigation_Toggle"
          aria-label={`${open ? "Close" : "Open"} ${label} menu`}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={onToggle}
        >
          <span aria-hidden="true">⌄</span>
        </button>
      </div>
      <div id={menuId} className="Navigation_Submenu" hidden={!open}>
        {links.map((link) => (
          <Link key={link.href + link.label} href={link.href} className="Navigation_SubmenuLink">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu((currentMenu) => (currentMenu === menu ? null : menu));
  };

  return (
    <>
      <nav className="Navigation" aria-label="Main navigation">
        <Link href="/" className="Navigation_Link">
          Home
        </Link>

        <MenuGroup
          label="Personal"
          href="/profiles/personal"
          links={personalLinks}
          open={openMenu === "personal"}
          onToggle={() => toggleMenu("personal")}
        />

        <MenuGroup
          label="Business"
          href="/profiles/Business"
          links={businessLinks}
          open={openMenu === "business"}
          onToggle={() => toggleMenu("business")}
        />

        <Link href="/contact-us" className="Navigation_Link">
          Contact us
        </Link>

        <div className="Menu_Buttons">
          <Link href="/login" className="Menu_Button Navigation_Login">
            Log in
          </Link>
          <Link href="/signup" className="Menu_Button Navigation_Signup">
            Sign up
          </Link>
        </div>
      </nav>

      <style jsx>{`
        .Navigation {
          align-items: center;
          display: flex;
          flex-direction: row;
          gap: 1.25rem;
          justify-content: flex-end;
          padding: 0.75rem 1.5rem;
        }
        .Navigation_Link,
        .Navigation_SubmenuLink {
          color: inherit;
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          text-decoration: none;
        }
        .Navigation_Group {
          position: relative;
        }
        .Navigation_GroupHeading {
          align-items: center;
          display: flex;
        }
        .Navigation_Toggle {
          background: transparent;
          border: 0;
          color: inherit;
          cursor: pointer;
          font-size: 1.25rem;
          min-height: 44px;
          min-width: 36px;
        }
        .Navigation_Submenu {
          background: white;
          border: 1px solid #dedecb;
          border-radius: 0.5rem;
          box-shadow: 0 8px 24px rgb(0 0 0 / 14%);
          color: #171717;
          left: 0;
          min-width: 12rem;
          padding: 0.5rem;
          position: absolute;
          top: calc(100% + 0.25rem);
          z-index: 20;
        }
        .Navigation_SubmenuLink {
          border-radius: 0.25rem;
          padding: 0 0.75rem;
          width: 100%;
        }
        .Navigation_SubmenuLink:hover,
        .Navigation_SubmenuLink:focus-visible {
          background: #f5f5e8;
        }
        .Menu_Buttons {
          align-items: center;
          display: flex;
          gap: 0.5rem;
        }
        .Menu_Button {
          align-items: center;
          border: 1px solid #f9f9e1;
          border-radius: 0.5rem;
          color: inherit;
          display: inline-flex;
          justify-content: center;
          min-height: 44px;
          min-width: 5rem;
          padding: 0 0.9rem;
          text-decoration: none;
        }
        .Navigation_Signup {
          background: #f9f9e1;
          color: #171717;
        }
        @media (max-width: 768px) {
          .Navigation {
            align-items: stretch;
            flex-direction: column;
            gap: 0.25rem;
            justify-content: flex-start;
            padding: 0;
          }
          .Navigation_GroupHeading {
            justify-content: space-between;
          }
          .Navigation_Submenu {
            border: 0;
            box-shadow: none;
            margin: 0 0 0.5rem 0.75rem;
            padding: 0;
            position: static;
          }
          .Menu_Buttons {
            align-items: stretch;
            flex-direction: column;
            padding: 0.5rem 0;
          }
          .Menu_Button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
