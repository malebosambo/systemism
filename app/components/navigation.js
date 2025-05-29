import Link from 'next/link'

export default function Navigation() {
  
  return (
    <div className="Navigation">
      <Link href="/">Home</Link>
      <Link href="/invest">Invest</Link>
      <Link href="/funds">Funding</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/listing">Listing</Link>
      <Link href="/trading">Trading</Link>
      <Link href="/business-development">SMME Development</Link>
      <Link href="/contacts">Contacts</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign Up</Link>
    </div>  
  );
}
