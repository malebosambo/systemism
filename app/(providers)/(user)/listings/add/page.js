"use client";

import { useState } from "react";
import { useAuth } from "@/app/lib/authContext";
import { WriteListing } from "@/app/lib/firestore";

export default function AddListing() {
  
  const { profile } = useAuth();
  
  const [ listing, setListing ] = useState({
    name: "",
    description: "",
    number: 0,
    type: "",
    category: "",
    location: "",
    website: "",
    verification: false,
    services: [],
    hours: []
  });
  
  const handleOnSubmit = async () => {
    await WriteListing(listing, profile.id);
  }
  
  function handleChange(e) {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  }

  return (
    <main className="Listing_Add">
      
      <h1>Add New Listing</h1>
      
      <div className="Form_ListingDetails">
        <form onSubmit={handleOnSubmit}>
          <div>
            <label for="name">Name</label>
            <input type="text" name="name" value={listing.name} onChange={handleChange} placeholder="Listing" className="Input" required />
          </div>
      
          <div>
            <label for="description">Description</label>
            <input type="textarea" name="description" value={listing.description} onChange={handleChange} placeholder="Description" className="Input" required />
          </div>
            
          <div>
            <button type="submit" name="submit" className="HomeButton HomeButton--Primary">Submit</button>
          </div>  
        </form>
      </div>
      
    </main>
  )
}
