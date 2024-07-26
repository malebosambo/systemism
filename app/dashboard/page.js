export default function Dashboard() {
  
  return (
    <div>
      <div>
        <h1>Hello</h1>
      </div>
      <div>
        <Link href="/profile"><a>Profile</a></Link>
      </div>
      <div className="Financials">
        <div>
          <h4>Cash Flow</h4><br />
          {StatsCard}
        </div>
      </div>
    </div>
  );
}