"use client";

import { useState } from "react";

export default function AddEnterprise() {
  
  const [enterprise, setEnterprise] = useState({
    "name": "",
    "number": "",
    "type": "",
    "address": "",
    "director": ""
  });
  
  return (
    <main>
      
      <div><h1>Add New Enterprise</h1></div>
      
      <div className="Form_EnterpriseDetails">
        <form onSubmit="">
          <input type="text" name="name" placeholder="Enterprise Name" onChange={} value={enterprise.name} required />
          
          <input type="text" name="number" placeholder="Enterprise Number" onChange={} value={enterprise.number} required />
    
          <p>Enterprise Type:</p>
          <ul>
            <li><input type="radio" name="type" value="Private" />Private</li>
            <li><input type="radio" name="type" value="Close Corporation" />Close Corporation</li>
          </ul>
    
          <input type="textarea" name="address" placeholder="Enterprise Address" onChange={} value={enterprise.address} required />
          
          <input type="text" name="director" placeholder="Enterprise Director" onChange={} value={} required />
    
          <button type="submit">Add SMME</button>
        </form>
        
      </div>
    </main>
  )
}
