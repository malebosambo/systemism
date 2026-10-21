export default function ProgramDetailsCard({ key, program }) {
  
  return (
    <>
      <div key={key}>
        <div><h3>{program.name}</h3></div>
      
        <div><p>{program.details}</p></div>
      </div>
    </> 
  )
}