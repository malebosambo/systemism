import Link from "next/link";

export default function ListingDetailsCard({ key, listing }) {
  
  return (
    <>
      <div key={key} className="ListingDetailsCard">
        <Link href="/listings/${listing.name}">
      
          <div><h1>{listing.name}</h1></div>
          
          <div><p>{listing.description}</p></div>
          
        </Link>
      </div>
    </>
  )
}