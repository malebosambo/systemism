import Link from 'next/link';

export default function Dashboard() {
  
  return (
    <div>
      <div>
        <h1>Hello</h1>
      </div>
      
      <div>
        <Link href="/profile">Profile</Link>
      </div>
      
      <div className="Financials">
        <div>
          <h4></h4><br />
          
        </div>
      </div>
    </div>
  );
}