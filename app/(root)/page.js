import Link from "next/link";
import Image from "next/image";

export default function Home() 

{
  
  return (
    <main className="Home">
      
      <div className="Home_Banner">
        <div><h1 style={{ color: "white" }}>Products and services for people and businesses</h1></div>
        
        <div><p style={{ color: "white" }}>Our platform provides financial independence, wealth generation and economic participation.</p></div>
        
        <div className="Home_Buttons">
          <div className="Button"><Link className="Nav" href="/login">Personal</Link></div>
          <div className="Button"><Link className="Nav" href="/signup">Business</Link></div>
        </div>
      </div>
      
      <div className="Home_Investing">
        
        <div><h1>Invest for now and the future.</h1></div>
        
        <div><p>Our investments provide short-term, medium-term and long-term returns on capital.</p></div>
        
        <div className="Home_InvestingTerms">
          
          <div className="Home_InvestTime">
            <div><Image src="/icons/clock.png" alt="Clock Icon" height={25} width={25} /></div>
            
            <h3>Short Term</h3>
            <p>High Risk, High Reward</p>
          
            <div className="Circled_Icon">
              <Link href="/investing/short-term">View more<span style={{ marginLeft: "10px" }}><Image src="/icons/circled-right.png" alt="Right Arrow" height={20} width={20} /></span>
              </Link>
            </div>
          </div>
        
          <div className="Home_InvestTime">
            <div><Image src="/icons/clock.png" alt="Clock Icon" height={25} width={25} /></div>
            
            <h3>Medium Term</h3>
            <p>Moderate Risk, Moderate Reward</p>
          
            <div className="Circled_Icon">
              <Link href="/investing/medium-term">View more<span style={{ marginLeft: "10px" }}><Image src="/icons/circled-right.png" alt="Right Arrow" height={20} width={20} /></span></Link>
            </div>
          </div>
        
          <div className="Home_InvestTime">
            <div><Image src="/icons/clock.png" alt="Clock Icon" height={25} width={25} /></div>
            
            <h3>Long Term</h3>
            <p>Low Risk, Low Reward</p>
          
            <div className="Circled_Icon">
              <Link href="/investing/long-term">View more<span style={{ marginLeft: "10px" }}><Image src="/icons/circled-right.png" alt="Right Arrow" height={20} width={20} /></span></Link>
            </div>
          </div>
          
        </div>
        
      </div>
      
      <div className="Home_Funding">
        
        <div><h1 style={{ color: "white" }}>Access funding for any business stage</h1></div>
        
        <div><p style={{ color: "white" }}>Apply for funding that is tailored for different stages of your business lifecycle.</p></div>
        
        <div className="Button"><Link className="Nav" href="/funding">Apply</Link></div>
        
      </div>
      
      <div className="Home_Marketplace">
        
        <div><h1>Sell products on the marketplace</h1></div>
        
        <div style={{ borderRadius: "15px", marginTop: "20px" }}><Image src="/root/marketplace-console.png" alt="Marketplace Admin Console" height={250} width={300} /></div>
        
        <div className="Home_Buttons">
          <div className="Button">
            <Link className="Nav" href="/marketplace/vendor-application">Vendor Application<span style={{ marginLeft: "5px" }}><Image src="/icons/circled-right.png" alt="Circled Right Icon" height={10} width={10} /></span></Link>
          </div>
        </div>
        
      </div>
      
      <div className="Home_Academy">
        
        <div><h1>Enroll in our academy programs for professional development</h1></div>
        
        
      </div>
      
      <div className="Home_Directory">
        
        <div><h1>Need services fast? Search for a service provider in your area</h1></div>
        
        <div>
          <iframe
            src="https://maps.app.goo.gl/pFnUxfgW8fqiQC3f9?g_st=ac"
            title="Google Maps"
            width="100%"
            height="450"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
        
        <div><h2>List on the directory</h2></div>
        
        <div>
          <div>
            <ul>
              <li><div><span><Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} /><p>Create a profile</p></span></div></li>
              <li><div><span><Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} /><p>Share your profile</p></span></div></li>
              <li><div><span><Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} /><p>Generate revenue and reviews</p></span></div></li>
            </ul>
          </div>
          
          <div className="Button"><Link className="Nav" href="/directory">List SMME</Link></div>
        </div>
        
      </div>
      
      <div className="Home_Partners">
        
        <div style={{ textAlign: "center" }}><h1>Partners</h1></div>
        
        <div className="PartnerLogos">
          <div><Image src="/root/partners/XM.png" alt="XM Logo" height={150} width={150} /></div>
        </div>
        
      </div>
    </main>
  );
  
}
