import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="Home">
      <div>
        <h1>Products and services for individual and institutional needs.</h1><br />
        
        <Link href="/login">Sign In</Link>
        <Link href="/signup">Sign Up</Link>
      </div>
      
      <div>
        <h1>Blockchain-powered platform for 100% security</h1><br />
        <p>Use our user-friendly and secured platform with peace-of-mind nor compromise to achieve excellent customer satisfaction.</p>
        <Link href="/components/platform">Read more</Link>
      </div>
      
      <div>
        <h1>Access funds that support your industry.</h1><br />
        <p>Get funding for your SME to support your capital expenditure dreams.</p>
        <Link href="/products/funding">View Funds</Link>
      </div>
      
      <div>
        <h1>Sell your products or offer your services</h1><br />
        <p>Easily sell your products in our online shop or advertise your services in our marketplace to generate sales and boost marketing.</p>
        <Link href="/sell">Sell Now</Link>
        <Link href="/advertise">Advertise</Link>
      </div>
      
      <div>
        <h1>SMME Development</h1>
      </div>to
      
      <div>
        <h1>Forex trading at Your fingertips</h1>
      </div>
    </main>
  );
}
