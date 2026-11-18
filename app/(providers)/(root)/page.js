"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const featuredProducts = [
  { name: "Handwoven home décor", category: "Home & living", icon: "✳", color: "sand" },
  { name: "Locally made accessories", category: "Fashion & accessories", icon: "◈", color: "rose" },
  { name: "Small business services", category: "Professional services", icon: "⌘", color: "sage" },
  { name: "Artisan-crafted gifts", category: "Arts & crafts", icon: "✿", color: "lilac" },
];



export default function Home() {
  
  const [ email, setEmail ] = useState("");
  
   const productsTrack = useRef(null);

  const scrollProducts = (direction) => {
    if (!productsTrack.current) return;
    productsTrack.current.scrollBy({
      left: direction * productsTrack.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };
  
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
      
      <div className="HomeSection HomeMarketplace" id="Marketplace" aria-labelledby="Marketplace-Title">
        
        <div className="HomeProductCarousel" aria-labelledby="Products-Title">
          
          <div className="HomeProductCarousel__Heading">
            
            <div>
              <p className="HomeEyebrow">A glimpse of what’s possible</p>
              <h3 id="Products-Title">Explore the marketplace</h3>
              <p className="HomeProductCarousel__Note">Sample categories shown as a design preview.</p>
            </div>
            
            <div className="HomeCarouselControls" aria-label="Marketplace Product Carousel Controls">
              <button type="button" onClick={() => scrollProducts(-1)} aria-label="Scroll products left">←</button>
              <button type="button" onClick={() => scrollProducts(1)} aria-label="Scroll products right">→</button>
            </div>
          </div>
          
          <div className="HomeProductTrack" ref={productsTrack} role="region" aria-label="Featured Marketplace Products" tabIndex={0}>
            {featuredProducts.map((product) => (
              <article className="HomeProductCard" key={product.name}>
                <div className={`HomeProductCard__Art HomeProductCard__Art--${product.color}`} aria-hidden="true">
                  <span>{product.icon}</span>
                  <small>Systemism marketplace</small>
                </div>
                <div className="HomeProductCard__Details">
                  <p>{product.category}</p>
                  <h4>{product.name}</h4>
                  <Link href="/marketplace" aria-label={`Explore ${product.category} in the marketplace`}>Explore category <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
          <Link className="HomeProductCarousel__All HomeButton HomeButton--Secondary" href="/marketplace">View the marketplace <span aria-hidden="true">↗</span></Link>
        </div>
        
        <div className="HomeMarketplace__Copy">
          <p className="HomeEyebrow"></p>
        
          <div><h2 id="Marketplace-Title">Marketplace</h2></div>
          
          <p>Place your products on our marketplace, connect with vendors, and find new ways to grow your business.</p>
          
          <ul className="HomeBenefits" aria-label="Marketplace Benefits">
            <li>Use our marketplace to sell your products</li>
            <li>Connect with customers and businesses</li>
            <li>Monetize on your analaytics</li>
          </ul>
        
          <div className="Image_Placeholder">
            <Image src="/root/marketplace-console.png" alt="Marketplace" height={250} width={300} className="Marketplace_Screenshot"/>
          </div>
        
          <div><h3>Vendor Benefits</h3></div>
          
          <div style={{ marginBottom: "30px", marginTop: "25px", paddingLeft: "20px" }}>
            
            <div style={{ alignItems: "center", display: "flex" }}><Image src="/icons/circle.png" alt="Circle Icon" height={20} width={20} /><p  style={{ marginLeft: "20px" }}>Cost-Effective Start</p></div>
              
            <div style={{ alignItems: "center", display: "flex", marginBottom: "10px" }}><Image src="/icons/circle.png" alt="Circle Icon" height={20} width={20} /><p style={{ marginLeft: "20px" }}>Large Customer Reach</p></div>
              
            <div style={{ alignItems: "center", display: "flex" }}><Image src="/icons/circle.png" alt="Circle Icon" height={20} width={20} /><p  style={{ marginLeft: "20px" }}>Operational Ease</p></div>
            
            <div style={{ alignItems: "center", display: "flex" }}><Image src="/icons/circle.png" alt="Circle Icon" height={20} width={20} /><p  style={{ marginLeft: "20px" }}>Better Insights</p></div>
              
          </div>
          
          <div>
            <Link href="/enterprise/add" className="HomeButton HomeButton--Primary HomeButton--Dark">Become a vendor</Link>
          </div>
        </div>
        
      </div>
      
      <div className="HomeAcademy" aria-labelledby="Academy-Title">
        
        <div className="HomeAcademy__Content">
          
          <p className="HomeEyebrow HomeEyebrow--Light">Learn,Build, Grow</p>
        
          <div><h2 id="Academy-Title">Turn your ambition into action</h2></div>
        
          <p>Build practical skills and explore learning opportunities through the Academy.</p>
        
          <Link className="HomeButton HomeButton--Primary HomeButton--Light">Browse learning</Link>
          
        </div>
        
        <div className="HomeAcademy__Index" aria-hidden="True">
          01<span>Learn</span><br />
          02<span>Apply</span><br />
          03<span>Grow</span>
        </div>
        
      </div>
      
      <div className="HomeSection HomeDirectory" id="Directory" aria-labelledby="Directory-Title">
        
        <div className="HomeDirectory__Copy">
          
          <p className="HomeEyebrow">Support and hire locals</p>
        
          <div><h3 id="Directory-Title">Find a service provider near you</h3></div>
          
          <p>Explore the directory to discover businesses that provide services.</p>
        
        </div>
        
        <div className="HomeDirectory__Map" aria-label="Directory Map Preview">
          <div className="HomeMapPin" aria-hidden="True">●</div>
        </div>
        
        <div>
        
          <div><h3>List your business</h3></div>
        
          <div>
            <div className="Listing_Process">
              
              <div style={{ alignItems: "center", display: "flex", marginBottom: "5px" }}><Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} /><p style={{ marginLeft: "20px" }}>Submit your business details</p></div>
              
              <div style={{ alignItems: "center", display: "flex", marginBottom: "5px" }}><Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} /><p style={{ marginLeft: "20px" }}>Verify your business details</p></div>
              
              <div style={{ alignItems: "center", display: "flex" }}><Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} /><p style={{ marginLeft: "20px" }}>Share your verified listing</p></div>
            
              <div style={{ alignItems: "center", display: "flex" }}><Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} /><p style={{ marginLeft: "20px" }}>Generate revenues and reviews</p></div>
              
            </div>
          
            <div>
              <Link href="/directory">List On The Directory</Link>
            </div>
          </div>
          
        </div>
        
      </div>
      
      <div className="HomeAccelerator" aria-labelledby="Accelerator-Title">
        
        <div className="HomeSection__Intro HomeSection__Intro--Light">
          
          <p className="HomeSection__Intro HomeSection__Intro--Light">Your business journey, supported</p>
        
          <div><h2 id="Accelerator-Title">Grow your business at every stage</h2></div>
          
          <p>Move from your first idea to your next opportunity with support for the journey ahead.</p>
           
          <Link className="HomeButton HomeButton--Primary HomeButton--Light" href="/accelerator">Discover the accelerator</Link>
        
        </div>
        
        <div>
          <ol>
          
            <li>
              <span className="HomeStageList__Number">01</span>
              <div><h3>Ideation & Discovery</h3><p></p></div>
            </li>
          
            <li>
              <span className="HomeStageList__Number">02</span>
              <div><h3>Opportunity Evaluation & Planning</h3><p></p></div>
            </li>
          
            <li>
              <span className="HomeStageList__Number">03</span>
              <div><h3>Startup & Launch</h3><p></p></div>
            </li>
          
            <li>
              <span className="HomeStageList__Number">04</span>
              <div><h3>Growth & Traction</h3><p></p></div>
            </li>
          
            <li>
              <span className="HomeStageList__Number">05</span>
              <div><h3>Maturity & Expansion</h3><p></p></div>
            </li>
          
            <li>
              <span className="HomeStageList__Number">06</span>
              <div><h3>Exit, Renewal & Succession</h3><p></p></div>
            </li>
          
          </ol>
        </div>
        
      </div>
      
      <div className="HomePartners" aria-labelledby="Partners-Title">
        
        <div><h2 id="Partners-Title">Partners</h2></div>
        
        <div className="HomePartners__Logo">
          <div><Image src="/root/partners/XM.png" alt="XM Logo" height={150} width={150} /></div>
        </div>
        
      </div>
    </main>
  );
  
}
