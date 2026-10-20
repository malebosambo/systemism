import { useState } from "react";

export default function AddListing() {
  
  const [ listing, setListing ] = useState({
    name: "",
    description: ""
  });
  
  function handleChange(e) {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  }

  return (
    <main>
      
      <div><h1>Add New Listing</h1></div>
      
      <div><input type="text" name="listing name" value={listing.name} onChange={handleChange} placeholder="Listing" required /></div>
      
      <div><input type="textarea" name="description" value={listing.description} onChange={handleChange} placeholder="Description" required /></div>

    </main>
  )
}
