import Link from "next/link";

export default function Funding() {
  
  return (
    <main>
      
      <div><h1>Funding</h1></div>
      
      <div>
        <div><Link href="/funding/peer-to-peer"><h3>Peer-to-peer</h3></Link></div>
        <div><Link href="/funding/loan"><h3>Loan</h3></Link></div> 
        <div><Link href="/funding/invoice-financing"><h3>Invoice Financing</h3></Link></div>
        <div><Link href="/funding/asset-rental"><h3>Asset Rental</h3></Link></div> 
        <div><Link href="/funding/equity"><h3>Equity</h3></Link></div> 
        <div><Link href="/funding/credit"><h3>Credit</h3></Link></div>
        <div><Link href="/funding/balance-sheet"><h3>Balance Sheet</h3></Link></div>
      </div>
      
    </main>
  )
}