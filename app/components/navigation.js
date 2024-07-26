import Link from 'next/link'

export default function Navigation() {
  
  return (
    <>
      <div className="">
        <Link href="/"><a>Home</a></Link>
        <Link href="/components/invest"><a>Invest</a></Link>
        <Link href="/components/funds"><a>Funding</a></Link>
        <Link href="/components/shop"><a>Shop</a></Link>
        <Link href="/components/services"><a>Marketplace</a></Link>
      </div>
      <div className="Account">
        <Link href="/login"><a>Login</a></Link>
        <Link href="/signup"><a>Sign Up</a></Link>
      </div>
    </>  
  );
}