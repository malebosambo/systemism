import Link from "next/link";
import Image from "next/image";
import { comfort } from "./ui/fonts";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Invest in the future.</h1><br />
        <p className={comfort.className}>Open a STARCH Monetary Systems account today and start your journey to financial independence.</p>
        <Link href="/login"><a>Invest</a></Link>
      </div>
      
      <div>
        <h1>Blockchain-powered platform for 100% security</h1><br />
        <p className={comfort.className}>Use our user-friendly and secured platform with peace-of-mind nor compromise to achieve excellent customer satisfaction.</p>
        <Link href="/components/platform"><a>Read more</a></Link>
      </div>
      
      <div>
        <h1>Access funds that support your industry.</h1><br />
        <p>Get funding for your SME to support your capital expenditure dreams.</p>
        <Link href="/products/funding"><a>View Funds</a></Link>
      </div>
      
      <div>
        <h1>Sell your products or offer your services</h1><br />
        <p>Easily sell your products in our online shop or advertise your services in our marketplace to generate sales and boost mark=eting.</p>
        <Link href="/sell"><a>Sell Now</a></Link>
        <Link href="/advertise"><a>Advertise</a></Link>
      </div>  
    </main>
  );
}
