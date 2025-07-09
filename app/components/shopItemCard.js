import Image from "next/image";
import Link from "next/link";

export default function ShopItemCard() {
  
  return (
    <>
      <div className="Item_Image"><Image href="" alt="Item Thumbnail" width="" height="" /></div>
      <h1 className="Item_Name"></h1>
      <h2 className="Item_Price"></h2>
      <h2 className="Enterprise_Name"></h2>
      <h2 className="Item_Category"></h2>
      <Link href="/shop/{category}/{itemname}">View</Link>
    </>
  )
} 