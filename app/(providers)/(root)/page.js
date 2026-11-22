"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const featuredProducts = [
  { name: "Handwoven home décor", category: "Home & living", icon: "✳", color: "sand" },
  { name: "Locally made accessories", category: "Fashion & accessories", icon: "◈", color: "rose" },
  { name: "Small business services", category: "Professional services", icon: "⌘", color: "sage" },
  { name: "Artisan-crafted gifts", category: "Arts & crafts", icon: "✿", color: "lilac" },
];

export default function Home() {
  
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
      
      <div className="HomeHero" aria-labelledby="Home-Title">
        
        <div className="HomeHero__Content">
          
          <p className="HomeEyebrow HomeEyebrow--Light">The system for everyone</p>
          
          <h1 id="Home-Title">Personal and business solutions</h1>
        
          <p className="HomeHero__Summary">A platform built for economic participation.</p>
        
          <div className="HomeHero__Actions">
            <div><Link href="/profiles/personal" className="HomeButton HomeButton--Light">Explore Personal</Link></div>
          
            <div><Link href="/profiles/business" className="HomeButton HomeButton--Outline">Explore Business</Link></div>
          </div>

          <div><a className="HomeHero__Scroll" href="#investing">Discover what you can do <span aria-hidden="true">↓</span></a></div>

        </div>
        
      </div>
      
      <div className="HomeSection HomeInvesting" id="Investing" aria-labelledby="Investing-Title">
        
        <div className="HomeSection__Intro">

          <p className="HomeEyebrow">Build for your future</p>

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
            
            <p>Explore longer horizons with a range or risk and return profiles.</p>
          
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
          
            <h2>Access funding for your business</h2>
        
            <p>Find funding pathways designed around different needs and stages of your business journey.</p>
            
            <Link href="/funding" className="HomeButton HomeButton--Light">Explore funding</Link>
            
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
              <Link href="/funding/invoice-financing" className="HomeFundingCard">
                <h3>Invoice Financing</h3>
                <p>Receive partial or full payment on an invoice sent to debtors.</p>
                <span className="HomeFundingCard__Action">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          
            <div>
              <Link href="/funding/asset-rental" className="HomeFundingCard">
                <h3>Asset Rental</h3>
                <p>Rent available assets through contracts.</p>
                <span className="HomeFundingCard__Action">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          
            <div>
              <Link href="/funding/loan" className="HomeFundingCard">
                <h3>Loan and Credit</h3>
                <p>Long-term & low interest cash or advances from vendors.</p>
                <span className="HomeFundingCard__Action">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          
            <div>
              <Link href="/funding/balance-sheet" className="HomeFundingCard">
                <h3>Balance Sheet</h3>
                <p>Increase capital through your financial books.</p>
                <span className="HomeFundingCard__Action">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            </div>
            
          </div>
          
        </div>
      
      </div>
      
      <div className="HomeSection HomeMarketplace" id="Marketplace" aria-labelledby="Marketplace-Title">
        
        <div className="HomeProductCarousel" aria-labelledby="Products-Title">
          
          <div className="HomeProductCarousel__Heading">
            
            <div>

              <p className="HomeEyebrow">Shop needs and wants</p>

              <h2 id="Products-Title">Explore the marketplace</h2>

              <p className="HomeProductCarousel__Note">Find products from your favourite local producer.</p>

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

          <Link className="HomeProductCarousel__All HomeButton HomeButton--Light" href="/marketplace">Shop on marketplace <span aria-hidden="True">↗</span></Link>
          
        </div>
        
        <div className="HomeMarketplace__Copy">
          
          <p className="HomeEyebrow">Sell your products</p>
        
          <h2 id="Marketplace-Title">Marketplace vendors</h2>
          
          <p>Place your products on our marketplace, connect with vendors, and find new ways to grow your business.</p>
          
          <ul className="HomeBenefits" aria-label="Marketplace Benefits">
            <li>Use our marketplace to sell your products</li>
            <li>Connect with customers and other vendors</li>
            <li>Monetize on your analaytics</li>
          </ul>
        
          <h3>Vendor benefits:</h3>
          
          <div style={{ marginBottom: "30px", marginTop: "20px" }}>
            
            <ul>
              
              <li><div style={{ alignItems: "center", display: "flex" }}>
                <Image src="/icons/circle.png" alt="Circle Icon" height={15} width={15} />
                <p style={{ marginLeft: "20px" }}>Cost-Effective Start</p>
              </div></li>
              
              <li><div style={{ alignItems: "center", display: "flex" }}>
                <Image src="/icons/circle.png" alt="Circle Icon" height={15} width={15} />
                <p style={{ marginLeft: "20px" }}>Large Customer Reach</p>
              </div></li>
              
              <li><div style={{ alignItems: "center", display: "flex" }}>
                <Image src="/icons/circle.png" alt="Circle Icon" height={15} width={15} />
                <p style={{ marginLeft: "20px" }}>Operational Ease</p>
              </div></li>
            
              <li><div style={{ alignItems: "center", display: "flex" }}>
                <Image src="/icons/circle.png" alt="Circle Icon" height={15} width={15} />
                <p style={{ marginLeft: "20px" }}>Better Insights</p>
              </div></li>
              
            </ul>
              
          </div>
          
          <Link href="/enterprise/add" className="HomeButton HomeButton--Light">Start vendor application</Link>
          
        </div>

        <div className="ImagePlaceholder">
          <Image src="/root/marketplace-console.png" alt="Marketplace" height={250} width={300} className="MarketplaceScreenshot"/>
        </div>
        
      </div>
      
      <div className="HomeAcademy" aria-labelledby="Academy-Title"> 
        
        <div className="HomeAcademy__Content">
          
          <p className="HomeEyebrow HomeEyebrow--Light">Learn, Build, Grow</p>
        
          <h2 id="Academy-Title">Turn your free time into an occupational qualification</h2>
        
          <p>Build practical skills and explore learning opportunities through the Academy.</p>
        
          <Link href="/academy" className="HomeButton HomeButton--Primary HomeButton--Light">Browse learning</Link>
          
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
        
          <h2 id="Directory-Title">Find a service provider near you</h2>
          
          <p>Explore our map directory to discover businesses that provide services.</p>
          
          <Link href="/map" className="HomeButton HomeButton--Primary HomeButton--Light">Explore map</Link>
        
        </div>
        
        <div className="HomeDirectory__Map" aria-label="Directory Map Preview">
          <div className="HomeMapPin" aria-hidden="True">●</div>
        </div>
        
        <div>
        
          <h3>Listing benefits:</h3>
        
          <div style={{ marginBottom: "20px" }}>
            
            <ul>  
              
              <li><div style={{ alignItems: "center", display: "flex" }}>
                <Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} />
                <p style={{ marginLeft: "20px" }}>Submit your business details</p>
              </div></li>
              
              <li><div style={{ alignItems: "center", display: "flex" }}>
                <Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} />
                <p style={{ marginLeft: "20px" }}>Verify your business details</p>
              </div></li>
              
              <li><div style={{ alignItems: "center", display: "flex" }}>
                <Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} />
                <p style={{ marginLeft: "20px" }}>Share your verified listing</p>
              </div></li>
            
              <li><div style={{ alignItems: "center", display: "flex" }}>
                <Image src="/icons/circled-right.png" alt="Circled Right Icon" height={15} width={15} />
                <p style={{ marginLeft: "20px" }}>Generate revenues and reviews</p>
              </div></li>
              
            </ul>
          
          </div>
          
          <Link href="/directory" className="HomeButton HomeButton--Primary HomeButton--Light">List on the directory</Link>
          
        </div>
        
      </div>
      
      <div className="HomeAccelerator" aria-labelledby="Accelerator-Title">
        
        <div style={{ padding: "clamp(4rem, 9vw, 8rem) max(6vw, calc((100vw - 1200px) / 2))" }}>
        
          <div className="HomeSection__Intro HomeSection__Intro--Light">
          
            <p className="HomeEyebrow HomeEyebrow--Light">Your business journey, supported</p>
        
            <h2 id="Accelerator-Title">Grow your business at every stage</h2>
          
            <p>Move from your first idea to your next opportunity with support for the journey ahead.</p>
           
            <Link className="HomeButton HomeButton--Primary HomeButton--Light" href="/accelerator">Discover the accelerator</Link>
        
          </div>
        
        </div>
        
        <ol className="HomeStageList">
          
          <li>
            <span className="HomeStageList__Number">01</span>
            <div>
              <h3>Ideation & Discovery</h3>
              <p>Shape an early idea and understand the people it can serve.</p>
            </div>
          </li>
          
          <li>
            <span className="HomeStageList__Number">02</span>
            <div>
              <h3>Opportunity Evaluation & Planning</h3>
              <p>Test the opportunity and plan a practical path forward.</p>
            </div>
          </li>
          
          <li>
             <span className="HomeStageList__Number">03</span>
            <div>
              <h3>Startup & Launch</h3>
              <p>Build the foundations and bring your business to market.</p>
            </div>
          </li>
          
          <li>
            <span className="HomeStageList__Number">04</span>
            <div>
              <h3>Growth & Traction</h3>
              <p>Reach more customers and strengthen what is working.</p>
            </div>
          </li>
          
          <li>
            <span className="HomeStageList__Number">05</span>
            <div>
              <h3>Maturity & Expansion</h3>
              <p>Reach more customers and strengthen what is working.</p>
            </div>
          </li>
          
          <li>
            <span className="HomeStageList__Number">06</span>
            <div>
              <h3>Exit, Renewal & Succession</h3>
              <p>Plan for continuity, transition, or the next chapter.</p>
            </div>
          </li>
          
        </ol>
        
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
