import Link from 'next/link'

export default function Navigation() {
  
  return (
    <>
      <Link href="/"><h6>Home</h6></Link>
      <Link href="/invest"><h6>Invest</h6></Link>
      <Link href="/funds"><h6>Funding</h6></Link>
      <Link href="/shop"><h6>Shop</h6></Link>
      <Link href="/listing"><h6>Listing</h6></Link>
      <Link href="/trading">Trading</Link>
      <Link href="/business-development">Business Development</Link>
      <Link href="/contacts"><h6>Contacts</h6></Link>
      <Link href="/login"><h6>Login</h6></Link>
      <Link href="/signup"><h6>Sign Up</h6></Link>
    </>  
  );
}