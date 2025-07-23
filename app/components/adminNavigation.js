import Link from 'next/link'

export default function AdminNavigation() {
  
  return (
    <div className="Navigation">
      <div><Link href="/settings">Settings</Link></div>
      <div><Link href="/users">Users</Link></div>
      <div><Link href="/logout">Logout</Link></div>
    </div>  
  );
}
