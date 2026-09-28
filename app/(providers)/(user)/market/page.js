"use client";

import { useAuth } from "@/app/lib/authContext";
import StoreItemCard from "@/app/components/shopItemCard";

 export default function Store() {
   
   
  
  return (
    <main>
      
      <div><h1>Store</h1></div>
      
      <div>{store.products.map((item) => (<StoreItemCard key={item.name} item={item} />))}</div>
    </main>
  );
}