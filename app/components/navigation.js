import Link from 'next/link'

export default function Navigation() {
  
  return (
    <div className="Navigation">
      <div className="Menu_Nav_Link"><Link href="/">Home</Link></div>
      <div className="Menu_Nav_Link"><Link href="/investing">Investing</Link></div>
      <div className="Menu_Nav_Link"><Link href="/funding">Funding</Link></div>
      <div className="Menu_Nav_Link"><Link href="/marketplace">Marketplace</Link></div>
      <div className="Menu_Nav_Link"><Link href="/directory">Directory</Link></div>
      <div className="Menu_Nav_Link"><Link href="/academy">Academy</Link></div>
      <div className="Menu_Nav_Link"><Link href="/accelerator">Accelerator</Link></div>
      <div><Link href="/contact-us">Contact Us</Link></div>
    </div>  
  );
}
