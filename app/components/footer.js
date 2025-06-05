import Navigation from "./navigation"
import Link from "next/link"

export default function Footer() {
  
  return (
    <div className="Footer">
      <div className="Legal">
        <p>Copyright 2024</p>
        <p>STARCH Monetary Systems</p>
      </div>
      
      <div className="Contacts">
        <p>E-mail:</p>
        <Link href="hello@starch.co.za">hello@starch.co.za</Link>
        <p>Tel:</p>
        <Link href="+27630013711">063 001 3711</Link>
      </div>
      
      <div className="Links">
        <Navigation />
      </div>
    </div>
  );
}