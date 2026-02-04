import Image from "next/image";
import { updateProfile } from "../../../lib/actions";

export default function ViewProfile() {
  
  return (
    <main>
      <div>
        <div><Image src="" alt="Profile Image" height={100} width={100} /></div>
        <div><h1></h1></div>
      </div>
      
      <div>
        <h1>Personal Details</h1>
        <p>Email:</p>
        <p>Cellphone:</p>
      </div>
      
      <div>
        <h1>Address Details</h1>
        <p>Physical Address:</p>
      </div>
      
      <div>
        <h1>Banking Details</h1>
      </div>
      
      <div>
        <h1>Security Details</h1>
        <p>Password</p>
      </div>
      
      <div>
        <div>
          <div></div>
          <div><h1></h1></div>
        </div>
        
        <div>
          <form action={updateProfile}>
            <div></div>
            
            <div>
              <button type="submit">Save</button>
              <button type="submit">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
