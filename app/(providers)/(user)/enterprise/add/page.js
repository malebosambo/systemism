"use client";

import { useState } from "react";
import { AddEnterprise } from "@/app/lib/actions"

export default function AddEnterprise() {
  
  const [enterprise, setEnterprise] = useState({
    "name": "",
    "number": "",
    "type": "",
    "address": "",
    "director": ""
  });
  
  function handleChange(e) {
    const { name, value } = e.target;
    setEnterprise(prev => ({ ...prev, [name]: value }));
  }
  
  return (
    <main>
      
      <div><h1>Add New Enterprise</h1></div>
      
      <div className="Form_EnterpriseDetails">
        <form onSubmit={AddEnterprise}>
          <input type="text" name="name" placeholder="Enterprise Name" onChange={handleChange} value={enterprise.name} required />
          
          <input type="text" name="number" placeholder="Enterprise Number" onChange={handleChange} value={enterprise.number} required />
    
          <p>Enterprise Type:</p>
          <ul>
            <li><input type="radio" name="type" value="Private" />Private</li>
            <li><input type="radio" name="type" value="Close Corporation" />Close Corporation</li>
          </ul>
    
          <input type="textarea" name="address" placeholder="Enterprise Address" onChange={handleChange} value={enterprise.address} required />
          
          <input type="text" name="director" placeholder="Enterprise Director" onChange={handleChange} value={enterprise.director} required />
    
          <button type="submit">Add SMME</button>
        </form>
        
      </div>
    </main>
  )
}
