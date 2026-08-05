import Link from "next/link"
import Image from "next/image";

export default function Footer() {
  
  return (
    <div className="Footer">
      
      <div>
        <Image src="/SystemismLogoZoom.jpg" alt="Systemism Logo" height={70} weight={100} style={{ border: "1px solid #F9F9E1" }} />
      </div>
      
      <div style={{ marginTop: "5px" }}><h3 style={{ color: "white" }}>Contacts</h3></div>
      
      <div className="Contacts">
        <p>E-mail:</p>
        <Link href="admin@systemism.co.za">admin@systemism.co.za</Link>
        <p>Tel:</p>
        <Link href="+27630013711">063 001 3711</Link>
        <p>Address:</p>
        <Link href="">462B Cuba Crescent, Lulekani, Phalaborwa, 1392</Link>
      </div>
      
      <div style={{ marginTop: "5px" }}><h3 style={{ color: "white" }}>Legal</h3></div>
      
      <div className="Legal">
        <div><Link href="/legal/faq">FAQ</Link></div>
        <div><Link href="/legal/terms-conditions">Terms and Conditions</Link></div>
        <div><Link href="/legal/privacy-policy">Privacy Policy</Link></div>
      
       
        <div>
          <p>© 2026 Systemism</p>
        </div>
      </div>
    
    </div>
  );
}