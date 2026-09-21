import Link from "next/link";

export default function PrivateCompanies() {
  
  return (
    <main>
      <div><h1>Private Companies</h1></div>
      
      <div>
        <h2>Investing in private businesses</h2>
        
        <p>Businesses that are considered private companies (sole traders, private companies, partnerships) are not listed on the exchange market, unlike <span><Link href="./public-companies">public companies.</Link></span></p>
        
        <div><Link href="@/app/investments/catalogue">Invest Now</Link></div>
      </div>
    </main>
  )
}