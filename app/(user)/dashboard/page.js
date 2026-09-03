"use client";

//import { GetUser } from "../../lib/firestore";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";
// import { auth } from "../../../auth";
import Link from 'next/link';

export default function Dashboard() {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // const session = await auth();
  
  /*if (!session) {
    redirect("/login");
  }*/
  /*
  const user = auth.currentUser;
  if (user !== null) {
    const name = user.displayName;
  }
  */
  
  useEffect(() => {

    // 3. Subscribe to auth state on the client side
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // 4. Unsubscribe when the component unmounts to prevent memory leaks
    return () => unsubscribe();
  }, []);
  
  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(user);

  return (
    <div className="Dashboard">
      
      <div className="Account_Overview">
        <div><h1>Hello, </h1></div>
        <div><h2>Account balance: 0</h2></div>
        <div><Link href="/account/deposit">Deposit</Link></div>
        <div><Link href="/account/withdraw">Withdraw</Link></div>
      </div>
      
      <div className="Consumer">
        <div className="Investments_Overview">
          <div><Link href="/investments/add">+</Link></div>
          
          <div><h4>Investments: Active</h4></div>
          <div><p>Nothing to display.</p></div>
        
          <div><Link href="/investments">View</Link></div>
        </div>
        
        <div className="Market_Overview">
          <div><h4>Shop: Cart</h4></div>
          <div><p>No invoices available.</p></div>
        
          <div><Link href="/market/invoices">View</Link></div>
        </div>
      </div>
      
      <div className="Director">
        <div className="Funds_Overview">
          <div><h4>Funds: Active</h4></div>
          <div><p>Nothing to display.</p></div>
        
          <div><Link href="/funds/active">View</Link></div>
        </div>
      
        <div className="Inventory_Overview">
          <div><h4>Inventory: Levels</h4></div>
          <div><p>No inventory available.</p></div>
        
          <div><Link href="/marketplace/inventory">View</Link></div>
        </div>
      
        <div className="Programs_Overview">
          <div><h4>Programs: Enrolled</h4></div>
          <div><p>No programs enrolled.</p></div>
        
          <div><Link href="/programs/enrolled">View</Link></div>
        </div>
      
        <div className="Listings_Overview">
          <div><h4>Listings: Approved</h4></div>
          <div><p>No listings available.</p></div>
        
          <div><Link href="/listings/approved"></Link></div>
        </div>
      
        <div>
          <div><Link href="/enterprises/add">+</Link></div>
          <div><h1>My Enterprises</h1></div>
          <div><p>No enterprises to show.</p></div>
        
          <div><Link href="/enterprises">View</Link></div>
        </div>
      </div>
    </div>
  );
}
