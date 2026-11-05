import { programs } from "@/app/lib/programs.js";
import ProgramDetailsCard from "@/app/components/programDetailsCard";

export default function BrowsePrograms() {
  
  return (
    <main>
      
      <div><h1>Browse Programs</h1></div>
      
      <div><input type="search" name="search programs" placeholder="Search Programs" /></div>
      
      <div>{programs.map((program) => (<ProgramDetailsCard key={program.name} program={program} />))}</div>
    </main>
  )
}