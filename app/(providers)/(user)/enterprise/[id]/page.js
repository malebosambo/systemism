"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { GetEnterprise } from "@/app/lib/firestore";

export default function ViewEnterprise() {
  
  const { user, profile, loading } = useAuth();
  
  const router = useRouter();
  
  useEffect(() => {

    if (loading === false && !user) {
      router.replace("/login");
    }
  
  }, [user, loading, router]);
  
  if (loading) {
    return <div>Loading...</div>
  }
  
  if (!user) {
    return null;
  }
  
  if (!profile) {
    return <div style={{ display: "none" }}>Loading profile...</div>
  }
  
  const enterprise = async () => {
    await GetEnterprise();
  } 
  
  return (
    <main className="Enterprise_Details">
    
      <div><h1>{enterprise.name}</h1></div>
      
      <div>
        <div><p>AR: {enterprise.annualReturns}</p></div>
        <div><p>BO: {enterprise.beneficialOwnership}</p></div>
        <div><p>Tax Returns: {enterprise.taxReturns}</p></div>
      </div>
      
      <div>
        <div><h2>Registration Certificate</h2></div>
        
        <div>
          <p>Number: {enterprise.number}</p>
        </div>
        
        <div>
          <p>Registration Date: {enterprise.registrationDate}</p>
        </div>
        
        <div>
          <p>Start Date: {enterprise.startDate}</p>
        </div>
        
        <div>
          <p>Type: {enterprise.type}</p>
        </div>
        
        <div>
          <p>Status: {enterprise.status}</p>
        </div>
        
        <div>
          <p>Financial Year End: {enterprise.finYearEnd}</p>
        </div>
        
        <div>
          <p>Tax Number: {enterprise.taxNumber}</p>
        </div>
        
        <div>
          <p>Physical Address: {enterprise.physicalAddress}</p>
        </div>
        
        <div>
          <p>Postal Address: {enterprise.postalAddress}</p>
        </div>
        
        <div>
          <p>Director(s): {enterprise.directors}</p>
        </div>
      </div>
      
      <div className="EnterpriseDetails_Finances">
        
        <div><h2>Finances</h2></div>
      
        <div><h3>Profit Loss</h3></div>
        
        <div><h3>Cash Flow Projection</h3></div>
        
        <div><h3>Balance Sheet</h3></div>
        
      </div>
      
    </main>
  )
}
