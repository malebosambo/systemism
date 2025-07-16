export default function AddInventoryItem() {
  
  return (
    <div className="Add_Inventory_Item">
      <div>
        <h1>Add Inventory Item</h1>
      </div>
      
      <div>
        <Form action="">
          <input type="file" name="image" accept="image" required />
          <input type="text" name="name" placeholder="Product Name" onChange={(e) => setProduct.name(e.target.value)} value={product.name} minLength="2" maxLength="50" required />
          <textarea name="description" placeholder="Description" onChange={(e) => setProduct.description(e.target.value)} value={product.description} minLength="50" maxLength="250" rows="5" required></textarea>
          
          <label for="category">Category</label>
          <select name="category">
            
          </select>
          
          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  )
}