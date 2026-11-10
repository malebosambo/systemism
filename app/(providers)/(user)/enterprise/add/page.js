"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/app/lib/authContext";
import { CreateEnterprise } from "@/app/lib/firestore"

export default function AddEnterprise() {
  
  const { profile, loading } = useAuth();
  
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
    "directors": 0,
    "annualReturns": false,
    "beneficialOwnership": false,
    "taxReturns": false,
    "verificationStatus": "pending",
    "directorID": ""
  });
  
  if (loading) {
    return <div>Loading...</div>
  }
  
  const handleOnSubmit = async () => {
    await CreateEnterprise(enterprise, profile.id);
  }
  
  function handleChange(e) {
    const { name, value } = e.target;
    setEnterprise(prev => ({ ...prev, [name]: value }));
  }
  
  return (
    <main className="Enterprise_Add">
      
      <div><h1>Add Enterprise</h1></div>
      
      <div className="Form_EnterpriseDetails">
        
        <form onSubmit={handleOnSubmit}>
          <div>
            <label for="name">Enterprise Name</label>
            <input type="text" name="name" placeholder="Enterprise Name" onChange={handleChange} value={enterprise.name} className="Input" required />
          </div>
          
          <div>
            <label for="number">Enterprise Number</label>
            <input type="text" name="number" placeholder="Enterprise Number" onChange={handleChange} value={enterprise.number} className="Input" required />
          </div>
    
          <div>
            <p>Enterprise Type:</p>
            <div>
              <input type="radio" name="type-private" value="Private" onChange={handleChange} checked={enterprise.type ===  "Private"} /><label for="type-private">Private</label>
            </div>
            <div>
              <input type="radio" name="type-cc" value="Close Corporation" onChange={handleChange} checked={enterprise.type === "Close Corporation"} /><label for="type-cc">Close Corporation</label>
            </div>
          </div>
          
          <div>
            <label for="registrationDate">Registration Date:</label>
            <input type="date" name="registrationDate" className="Input" />
          </div>
          
          <div>
            <label for="startDate">Start Date:</label>
            <input type="date" name="startDate" />
          </div>
          
          <div>
            <label for="status">Status:</label>
            <select id="enterpriseStatus" name="status" value={enterprise.status} onChange={handleChange} className="Input">
              <option value="In Business">In Business</option>
              <option value="De-registration">De-registration</option>
            </select>
          </div>
          
          <div>
            <label for="finYearEnd">Financial Year End:</label>
            <input type="date" name="finYearEnd" />
          </div>
          
          <div>
            <label for="taxNumber">Tax Number</label>
            <input type="number" name="taxNumber" value={enterprise.taxNumber} onChange={handleChange} placeholder="Tax Number" className="Input" required /></div>
    
          <div>
            <label for="phyAddress">Physical Address</label>
            <input type="textarea" name="phyAddress" placeholder="Physical Address" onChange={handleChange} value={enterprise.phyAddress} className="Input" required />
          </div>
          
          <div>
            <label for="postalAddress">Postal Address</label>
            <input type="textarea" name="postalAddress" placeholder="Postal Address" onChange={handleChange} value={enterprise.postalAddress} className="Input" /></div>
          
          <div>
            <label for="director">Director</label>
            <input type="text" name="director" placeholder="Enterprise Director" onChange={handleChange} value={enterprise.director} className="Input" disabled="true" /></div>
    
          <div><button type="submit" className="Button_Primary">Add SMME</button></div>
        </form>
        
      </div>
    </main>
  )
}
