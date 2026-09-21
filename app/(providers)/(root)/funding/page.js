import Link from "next/link";

export default function Funding() {
  
  return (
    <main>
      
      <div><h1>Funding</h1></div>
      
      <div>
        <div><Link href="/funding/capital"><h3>Capital</h3></Link></div>
        <div><Link href="/funding/working-capital"><h3>Working Capital</h3></Link></div> 
        <div><Link href="/funding/capital-injection"><h3>Capital Injection</h3></Link></div>
        <div><Link href="/funding/asset-rental"><h3>Asset Rental</h3></Link></div> 
        <div><Link href="/funding/equity"><h3>Equity</h3></Link></div> 
        <div><Link href="/funding/credit"><h3>Credit</h3></Link></div>
        <div><Link href="/funding/balance-sheet"><h3>Balance Sheet</h3></Link></div>
      </div>
      
    </main>
  )
}