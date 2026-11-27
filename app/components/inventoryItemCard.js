import Image from "next/image";
import Link from "next/link";

export default function InventoryItemCard({ key, item }) {
  
  return (
    <>
      <div key={key} className="InventoryProductCard">
        
        <Link href="/inventory/${inventory.name}">
          
          <div><Image src="" alt="Inventory Image" height={50} width={50} /></div>
        
          <div className="InventoryProductCard__Details">
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>{item.stock}</p>
            <p>{item.vendor}</p>
          </div>
          
        </Link>
        
      </div>
    </>
  );
}