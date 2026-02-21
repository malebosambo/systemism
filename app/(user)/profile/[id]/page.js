import Image from "next/image";
import { UpdateProfile } from "../../../lib/actions";

export default function ViewProfile() {
  
  return (
    <main>
      <div>
        <div><Image src="" alt="Profile Image" height={100} width={100} /></div>
        
        <div><h1></h1></div>
      </div>
      
      <div>
        <h1>Personal Details</h1>
        <hr />
        <p>Email:</p>
        <p>Cellphone:</p>
      </div>
      
      <div>
        <h1>Address Details</h1>
        <hr />
        <p>Physical Address:</p>
        <p>Postal Address:</p>
      </div>
      
      <div>
        <h1>Banking Details</h1>
      </div>
      
      <div>
        <h1>Security Details</h1>
        <hr />
        <p>Password</p>
      </div>
      
      <div>
        <div>
          <div></div>
          <div><h1></h1></div>
          <div></div>
        </div>
        
        <div>
          <form action={UpdateProfile}>
            <div>
              <input type="text" name="fullName" />
            </div>
            
            <div>
              <input type="email" name="email" />
            </div>
            
            <div>
              <input type="telephone" name="cellphone" />
            </div>
            
            <div>
              <button type="submit">Save</button>
              <button type="submit">Cancel</button>
            </div>
          </form>
        </div>
        
        <div>
          <form action={}>
            <div><input type="textarea" name="phyAddress" required /></div>
            
            <div><input type="textarea" name="postalAddress" /></div>
            
            <div>
              <button type="submit">Save</button>
              <button type="submit">Cancel</button>
            </div>
          </form>
        </div>
        
        <div>
          <form action={}>
            <div><input type="number" name="accNumber" required /></div>
            
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
