import Link from 'next/link'

export default function Navigation() {
  
  return (
    <div className="Navigation">
      <div><Link href="/">Home</Link></div>
      <div><Link href="/investing">Investing</Link></div>
      <div><Link href="/funding">Funding</Link></div>
      <div><Link href="/marketplace">Marketplace</Link></div>
      <div><Link href="/directory">Directory</Link></div>
      <div><Link href="/academy">Academy</Link></div>
      <div><Link href="/contact-us">Contact Us</Link></div>
    </div>  
  );
}
