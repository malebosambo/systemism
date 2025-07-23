import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="Home">
      <div className="Home_Banner">
        <h1>Products and services for individuals and SMMEs.</h1><br />
        
        <div className="Home_Buttons">
          <div className="Button"><Link href="/login">Sign In</Link></div>
          <div className="Button"><Link href="/signup">Sign Up</Link></div>
        </div>
      </div>
      
      <div className="Home_Investing">
        <h1>Invest for now and the future.</h1><br />
        
        <p>Our investments provide short, medium and long term returns.</p><br />
        
        <div className="Nav"><Link href="/investing">Start Investing</Link></div>
      </div>
      
      <div className="Home_Funding">
        <h1>Access funding for any business stage.</h1><br />
        
        <p>Apply for funding that is tailored for different stages of your business lifecycle.</p><br />
        
        <div className="Nav"><Link href="/funding">Apply</Link></div>
      </div>
      
      <div className="Home_Marketplace">
        <h1>Sell or buy products on the marketplace.</h1><br />
        
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
        <h1>Our academy programs offer strategic development.</h1><br />
        
        <div className="Home_Buttons">
          <div className="Button"><Link href="/academy/enroll">Enroll</Link></div>
          <div className="Button"><Link href="/academy/programs">Browse</Link></div>
        </div>
      </div>
      
      <div className="Home_Directory">
        <h1>Need services fast? Search for a business in your area.</h1><br/>
        
       
        
        <h2>List your business on our directory.</h2><br />
        
        <div>
          <div>
            <p>1. Register</p>
            <p>2. Submit listing</p>
            <p>3. Share</p>
          </div>
          
          <div className="Nav"><Link href="/directory">List SMME</Link></div>
        </div>
      </div>
    </main>
  );
}
