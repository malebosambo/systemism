import Link from 'next/link'

export default function Navigation() {
  
  return (
    <>
      <div>
        <Link href="/">Home</Link>
        <Link href="/components/invest">Invest</Link>
        <Link href="/components/funds">Funding</Link>
        <Link href="/components/shop">Shop</Link>
        <Link href="/components/services">Marketplace</Link>
        <Link href="/contacts">Contacts</Link>
      </div>
      <div className="Account">
        <Link href="/login">Login</Link>
        <Link href="/signup">Sign Up</Link>
      </div>
    </>  
  );
}