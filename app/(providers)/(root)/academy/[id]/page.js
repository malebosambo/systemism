export default function Program({ program }) {
  
  return (
    <main>
      
      <div><h1>{program.name}</h1></div>
      
      <div><h1>{program.description}</h1></div>
      
      <div>
        <div><h1>{program.type}</h1></div>
        <div><h1>{program.courses}</h1></div>
        <div><h1>{program.nqfLevel}</h1></div>
      </div>
      
      <div><h1>{program.institution}</h1></div>
      
      <div><h1>{program.price}</h1></div>
      
    </main>
  )
}