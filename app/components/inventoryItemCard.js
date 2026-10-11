import Image from "next/image";
import Link from "next/link";

export default function InventoryItemCard({ item }) {
  
  return (
    <>
      <div>
        <div><Image src="" alt="Inventory Image" height={50} width={50} /></div>
        
        <div>
          <h3>{item.name}</h3>
          <h4>{item.price}</h4>
          <h4>{item.description}</h4>
          <h4>{item.category}</h4>
          <h4>{item.stock}</h4>
        </div>
      </div>
    </>
  )
}