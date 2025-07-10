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
        <h1>Blockchain secure technology.</h1><br />
        <p>Use our user-friendly and secured platform with peace-of-mind nor compromise to achieve excellent customer satisfaction.</p>
        <Link href="/components/platform">Read more</Link>
      </div>
      
      <div>
        <h1>Access funding for every business stage.</h1><br />
        
        <p>Apply for funding at different stages of your business lifecycle.</p>
        <Link href="/funding">Funding</Link>
      </div>
      
      <div>
        <h1>Sell products locally and internationally.</h1><br />
        <p>The vendor marketplace provides businesses an opportunity to generate sales by placing their products in our online shop.</p>
        <Link href="/sell">Start Selling</Link>
      </div>
      
      <div>
        <h1>Develop your business strategically.</h1>
        <p></p>
        <Link href="/smme-development"></Link>
      </div>to
      
      <div>
        <h1>Need services fast? Search for a local business.</h1>
        <p></p>
        
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
