import { programs } from "@/app/lib/programs.js";
import ProgramDetailsCard from "@/app/components/programDetailsCard";

export default function Academy() {
  
  return (
    <main className="Academy">
      
      <h1>Academy Programs</h1>
      
      <input type="search" name="search programs" placeholder="Search Programs" />
      
      <div>{programs.map((program) => (<ProgramDetailsCard key={program.name} program={program} />))}</div>
      
    </main>
  )
}