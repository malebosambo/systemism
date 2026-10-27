"use client";

import { useState, useEffect } from "react";
import { router } from "next/navigation";
import { CreateEnterprise } from "@/app/lib/actions"

export default function AddEnterprise() {
  
  const [ enterprise, setEnterprise ] = useState({
    "name": "",
    "number": "",
    "type": "",
    "registrationDate": "",
    "startDate": "",
    "status": "",
    "finYearEnd": "",
    "taxNumber": 0,
    "phyAddress": "",
    "postalAddress": "",
    "director": "",
    "annualReturns": false,
    "beneficialOwnership": false
  });
  
  const { user, profile, loading } = useAuth();
  
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
  
  function handleChange(e) {
    const { name, value } = e.target;
    setEnterprise(prev => ({ ...prev, [name]: value }));
  }
  
  return (
    <main className="Enterprise">
      
      <div><h1>Add Enterprise</h1></div>
      
      <div className="Form_EnterpriseDetails">
        <form onSubmit={AddEnterprise}>
          <div><input type="text" name="name" placeholder="Enterprise Name" onChange={handleChange} value={enterprise.name} required /></div>
          
          <div><input type="text" name="number" placeholder="Enterprise Number" onChange={handleChange} value={enterprise.number} required /></div>
    
          <div>
            <p>Enterprise Type:</p>
            <ul>
              <li><input type="radio" name="type" value="Private" />Private</li>
              <li><input type="radio" name="type" value="Close Corporation" />Close Corporation</li>
            </ul>
          </div>
          
          <div>
            <p>Registration Date:</p>
            <input type="date" name="registrationDate" />
          </div>
          
          <div>
            <p>Start Date:</p>
            <input type="date" name="startDate" />
          </div>
          
          <div>
            <p>Status:</p>
            <select id="enterpriseStatus" name="status" value={enterprise.status} onChange={handleChange}>
            <option value="In Business">In Business</option>
            <option value="De-registration">De-registration</option>
            </select>
          </div>
          
          <div>
            <p>Financial Year End:</p>
            <input type="date" name="finYearEnd" />
          </div>
          
          <div><input type="number" name="taxNumber" value={enterprise.taxNumber} onChange={handleChange} placeholder="Tax Number" required /></div>
    
          <div><input type="textarea" name="phyAddress" placeholder="Physical Address" onChange={handleChange} value={enterprise.phyAddress} required /></div>
          
          <div><input type="textarea" name="postalAddress" placeholder="Postal Address" onChange={handleChange} value={enterprise.postalAddress} /></div>
          
          <div><input type="text" name="director" placeholder="Enterprise Director" onChange={handleChange} value={enterprise.director} required /></div>
    
          <div><button type="submit">Add SMME</button></div>
        </form>
        
      </div>
    </main>
  )
}
