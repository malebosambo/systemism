import Link from 'next/link'

export default function UserNavigation() {
  
  return (
    <div className="Navigation">
      <div><Link href="/dashboard">Dashboard</Link></div>
      <div><Link href="/investments">Investments</Link></div>
      <div><Link href="/funds">Funds</Link></div>
      <div><Link href="/marketplace">Marketplace</Link></div>
      <div><Link href="/listings">Listings</Link></div>
      <div><Link href="/programs">Programs</Link></div>
      <div><Link href="/profile">Profile</Link></div>
      <div className="Button"><Link href="/logout">Logout</Link></div>
    </div>  
  );
}
