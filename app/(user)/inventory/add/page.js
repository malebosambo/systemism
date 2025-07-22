"use client";

export default function AddInventoryItem() {
  
  return (
    <div className="Add_Inventory_Item">
      <div>
        <h1>New Inventory Item</h1>
      </div>
      
      <div>
        <form action="">
          <input type="file" name="image" accept="image" required />
          <input type="text" name="name" placeholder="Product Name" onChange={(e) => setProduct.name(e.target.value)} value={product.name} minLength="2" maxLength="50" required />
          <textarea name="description" placeholder="Description" onChange={(e) => setProduct.description(e.target.value)} value={product.description} minLength="50" maxLength="250" rows="5" required></textarea>
          
          <label for="category">Category</label>
          <select name="category">
            
          </select>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
