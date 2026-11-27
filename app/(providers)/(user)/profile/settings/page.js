"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/authContext";

export default function ProfileSettings() {
  
  
  
  return (
    <main className="AccountSettings">
      
      <div className="AccountSettings__Container">
        
        <div className="AccountSettings__Heading">
          <p>Manage your account</p>
          <h1>Account settings</h1>
          <span>Review your profile and sign-in information.</span>
        </div>
        
        <div className="AccountSettings__Layout">
          <nav className="AccountSettings__Menu" aria-label="Account settings sections">
            <button className={ activeSection === "overview" ? "Is-Active" : "" } onClick={() => setActiveSection("overview")} type="button">Account overview</button>
            <button className={ activeSection === "security" ? "is-active" : "" } onClick={() => setActiveSection("security")} type="button">Sign-in & security</button>
          </nav>
        </div>
        
        <div className="AccountSettings__Panel" aria-labelledby="Settings-Panel-Title">
          { activeSection === "overview" ? 
          <>
          <div className="AccountSettings__PanelHeading">
            <div>
              <p>Profile</p>
              <h2 id="Settings-Panel-Title">Account overview</h2>
            </div>
            <span className="AccountSettings__Badge">{profile?.type || "Member"}</span>
          </div>
          <dl className="AccountSettings__Details">
            <div><dt>Full name</dt><dd>{fullName}</dd></div>
            <div><dt>Email address</dt><dd>{user.email || "Not available"}</dd></div>
            <div><dt>Phone number</dt><dd>{profile?.cellphone || "Not provided"}</dd></div>
            <div><dt>Account type</dt><dd>{profile?.type || "Not set"}</dd></div>
          </dl>
          <div className="AccountSettings__Note">Need to change your details? Contact Systemism support so your account information can be updated safely.</div>
          </> : 
          <>
          <div className="AccountSettings__PanelHeading">
            <div>
              <p>Protect you’re account</p>
              <h2 id="Settings-Panel-Title">Sign-in & security</h2>
            </div>
          </div>
          <div className="AccountSettings__SecurityRow">
            <span aria-hidden="True">{ user.emailVerified ? "✓" : "!" }</span>
            <div>
              <h3>Email verification</h3>
              <p>{ user.emailVerified ? "Your email address is verified." : "Your email address has not been verified yet." }</p>
            </div>
            <span>{ user.emailVerified ? "Verified" : "Pending" }</span>
          </div>
          <div className="AccountSettings__SecurityRow">
            <span aria-hidden="True">@</span>
            <div>
              <h3>Sign-in email</h3>
              <p>{user.email || "No email address is associated with this account."}</p>
            </div>
          </div>
          <p className="AccountSettings__Note">For help changing your password or recovering access, use the sign-in support options.</p>
          <Link className="AccountSettings__Link" href="/reset-password">Password help <span aria-hidden="true">↗</span></Link>
          </>}
        </div>
      </div>
      
    </main>
  )
}