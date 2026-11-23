"use client";

import { useEffect, useState } from "react";
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
];

function NavigationGroup({ id, label, href, links, isOpen, onToggle, onNavigate }) {
  return (
    <div className={`rootNav__group${isOpen ? " is-open" : ""}`}>
      <div className="rootNav__groupHeading">
        <Link className="rootNav__link" href={href} onClick={onNavigate}>
          {label}
        </Link>
        <button
          className="rootNav__chevron"
          type="button"
          aria-label={`${isOpen ? "Close" : "Open"} ${label} menu`}
          aria-expanded={isOpen}
          aria-controls={id}
          onClick={onToggle}
        >
          <span aria-hidden="true" />
        </button>
      </div>
      <div className="rootNav__dropdown" id={id} hidden={!isOpen}>
        {links.map((item) => (
          <Link className="rootNav__dropdownLink" href={item.href} key={`${item.href}-${item.label}`} onClick={onNavigate}>
            {item.label}<span aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navigation({ onNavigate }) {
  const [openGroup, setOpenGroup] = useState(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpenGroup(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const toggleGroup = (group) => setOpenGroup((current) => current === group ? null : group);

  return (
    <nav className="rootNav" aria-label="Main navigation">
      <Link className="rootNav__link" href="/" onClick={onNavigate}>Home</Link>
      <NavigationGroup
        id="root-personal-menu"
        label="Personal"
        href="/profiles/personal"
        links={personalLinks}
        isOpen={openGroup === "personal"}
        onToggle={() => toggleGroup("personal")}
        onNavigate={onNavigate}
      />
      <NavigationGroup
        id="root-business-menu"
        label="Business"
        href="/profiles/Business"
        links={businessLinks}
        isOpen={openGroup === "business"}
        onToggle={() => toggleGroup("business")}
        onNavigate={onNavigate}
      />
      <Link className="rootNav__link" href="/contact-us" onClick={onNavigate}>Contact</Link>
      <div className="rootNav__actions">
        <Link className="rootNav__login" href="/login" onClick={onNavigate}>Log in</Link>
        <Link className="rootNav__signup" href="/signup" onClick={onNavigate}>Create account <span aria-hidden="true">↗</span></Link>
      </div>

      <style jsx>{`
        .rootNav {
          align-items: center;
          color: #f8f8f2;
          display: flex;
          gap: clamp(.85rem, 1.7vw, 1.65rem);
        }
        .rootNav__link {
          align-items: center;
          color: inherit;
          display: inline-flex;
          font-size: .9rem;
          font-weight: 500;
          min-height: 44px;
          padding: 0 .1rem;
          position: relative;
          text-decoration: none;
          transition: color .16s ease;
          white-space: nowrap;
        }
        .rootNav__link::after {
          background: #e5e3bd;
          bottom: 3px;
          content: "";
          height: 2px;
          left: 0;
          position: absolute;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .16s ease;
          width: 100%;
        }
        .rootNav__link:hover, .rootNav__link:focus-visible { color: #f7f6df; }
        .rootNav__link:hover::after, .rootNav__link:focus-visible::after { transform: scaleX(1); }
        .rootNav__group { position: relative; }
        .rootNav__groupHeading { align-items: center; display: flex; }
        .rootNav__chevron {
          align-items: center;
          background: transparent;
          border: 0;
          border-radius: 5px;
          color: inherit;
          cursor: pointer;
          display: inline-flex;
          height: 36px;
          justify-content: center;
          margin-left: .1rem;
          width: 30px;
        }
        .rootNav__chevron span {
          border-bottom: 1.5px solid currentColor;
          border-right: 1.5px solid currentColor;
          height: 7px;
          transform: translateY(-2px) rotate(45deg);
          transition: transform .16s ease;
          width: 7px;
        }
        .rootNav__group.is-open .rootNav__chevron span { transform: translateY(2px) rotate(225deg); }
        .rootNav__chevron:focus-visible, .rootNav__dropdownLink:focus-visible, .rootNav__login:focus-visible, .rootNav__signup:focus-visible { outline: 2px solid #e6e5c4; outline-offset: 3px; }
        .rootNav__dropdown {
          background: #fffef9;
          border: 1px solid #e7e5d9;
          border-radius: 10px;
          box-shadow: 0 16px 36px rgb(0 0 0 / 22%);
          color: #20211d;
          left: -.75rem;
          min-width: 230px;
          padding: .45rem;
          position: absolute;
          top: calc(100% + .35rem);
          z-index: 20;
        }
        .rootNav__dropdownLink {
          align-items: center;
          border-radius: 6px;
          color: inherit;
          display: flex;
          font-size: .88rem;
          justify-content: space-between;
          min-height: 42px;
          padding: 0 .8rem;
          text-decoration: none;
          transition: background .14s ease;
        }
        .rootNav__dropdownLink:hover { background: #f3f2e8; }
        .rootNav__dropdownLink span { color: #74766b; font-size: .8rem; }
        .rootNav__actions { align-items: center; border-left: 1px solid rgb(255 255 255 / 18%); display: flex; gap: .75rem; margin-left: .25rem; padding-left: 1.1rem; }
        .rootNav__login, .rootNav__signup {
          align-items: center;
          border-radius: 7px;
          display: inline-flex;
          font-size: .88rem;
          font-weight: 700;
          justify-content: center;
          min-height: 42px;
          padding: 0 .9rem;
          text-decoration: none;
          transition: background .16s ease, transform .16s ease;
          white-space: nowrap;
        }
        .rootNav__login { border: 1px solid rgb(247 246 223 / 45%); color: #fff; }
        .rootNav__login:hover { background: rgb(255 255 255 / 9%); }
        .rootNav__signup { background: #f7f6df; color: #171815; gap: .45rem; }
        .rootNav__signup:hover { background: #eeedcf; transform: translateY(-1px); }
        @media (max-width: 900px) {
          .rootNav { align-items: stretch; flex-direction: column; gap: .2rem; }
          .rootNav__link { border-radius: 6px; font-size: 1rem; min-height: 48px; padding: 0 .8rem; }
          .rootNav__link::after { display: none; }
          .rootNav__link:hover { background: rgb(255 255 255 / 7%); }
          .rootNav__groupHeading { border-bottom: 1px solid rgb(255 255 255 / 12%); justify-content: space-between; }
          .rootNav__groupHeading .rootNav__link { flex: 1; }
          .rootNav__chevron { height: 44px; width: 44px; }
          .rootNav__dropdown { background: transparent; border: 0; border-radius: 0; box-shadow: none; color: #e5e6db; margin: .25rem 0 .6rem .75rem; min-width: 0; padding: 0; position: static; }
          .rootNav__dropdownLink { border-radius: 5px; color: #e5e6db; font-size: .92rem; min-height: 44px; padding: 0 .8rem; }
          .rootNav__dropdownLink:hover { background: rgb(255 255 255 / 8%); }
          .rootNav__dropdownLink span { color: #c4c6b7; }
          .rootNav__actions { align-items: stretch; border-left: 0; border-top: 1px solid rgb(255 255 255 / 16%); flex-direction: column; gap: .65rem; margin: .85rem 0 0; padding: 1rem 0 0; }
          .rootNav__login, .rootNav__signup { min-height: 48px; width: 100%; }
        }
      `}</style>
    </nav>
  );
}
