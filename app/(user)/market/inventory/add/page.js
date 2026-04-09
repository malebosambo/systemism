"use client";

import { useState } from "react";

export default function AddInventoryItem() {
  
  const [ product, setProduct ] = useState({
    name: "",
    description: ""
  });
  
  return (
    <div className="Add_Inventory_Item">
      <div>
        <h1>New Inventory Item</h1>
      </div>
      
      <div>
        <form action="">
          <input type="file" name="image" accept="image" required />
          
          <input type="text" name="name" placeholder="Product Name" onChange="" value="" minLength="2" maxLength="50" required />
          
          <textarea name="description" placeholder="Description" onChange="" value="" minLength="50" maxLength="250" rows="5" required></textarea>
          
          <label for="category">Category</label>
          <select name="category">
            
          </select>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
