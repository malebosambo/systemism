import Link from "next/link";
import Image from "next/image";

export default function Home() {
  
  return (
    <main className="Home">
      
      <div className="Home_Banner">
        <div><h1 style={{ color: "white" }}>Personal and business solutions</h1></div>
        
        <div className="Paragraph"><p style={{ color: "white" }}>A platform built for economic participation.</p></div>
        
        <div className="Home_Buttons">
          <div className="Button"><Link href="/profiles/personal">Personal</Link></div>
          
          <div className="Button"><Link href="/profiles/business">Business</Link></div>
        </div>
      </div>
      
      <div className="Home_Investing">
        
        <div><h1>Invest for now and the future</h1></div>
        
        <div><p>Our investments provide short-term, medium-term and long-term returns.</p></div>
        
        <div className="Home_InvestingTerms">
          
          <div className="Home_InvestTime">
            
            <div style={{ marginBottom: "10px" }}><h4>Short Term</h4></div>
            <p>Medium to High Risk, Low to High Returns</p>
          
            <div className="Circled_Icon">
              <Link href="/investing/terms/short-term"><p>View more</p>
              </Link>
            </div>
          </div>
        
          <div className="Home_InvestTime">
            
            <div style={{ marginBottom: "10px" }}><h4>Medium Term</h4></div>
            <p>Low to Medium Risk, Low to Moderate Returns</p>
          
            <div className="Circled_Icon">
              <Link href="/investing/terms/medium-term"><p>View more</p></Link>
            </div>
            
          </div>
        
          <div className="Home_InvestTime">
            
            <div style={{ marginBottom: "10px" }}><h4>Long Term</h4></div>
            <p>Low to High Risk, Low to High Returns</p>
          
            <div className="Circled_Icon">
              <Link href="/investing/terms/long-term"><p>View more</p></Link>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
      <div className="Home_Funding">
        
        <div><h1 style={{ color: "white" }}>Access funding for any business stage</h1></div>
        
        <div><p style={{ color: "white" }}>Apply for funding that is tailored for different stages of your business lifecycle.</p></div>
        
        <div className="Home_FundingOptions">
          
          <div className="Home_FundingOption">
            <Link href="/funding/peer-to-peer"><h3>Peer-to-Peer</h3></Link>
            <p>Raise a crowdfunded project budget with flexible requirements.</p>
          </div>
          
          <div className="Home_FundingOption">
            <Link href="/funding/equity"><h3>Equity</h3></Link>
            <p>Sell some shares to investors for funding.</p>
          </div>
          
          <div className="Home_FundingOption">
            <Link href="/funding/invoice-financing"><h3>Invoince Financing</h3></Link>
            <p>Receive partial or full payment on an invoice sent to debtors.</p>
          </div>
          
          <div className="Home_FundingOption">
            <Link href="/funding/asset-rental"><h3>Asset Rental</h3></Link>
            <p>Rent available assets through contracts.</p>
          </div>
          
          <div className="Home_FundingOption">
            <Link href="/funding/loan"><h3>Loan</h3></Link>
            <p>Apply for long-term & low interest cash with flexible repayment.</p>
          </div>
          
          <div className="Home_FundingOption">
            <Link href="/funding/credit"><h3>Credit</h3></Link>
            <p>Check availability of an advance from vendors.</p>
          </div>
          
          <div className="Home_FundingOption">
            <Link href="/funding/balance-sheet"><h3>Balance Sheet</h3></Link>
            <p>Increase capital through your financial books.</p>
          </div>
          
        </div>
        
      </div>
      
      <div className="Home_Marketplace">
        
        <div className="Image_Placeholder"><Image src="/root/marketplace-console.png" alt="Marketplace" height={250} width={300} className="Marketplace_Screenshot"/></div>
        
        <div className="Vendor_Benefits">
          <div><h1>Marketplace Vendor Benefits</h1></div>
          
          <div style={{ marginBottom: "30px", marginTop: "25px", paddingLeft: "20px" }}>
              
            <div style={{ alignItems: "center", display: "flex", marginBottom: "10px" }}><Image src="/icons/circle.png" alt="Circle Icon" height={20} width={20} /><p style={{ marginLeft: "20px" }}>Add & edit inventory</p></div>
              
            <div style={{ alignItems: "center", display: "flex" }}><Image src="/icons/circle.png" alt="Circle Icon" height={20} width={20} /><p  style={{ marginLeft: "20px" }}>Accept payments</p></div>
              
          </div>
          
          <div className="Home_Buttons">
            <div className="Button">
              <Link href="/enterprise/add">Start Application</Link>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="Home_Academy">
        
        <div><h1 style={{ color: "white" }}>Get certified with our academy programs</h1></div><br />
        
        <div><p style={{ color: "white" }}>Browse programs by selecting an industry below.</p></div>
        
        <div className="Program_Industries"></div>
        
        <div></div>
        
      </div>
      
      <div className="Home_Directory">
        
        <div><h1>Search for a service provider</h1></div>
        
        <div className="Listings_Map">
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
          <div className="Listing_Process">
              
            <div style={{ alignItems: "center", display: "flex", marginBottom: "5px" }}><Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} /><p style={{ marginLeft: "20px" }}>Submit enterprise details</p></div>
              
            <div style={{ alignItems: "center", display: "flex", marginBottom: "5px" }}><Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} /><p style={{ marginLeft: "20px" }}>Share your enterprise profile</p></div>
              
            <div style={{ alignItems: "center", display: "flex" }}><Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} /><p style={{ marginLeft: "20px" }}>Generate revenue and reviews</p></div>
              
          </div>
          
          <div className="Home_Buttons">
            <div className="Button">
              <Link href="/directory">List My Business</Link>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="Home_Accelerator">
        
        <div><h1 style={{ color: "white" }}>Accelerator</h1></div>
        
        <div>
          <div><p>Business management</p></div>
          <div><p>Finance management</p></div>
          <div><p>Branding & marketing</p></div>
        </div>
        
      </div>
      
      <div className="Home_Partners">
        
        <div style={{ textAlign: "center" }}><h1>Partners</h1></div>
        
        <div className="Partner_Logos">
          <div><Image src="/root/partners/XM.png" alt="XM Logo" height={150} width={150} /></div>
        </div>
        
      </div>
    </main>
  );
  
}
