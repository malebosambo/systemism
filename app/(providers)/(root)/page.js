"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  
  const [ email, setEmail ] = useState("");
  
  return (
    <main className="HomePage">
      
      <div className="HomeHero" aria-labelledby="home-title">
        <div className="HomeHero__Content">
          
          <div><p className="HomeEyebrow HomeEyebrow--Light">The system for everyone.</p></div>
          
          <div><h1 id="Home-Title">Personal and business solutions</h1></div>
        
          <div><p className="HomeHero__Summary">A platform built for economic participation.</p></div>
        
          <div className="HomeHero__Actions">
            <div><Link href="/profiles/personal" className="HomeButton HomeButton--Light">Explore Personal</Link></div>
          
            <div><Link href="/profiles/business" className="HomeButton HomeButton--Outline">Explore Business</Link></div>
          </div>
        </div>
        
        <div><a className="HomeHero__Scroll" href="#investing">Discover what you can do <span aria-hidden="true">↓</span></a></div>
      </div>
      
      <div className="HomeSection HomeInvesting" id="Investing" aria-labelledby="Investing-Title">
        
        <div className="HomeSection__Intro">
          <p className="HomeEyebrow">Build for your future.</p>
          <h2 id="Investing-Title">Invest for now and the future</h2>
          <p>Explore investment opportunities across short-, medium-, and long-term horizons.</p>
        </div>
        
        <div className="HomeInvestmentGrid">
          
          <div className="HomeInvestmentCard">
            
            <span className="HomeCardNumber">1</span>
            
            <div><h3>Short Term</h3></div>
            
            <hr className="HomeInvestmentCard__Divider" />
            
            <p>Medium to high risk, with the potential for low to high returns.</p>
          
            <div>
              <Link href="/investing/terms/short-term" className="HomeTextLink HomeButton HomeButton--Secondary">Browse options <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        
          <div className="HomeInvestmentCard">
            
            <span className="HomeCardNumber">2</span>
            
            <div><h3>Medium Term</h3></div>
            
            <hr className="HomeInvestmentCard__Divider" />
            
            <p>Low to medium risk, with the potential for low to moderate returns</p>
          
            <div>
              <Link href="/investing/terms/medium-term" className="HomeTextLink HomeButton HomeButton--Secondary">Browse options <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        
          <div className="HomeInvestmentCard">
            
            <span className="HomeCardNumber">2</span>
            
            <div><h3>Long Term</h3></div>
            
            <hr className="HomeInvestmentCard__Divider" />
            
            <p>Explore a longer horizons with a range or risk and return profiles.</p>
          
            <div>
              <Link href="/investing/terms/long-term" className="HomeTextLink HomeButton HomeButton--Secondary">Browse options <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          
        </div>
        
      </div>
      
      <div className="HomeFunding">
        
        <div className="HomeFunding__Inner">
          
          <div className="HomeSection__Intro HomeSection__Intro--Light">
          
            <p className="HomeEyebrow HomeEyebrow--Light">Funds at every stage</p>
          
            <div><h2>Access funding for any business stage</h2></div>
        
            <p>Apply for funding that is tailored for different stages of your business lifecycle.</p>
            
            <div>
              <Link href="/funding" className="HomeButton HomeButton--Primary HomeButton--Light">Explore funding</Link>
            </div>
          </div>
        
          <div className="HomeFundingGrid">
          
            <div>
              <Link href="/funding/peer-to-peer" className="HomeFundingCard">
                <h3>Peer-to-Peer</h3>
                <p>Raise a crowdfunded project budget with flexible requirements.</p>
                <span className="HomeFundingCard__Action">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          
            <div>
              <Link href="/funding/equity" className="HomeFundingCard">
                <h3>Equity</h3>  
                <p>Sell some shares to investors for funding.</p>
                <span className="HomeFundingCard__Action">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          
            <div>
              <Link href="/funding/invoice-financing">
                <h3>Invoice Financing</h3>
                <p>Receive partial or full payment on an invoice sent to debtors.</p>
                <span className="HomeFundingCard__Action">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          
            <div className="Home_FundingOption">
              <Link href="/funding/asset-rental">
                <h3>Asset Rental</h3>
                <p>Rent available assets through contracts.</p>
                <span className="HomeFundingCard__Action">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          
            <div className="Home_FundingOption">
              <Link href="/funding/loan">
                <h3>Loan</h3>
                <p>Apply for long-term & low interest cash with flexible repayment.</p>
                <span className="HomeFundingCard__Action">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          
            <div className="Home_FundingOption">
              <Link href="/funding/credit">
                <h3>Credit</h3>
                <p>Check availability of an advance from vendors.</p>
                <span className="HomeFundingCard__Action">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          
            <div className="Home_FundingOption">
              <Link href="/funding/balance-sheet">
                <h3>Balance Sheet</h3>
                <p>Increase capital through your financial books.</p>
                <span className="HomeFundingCard__Action">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          </div>
          
        </div>
      
      </div>
      
      <div className="Home_Newsletter">
        
        <div>
          <h2>Join our weekly newsletter.</h2>
        </div>
        
        <div className="Form_Newsletter">
          <form onSubmit="">
            <div><input type="email" name="newsletter" onChange="" value={email} placeholder="Email" /></div>
            
            <div><button type="submit" className="Button_Primary">Subscribe</button></div>
          </form>
        </div>
        
      </div>
      
      <div className="Home_Marketplace">
        
        <div><h3>Marketplace</h3></div>
        
        <div className="Image_Placeholder">
          <Image src="/root/marketplace-console.png" alt="Marketplace" height={250} width={300} className="Marketplace_Screenshot"/>
        </div>
        
        <div className="Vendor_Benefits">
          <div><h3>Vendor Benefits</h3></div>
          
          <div style={{ marginBottom: "30px", marginTop: "25px", paddingLeft: "20px" }}>
            
            <div style={{ alignItems: "center", display: "flex" }}><Image src="/icons/circle.png" alt="Circle Icon" height={20} width={20} /><p  style={{ marginLeft: "20px" }}>Cost-Effective Start</p></div>
              
            <div style={{ alignItems: "center", display: "flex", marginBottom: "10px" }}><Image src="/icons/circle.png" alt="Circle Icon" height={20} width={20} /><p style={{ marginLeft: "20px" }}>Large Customer Reach</p></div>
              
            <div style={{ alignItems: "center", display: "flex" }}><Image src="/icons/circle.png" alt="Circle Icon" height={20} width={20} /><p  style={{ marginLeft: "20px" }}>Operational Ease</p></div>
            
            <div style={{ alignItems: "center", display: "flex" }}><Image src="/icons/circle.png" alt="Circle Icon" height={20} width={20} /><p  style={{ marginLeft: "20px" }}>Better Insights</p></div>
              
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
        
        <div><p style={{ color: "white" }}>Browse programs by selecting a qualification type below.</p></div>
        
        <div className="Qualification_Type">
          
        </div>
        
        <div></div>
        
      </div>
      
      <div className="Home_Directory">
        
        <div><h3>Search for a service provider</h3></div>
        
        <div style={{ marginBottom: "30px" }}><input type="search" name="business listing" placeholder="Search for a service" className="Input" /><button type="submit">Search</button></div>
        
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
          
          <div><p>Ideation & Discovery</p></div>
          
          <div><p>Opportunity Evaluation & Planning</p></div>
          
          <div><p>Startup & Launch</p></div>
          
          <div><p>Growth & Traction</p></div>
          
          <div><p>Maturity & Expansion</p></div>
          
          <div><p>Exit, Renewal & Succession</p></div>
          
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
