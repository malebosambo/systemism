"use client";

import { useState } from "react";

export default function AddEnterprise() {
  
  const [name, setName] = useState("");
  const [number, setNumber] =useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [director, setDirector] = useState("");
  
  return (
    <div>
      <div><h1>Add New Enterprise</h1></div>
      
      <div>
        <form action="">
          <input type="text" name="Enterprise Name" placeholder="Enterprise Name" onChange="" value="" required />
          
          <input type="text" name="Enterprise Number" placeholder="Enterprise Number" onChange="" value="" required />
    
          <label>Enterprise Type:</label>
          <ul>
            <li><input type="radio" name="Private Type" value="Private" required />Private</li>
            <li><input type="radio" name="CC Type" value="Close Corporation" required />Close Corporation</li>
          </ul>
    
          <input type="textarea" name="Enterprise Address" placeholder="Enterprise Address" onChange="" value="" required />
          
          <input type="text" name="Enterprise Director" placeholder="Enterprise Director" onChange="" value="" required />
    
          <button type="submit">Add SMME</button>
        </form>
        
      </div>
    </div>
  )
}
