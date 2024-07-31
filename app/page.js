import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Invest in the future.</h1><br />
        <p>Open a STARCH Monetary Systems account today and start your journey to financial independence.</p>
        <Link href="/login">Invest</Link>
      </div>
      
      <div>
        <h1>Blockchain-powered platform for 100% security</h1><br />
        <p>Use our user-friendly and secured platform with peace-of-mind nor compromise to achieve excellent customer satisfaction.</p>
        <Link href="/components/platform">Read more</Link>
      </div>
      
      <div>
        <h1>Access funds that support your industry.</h1><br />
        <p>Get funding for your SME to support your capital expenditure dreams.</p>
        <Link href="/products/funding">View Funds</Link>
      </div>
      
      <div>
        <h1>Sell your products or offer your services</h1><br />
        <p>Easily sell your products in our online shop or advertise your services in our marketplace to generate sales and boost mark=eting.</p>
        <Link href="/sell">Sell Now</Link>
        <Link href="/advertise">Advertise</Link>
      </div>  
    </main>
  );
}
