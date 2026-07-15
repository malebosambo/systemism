import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="Home">
      <div className="Home_Banner">
        <div><h1>Products and services for individuals and SMMEs.</h1></div>
        
        <div><p>Join the all-in-one platform that provides financial independence, wealth generation and economic participation.</p></div>
        
        <div className="Home_Buttons">
          <div className="Button"><Link href="/login"><p>Sign In</p></Link></div>
          <div className="Button"><Link href="/signup">Sign Up</Link></div>
        </div>
      </div>
      
      <div className="Home_Investing">
        <div><h1>Invest for now and the future.</h1></div>
        
        <div><p>Our investments provide short-term, medium-term and long-term returns on capital.</p></div>
        
        <div className="Button"><Link href="/investing">Investing</Link></div>
      </div>
      
      <div className="Home_Funding">
        <div><h1>Access funding for any business stage.</h1></div>
        
        <div><p>Apply for funding that is tailored for different stages of your business lifecycle.</p></div>
        
        <div className="Button"><Link href="/funding">Apply</Link></div>
      </div>
      
      <div className="Home_Marketplace">
        <div><h1>Sell or buy products on the marketplace.</h1></div>
        
        <div className="Home_Buttons">
          <div className="Button">
            <Link href="/marketplace/vendor-application">Vendor Application</Link>
          </div>
          <div className="Button">
            <Link href="/marketplace">Shop</Link>
          </div>
        </div>
      </div>
      
      <div className="Home_Academy">
        <div><h1>Our academy programs offer strategic development.</h1></div>
        
        <div className="Home_Buttons">
          <div className="Button"><Link href="/academy/enroll">Enroll</Link></div>
          <div className="Button"><Link href="/academy/programs">Browse</Link></div>
        </div>
      </div>
      
      <div className="Home_Directory">
        <div><h1>Need services fast? Search for a business in your area.</h1></div>
        
        <div><h2>List your business on our directory.</h2></div>
        
        <div>
          <div>
            <p>1. Register</p>
            <p>2. Submit listing</p>
            <p>3. Share & earn</p>
          </div>
          
          <div className="Button"><Link href="/directory">List SMME</Link></div>
        </div>
      </div>
      
      <div className="Home_Partners">
        
      </div>
    </main>
  );
}
