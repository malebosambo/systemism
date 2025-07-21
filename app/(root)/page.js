import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="Home">
      <div className="Home_Banner">
        <h1>Products and services for individual and institutional needs.</h1><br />
        
        <Link href="/../login">Sign In</Link>
        <Link href="/../signup">Sign Up</Link>
      </div>
      
      <div>
        <h1>Invest for now and the future.</h1>
        <Link href="/investing"></Link>
      </div>
      
      <div>
        <h1>Access funding for every business stage.</h1><br />
        
        <p>Apply for funding that is tailored for different stages of your business lifecycle.</p>
        <Link href="/funding">Funding</Link>
      </div>
      
      <div>
        <h1>Sell or buy products on the marketplace.</h1><br />
        
        <div>
          <div>
            <Link href="/marketplace/vendor-application">Start Vendor Application</Link>
          </div>
          <div>
            <Link href="/shop">Marketplace</Link>
          </div>
        </div>
      </div>
      
      <div className="Academy">
        <h1>Our academy programs offer strategic development.</h1>
        
        <Link href="/academy/enroll">Enroll Today</Link>
        <Link href="/academy/programs">Browse Programs</Link>
      </div>
      
      <div>
        <h1>Need services fast? Search for a business in your area.</h1><br/>
        
        
        
        <h2>List your business on our directory.</h2>
        <div>
          <div>
            <p>1. Register</p>
            <p>2. Submit form</p>
            <p>3. Share</p>
          </div>
          <Link href="/directory-listing">List a business</Link>
        </div>
      </div>
    </main>
  );
}
