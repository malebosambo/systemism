"use client";

import { useState } from "react";
import { useAuth } from "@/app/lib/authContext";
import { CreateInventory } from "@/app/lib/firestore";

export default function AddInventoryItem() {
  
  const { profile } = useAuth();
  
  const [ inventory, setInventory ] = useState({
    name: "",
    description: "",
    category: "",
    price: 0.00,
    stock: 0,
    sku: "",
    vat: 15,
    vendor: "",
    createdDate: "",
    editedOnDate: ""
  });
  
  const handleOnSubmit = async () => {
    await CreateInventory(inventory, profile.id);
  }
  
  function handleChange(e) {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  }
  
  return (
    <main className="Inventory_Add">
      
      <div><h1>Add New Inventory</h1></div>
      
      <div className="Form_InventoryDetails">
        <form onSubmit={handleOnSubmit}>
          <div>
            <label for="name">Product Name</label>
            <input type="text" name="name" value={inventory.name} onChange={handleChange} placeholder="Product Name" className="Input" required />
          </div>
          
          <div>
            <label for="description">Product Description</label>
            <input type="textarea" name="description" value={inventory.description} onChange={handleChange} placeholder="Product Description" className="Input" required />
          </div>
          
          <div>
            <select id="category" name="category" value={inventory.category} onChange={handleChange}>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Clothes">Clothes</option>
              <option value="Food">Food</option>
            </select>
          </div>
          
          <div>
            <label for="price">Product Price</label>
            <input type="number" name="price" value={inventory.price} onChange={handleChange} className="Input" required />
          </div>
          
          <div>
            <label for="stock">Product Stock</label>
            <input type="number" name="stock" value={inventory.stock} onChange={handleChange} className="Input" required />
          </div>
          
          <div>
            <select id="sku" name="sku" value={inventory.sku} onChange={handleChange}>
              <option value="Kilograms">Kilograms</option>
              <option value="Grams">Grams</option>
              <option value="Litres">Litres</option>
              <option value="Millilitres ">Millilitres</option>
              <option value="Item">Item</option>
              <option value="Items">Items</option>
            </select>
          </div>
          
          <div>
            <label for="vat">VAT</label>
            <input type="number" name="vat" value={inventory.vat} onChange={handleChange} className="Input" required />
          </div>
          
          <div>
            <label for="vendor">Vendor</label>
            <select id="vendor" name="vendor" value={inventory.vendor} onChange={handleChange} className="Input">
              <option value="Default">Default</option>
            </select>
          </div>
          
          <div><button type="submit" name="submit" className="Button_Primary">Submit</button></div>
        </form>
      </div>
      
    </main>
  );
}