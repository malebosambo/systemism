import Link from "next/link";
import Image from "next/image";

export default function EnterpriseDetailsCard({ key, enterprise }) {
  
  return (
    <>
      <div key={key} className="EnterpriseDetailsCard">
        <Link href="/enterprise/${enterprise.name}">
          <div><Image src="/SystemismLogoZoom.jpg" alt="Enterprise Logo" height={100} width={100} className="Enterprise_Logo" /></div>
      
          <div className="EnterpriseDetails">
            <div><h4>{enterprise.name}</h4></div>
          
            <div>
              <p>{enterprise.number}</p>
              <p>{enterprise.status}</p>
              <p>{enterprise.type}</p>
              <p>{enterprise.director}</p>
            </div>
          </div>
        
          <div style={{ display: "flex", justifyContent: "space-evenly", padding: "20px" }}>
            <div><p>AR:</p></div>
            <div><p>BO:</p></div>
            <div><p>Tax:</p></div>
          </div>
        </Link>
      </div>  
    </>
  )
}