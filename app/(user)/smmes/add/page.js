import Form from "next/form";

export default function AddSMME() {
  
  return (
    <div>
      <div><h1>Add New SMME</h1></div>
      
      <div>
        <Form action="">
          <input type="text" name="Business Name" placeholder="Business Name" onChange="" value="" required />
          <input type="text" name="Enterprise Number" placeholder="Enterprise Number" onChange="" value="" required />
    
          <ul>
            <li><input type="radio" name="Private" value="Private" required />Private</li>
            <li><input type="radio" name="Corporation" value="Close Corporation" required />Close Corporation</li>
          </ul>
    
          <input type="textarea" name="Physical Address" placeholder="Physical Address" onChange="" value="" required />
          <input type="text" name="Directors" placeholder="Director Full Name" onChange="" value="" required />
    
          <button type="submit">Add SMME</button>
        </Form>
      </div>
    </div>
  )
}
