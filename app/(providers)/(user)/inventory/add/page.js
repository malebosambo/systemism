"use client";

import { useState } from "react";
import { CreateEnterprise } from "@/app/lib/firestore";

export default function AddInventoryItem() {
  
  const [ inventory, setInventory ] = useState({
    name: "",
    description: "",
    category: "",
    price: 0,
    stock: 0,
    sku: "",
    vat: 15,
    vendor: "",
    uploadedDate: "",
    editedOnDate: ""
  });
  
  function handleChange(e) {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  }
  
  return (
    <main>
      
      <div><h1>Add New Inventory</h1></div>
      
      <div>
        <form onSubmit={CreateEnterprise}>
          <div><input type="text" name="name" value={inventory.name} onChange={handleChange} required /></div>
          
          <div><input type="textarea" name="description" value={inventory.description} onChange={handleChange} required /></div>
          
          <div><select id="category" name="category" value={inventory.category} onChange={handleChange}>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothes">Clothes</option>
            <option value="Food">Food</option>
          </select></div>
          
          <div><input type="number" name="price" value={inventory.price} onChange={handleChange} required /></div>
          
          <div><input type="number" name="stock" value={inventory.stock} onChange={handleChange} required /></div>
          
          <div><select id="sku" name="sku" value={inventory.sku} onChange={handleChange}>
            <option value="kilograms">kilograms</option>
            <option value="grams">g</option>
            <option value="litres">litres</option>
            <option value="Items">Items</option>
          </select></div>
          
          <div><input type="number" name="vat" value={inventory.vat} onChange={handleChange} required /></div>
          
          <div><button type="submit" name="submit">Submit</button></div>
        </form>
      </div>
      
    </main>
  );
}