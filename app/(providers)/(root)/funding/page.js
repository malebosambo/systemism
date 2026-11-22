import Link from "next/link";

export default function Funding() {
  
  const fundingOptions = [
    { title: "Peer-to-peer", description: "Explore community-backed project funding options.", href: "/funding/peer-to-peer" },
    { title: "Loans", description: "Browse loan options for business needs and growth plans.", href: "/funding/loan" },
    { title: "Invoice financing", description: "Explore ways to unlock funds tied to unpaid invoices.", href: "/funding/invoice-financing" },
    { title: "Asset rental", description: "Consider rental pathways for assets your business needs.", href: "/funding/asset-rental" },
    { title: "Equity", description: "Learn about raising capital through business ownership shares.", href: "/funding/equity" },
    { title: "Credit", description: "Explore access to credit from participating vendors.", href: "/funding/credit" },
    { title: "Balance sheet", description: "Learn about funding options linked to business finances.", href: "/funding/balance-sheet" },
  ];
  
  return (
    <main className="Funding">
      
      <h1>Funding</h1>
      
      <div>
        
        <div><Link href="/funding/peer-to-peer"><h3>Peer-to-Peer</h3></Link></div>
        <div><Link href="/funding/peer-to-business"><h3>Peer-to-Business</h3></Link></div>
        <div><Link href="/funding/loan"><h3>Loan</h3></Link></div> 
        <div><Link href="/funding/invoice-financing"><h3>Invoice Financing</h3></Link></div>
        <div><Link href="/funding/asset-rental"><h3>Asset Rental</h3></Link></div> 
        <div><Link href="/funding/equity"><h3>Equity</h3></Link></div> 
        <div><Link href="/funding/credit"><h3>Credit</h3></Link></div>
        <div><Link href="/funding/balance-sheet"><h3>Balance Sheet</h3></Link></div>
        
      </div>
      
      <div>
        
        <div className="FundingIntro">
          
          <p className="FundingEyebrow">Explore funding options</p>
        
          <h2 id="funding-options-title">Start with the need</h2>
        
          <p>Each funding pathway works differently. Choose an option to learn more about its purpose and next steps.</p>
          
        </div>
      
        <div className="FundingGrid">
          {fundingOptions.map((option, index) => (
            <Link className="FundingCard" href={option.href} key={option.title}>
              <span className="FundingCard__Number">0{index + 1}</span>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <strong>Learn about this option <span aria-hidden="true">↗</span></strong>
            </Link>
          ))}
        </div>
        
      </div>
      
    </main>
  )
}