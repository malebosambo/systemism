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
    
      <div><h1></h1></div>
      
      <div>
        <div><p>AR</p></div>
        <div><p>BO</p></div>
        <div><p>Tax Returns</p></div>
      </div>
      
      <div>
        <div><h2>Registration Certificate</h2></div>
        
        <div>
          <p>Number: </p>
        </div>
        
        <div>
          <p>Registration Date: </p>
        </div>
        
        <div>
          <p>Start Date: </p>
        </div>
        
        <div>
          <p>Type: </p>
        </div>
        
        <div>
          <p>Status: </p>
        </div>
        
        <div>
          <p>Financial Year End: </p>
        </div>
        
        <div>
          <p>Tax Number: </p>
        </div>
        
        <div>
          <p>Physical Address: </p>
        </div>
        
        <div>
          <p>Postal Address: </p>
        </div>
        
        <div>
          <p>Director(s): </p>
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
