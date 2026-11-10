import Link from "next/link";

export default function ProgramDetailsCard({ key, program }) {
  
  return (
    <>
      <div key={key} className="ProgramDetailsCard">
        <Link href="/programs/[id]" as={`/programs/${program.name}`} >
        
          <div><h3>{program.name}</h3></div>
      
          <div><p>{program.description}</p></div>
        
          <div><p>{program.price}</p></div>
        
        </Link>
      </div>
    </> 
  )
}