"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  
  return (
    <main className="Home">
      
      <div className="Home_Banner">
        <div><h1 style={{ color: "white" }}>Personal and business solutions</h1></div>
        
        <div className="Paragraph"><p style={{ color: "white" }}>A platform built for economic participation.</p></div>
        
        <div className="Home_Buttons">
          <div className="Button_Primary"><Link href="/profiles/personal">Personal</Link></div>
          
          <div className="Button_Primary"><Link href="/profiles/business">Business</Link></div>
        </div>
      </div>
      
      <div className="Home_Investing">
        
        <div><h3>Invest for now and the future</h3></div>
        
        <div><p>Our investments provide short-term, medium-term and long-term returns.</p></div>
        
        <div className="Home_InvestingTerms">
          
          <div className="Home_InvestTime">
            <div style={{ marginBottom: "5px" }}><h6>Short Term</h6></div>
            
            <p>Medium to High Risk, Low to High Returns</p>
          
            <div className="Button_Secondary">
              <Link href="/investing/terms/short-term"><p>Browse</p>
              </Link>
            </div>
            <div style={{ backgroundColor: "skyblue", padding: "5px" }}><p>Browse</p></div>
          </div>
        
          <div className="Home_InvestTime">
            <div style={{ marginBottom: "5px" }}><h6>Medium Term</h6></div>
            
            <p>Low to Medium Risk, Low to Moderate Returns</p>
          
            <div className="Circled_Icon">
              <Link href="/investing/terms/medium-term"><p>Browse</p></Link>
            </div>
          </div>
        
          <div className="Home_InvestTime">
            <div style={{ marginBottom: "5px" }}><h6>Long Term</h6></div>
            
            <div>
              <p>Low to High Risk.</p> 
              <p>Low to High Returns</p>
            </div>
          
            <div className="Circled_Icon">
              <Link href="/investing/terms/long-term"><p>Browse</p></Link>
            </div>
          </div>
          
        </div>
        
      </div>
      
      <div className="Home_Funding">
        
        <div><h3 style={{ color: "white" }}>Access funding for any business stage</h3></div>
        
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
      
      <div className="Home_Newsletter">
        
        <div className="Form_Newsletter">
          <form onSubmit="">
            <div><input type="email" name="newsletter" onChange="" value={email} placeholder="Email" className="Input" /></div>
            
            <div><button type="submit" className="Button_Primary">Subscribe</button></div>
          </form>
        </div>
        
      </div>
      
      <div className="Home_Marketplace">
        
        <div><h3>Marketplace</h3></div>
        
        <div className="Image_Placeholder"><Image src="/root/marketplace-console.png" alt="Marketplace" height={250} width={300} className="Marketplace_Screenshot"/></div>
        
        <div className="Vendor_Benefits">
          <div><h3>Vendor Benefits</h3></div>
          
          <div style={{ marginBottom: "30px", marginTop: "25px", paddingLeft: "20px" }}>
              
            <div style={{ alignItems: "center", display: "flex", marginBottom: "10px" }}><Image src="/icons/circle.png" alt="Circle Icon" height={20} width={20} /><p style={{ marginLeft: "20px" }}>Add & edit inventory</p></div>
              
            <div style={{ alignItems: "center", display: "flex" }}><Image src="/icons/circle.png" alt="Circle Icon" height={20} width={20} /><p  style={{ marginLeft: "20px" }}>Accept payments</p></div>
              
          </div>
          
          <div className="Home_Buttons">
            <div className="Button_Primary">
              <Link href="/enterprise/add">Start Application</Link>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="Home_Academy">
        
        <div><h3 style={{ color: "white" }}>Get certified with our academy programs</h3></div><br />
        
        <div><p style={{ color: "white" }}>Browse programs by selecting an industry below.</p></div>
        
        <div className="Program_Industries"></div>
        
        <div></div>
        
      </div>
      
      <div className="Home_Directory">
        
        <div><h3>Search for a service provider</h3></div>
        
        <div style={{ marginBottom: "30px" }}><input type="search" name="business listing" placeholder="Search for a service" /></div>
        
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
        
        <div style={{ textAlign: "center" }}><h3>List your business</h3></div>
        
        <div>
          <div className="Listing_Process">
              
            <div style={{ alignItems: "center", display: "flex", marginBottom: "5px" }}><Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} /><p style={{ marginLeft: "20px" }}>Submit your business details</p></div>
              
            <div style={{ alignItems: "center", display: "flex", marginBottom: "5px" }}><Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} /><p style={{ marginLeft: "20px" }}>Verify your business details</p></div>
              
            <div style={{ alignItems: "center", display: "flex" }}><Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} /><p style={{ marginLeft: "20px" }}>Share your verified listing</p></div>
            
            <div style={{ alignItems: "center", display: "flex" }}><Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} /><p style={{ marginLeft: "20px" }}>Generate revenues and reviews</p></div>
              
          </div>
          
          <div className="Home_Buttons">
            <div className="Button_Primary">
              <Link href="/directory">List On The Directory</Link>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="Home_Accelerator">
        
        <div style={{ marginBottom: "15px" }}><h1 style={{ color: "white" }}>Accelerator</h1></div>
        
        <div>
          
          <div><p>Business Model</p></div>
          
          <div><p>Financing</p></div>
          
          <div><p>Profit & Loss</p></div>
          
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
