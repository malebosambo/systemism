import Image from "next/image";
import Link from "next/link";

export default function StoreItemCard({ item }) {
  
  return (
    <>
      <div key={item.name}>
        <div className="Item_Image"><Image href="" alt="Item Thumbnail" width="" height="" /></div>
      
        <div>
          <h1 className="Item_Name">{item.name}</h1>
          <hr />
          <h2 className="Item_Price">{item.price}</h2>
          <h2 className="Enterprise_Name">{item.enterprise}</h2>
          <h2 className="Item_Category">{item.category}</h2>
          <div className="Item_MetaDetails"></div>
        </div>
      
        <div><Link href="/shop/{category}/{itemname}">View</Link></div>
      </div>
    </>
  )
} 