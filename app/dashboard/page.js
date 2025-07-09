import Link from 'next/link';

export default function Dashboard() {
  
  return (
    <div>
      <div className="Account_Overview">
        <div><h1>Hello</h1></div>
        <div><h2>Account balance: </h2></div>
        <div><Link href="/account/deposit">Deposit</Link></div>
        <div><Link href="/account/withdraw">Withdraw</Link></div>
      </div>
      
      <div className="Investments_Overview">
        <div>
          <h4>My Investments</h4>
        </div>
        <div></div>
        <Link href="/investments/my-investments">View</Link>
      </div>
      
      <div className="Funds_Overview">
        <div>
          <h4>Active Funds</h4>
        </div>
        <div></div>
        <Link href="/funds/my-active-funds">View</Link>
      </div>
      
      <div className="Shopping_Overview">
        <div>
          <h4>Shopping : Invoices</h4>
        </div>
        <div></div>
        <Link href="/shop/my-invoices">View</Link>
      </div>
      
      <div className="Inventory_Overview">
        <div>
          <h4>Inventory Levels</h4>
        </div>
        <div></div>
        <Link href="/marketplace/inventory">View</Link>
      </div>
      
      <div className="Programs_Overview">
        <div>
          <h4>Programs : Enrolled</h4>
        </div>
        <div></div>
        <Link href="/smme-hub/programs/enrolled">View</Link>
      </div>
      
      <div className="Listings_Overview">
        <div>
          <h4>Directory : Listings</h4>
        </div>
        <div></div>
        <Link href="/listing/my-listings"></Link>
      </div>
    </div>
  );
}