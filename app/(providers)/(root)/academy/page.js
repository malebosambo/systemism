import { programs } from "@/app/lib/programs.js";
import ProgramDetailsCard from "@/app/components/programDetailsCard";

export default function Academy() {
  
  return (
    <main>
      
      <div><h1>Academy Programs</h1></div>
      
      <div>{programs.map((program) => (<ProgramDetailsCard key={program.name} program={program} />))}</div>
      
    </main>
  )
}