import Link from "next/link";

export default function Investments() {
  
  return (
    <main>
      <div><h1>My Investments</h1></div>
      
      <div><Link href="/investments/invest">Invest</Link></div>
    </main>
  )
}
