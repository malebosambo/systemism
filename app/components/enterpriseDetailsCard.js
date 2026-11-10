import Link from "next/link";
import Image from "next/image";

export default function EnterpriseDetailsCard({ key, enterprise }) {
  
  return (
    <>
      <div key={key} className="EnterpriseDetailsCard">
        <Link href="/enterprise/${enterprise.name}">
          <div className="Enterprise_Logo"><Image src="/SystemismLogoZoom.jpg" alt="Enterprise Logo" height={100} width={100} /></div>
      
          <div className="Enterprise_Details">
            <div><h4>{enterprise.name}</h4></div>
          
            <div>
              <p>{enterprise.number}</p>
              <p>{enterprise.status}</p>
              <p>{enterprise.type}</p>
              <p>{enterprise.director}</p>
            </div>
          </div>
        
          <div>
            <div><p>AR:</p></div>
            <div><p>BO:</p></div>
            <div><p>Tax:</p></div>
          </div>
        </Link>
      </div>  
    </>
  )
}