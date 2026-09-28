import Link from "next/link";

export default function EnterpriseDetailsCard({ enterprise }) {
  
  return (
    <>
      <div key={enterprise.name}><Link href="/enterprise/${enterprise.name}">
        <div className="Enterprise_Logo"></div>
      
        <div className="Enterprise_Details">
          <h1>{enterprise.name}</h1>
          <hr />
          <h2>{enterprise.number}</h2>
          <h2{enterprise.type}></h2>
          <h2>{enterprise.director}</h2>
        </div>
      
        <div className="Enterprise_Location">
          <h3>Location:</h3>
          <p>{enterprise.address}</p>
        </div>
      </Link></div>  
    </>
  )
}