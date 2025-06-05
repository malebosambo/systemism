import Link from 'next/link'

export default function Navigation() {
  
  return (
    <div className="Navigation">
      <div><Link href="/">Home</Link></div>
      <div><Link href="/invest">Invest</Link></div>
      <div><Link href="/funding">Funding</Link></div>
      <div><Link href="/shop">Shop</Link></div>
      <div><Link href="/listing">Listing</Link></div>
      <div><Link href="/trading">Trading</Link></div>
      <div><Link href="/business-development">SMME Development</Link></div>
      <div><Link href="/contacts">Contacts</Link></div>
      <div><Link href="/login">Login</Link></div>
      <div><Link href="/signup">Sign Up</Link></div>
    </div>  
  );
}
