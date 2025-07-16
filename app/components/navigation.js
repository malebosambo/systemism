import Link from 'next/link'

export default function Navigation() {
  
  return (
    <div className="Navigation">
      <div><Link href="/">Home</Link></div>
      <div><Link href="/invest">Invest</Link></div>
      <div><Link href="/funding">Funding</Link></div>
      <div><Link href="/shop">Shop</Link></div>
      <div><Link href="/directory">Directory</Link></div>
      <div><Link href="/business-development">Business Development</Link></div>
      <div><Link href="/contact-us">Contacts</Link></div>
      <div><Link href="/login">Login</Link></div>
      <div><Link href="/signup">Sign Up</Link></div>
    </div>  
  );
}
