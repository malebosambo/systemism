import Link from "next/link";
import Image from "next/image";

export default function EnterpriseDetailsCard({ enterprise }) {
  
  return (
    <>
      <div key={enterprise.name}><Link href="/enterprise/${enterprise.name}">
        <div className="Enterprise_Logo"></div>
      
        <div className="Enterprise_Details">
          <h5>{enterprise.name}</h5>
          <hr />
          <p>{enterprise.number}</p>
          <p>{enterprise.status}</p>
          <p>{enterprise.type}</p>
          <p>{enterprise.director}</p>
        </div>
        
        <div>
          <div><p>AR:</p></div>
          <div><p>BO:</p></div>
          <div><p>Tax:</p></div>
        </div>
      </Link></div>  
    </>
  )
}