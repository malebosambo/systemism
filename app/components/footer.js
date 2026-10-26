import Link from "next/link"
import Image from "next/image";

export default function Footer() {
  
  return (
    <div className="Footer">
      
      <div>
        <Image src="/SystemismLogoZoom.jpg" alt="Systemism Logo" height={70} width={100} style={{ border: "1px solid #F9F9E1" }} />
      </div>
      
      <div className="Footer_Details">
      
        <div className="Contacts">
          <div><h2 style={{ color: "white" }}>Contacts</h2></div>
          
          <p>E-mail:</p>
          <div className="DivMargin"><Link href="admin@systemism.co.za">info@systemism.co.za</Link></div>
          <p>Tel:</p>
          <div className="DivMargin"><Link href="+27630013711">063 001 3711</Link></div>
          <p>Address:</p>
          <div className="DivMargin"><Link href="">462B Cuba Crescent, Lulekani, Phalaborwa, 1392</Link></div>
        </div>
      
        <div className="Legal">
          <div><h2 style={{ color: "white" }}>Legal</h2></div>
          
          <div><Link href="/legal/faq">FAQ</Link></div>
          <div><Link href="/legal/terms-conditions">Terms and Conditions</Link></div>
          <div><Link href="/legal/privacy-policy">Privacy Policy</Link></div>
        </div>
      </div>
      
      <div><p style={{ color: "white", marginTop: "20px" }}>© 2026 - Systemism. All rights reserved.</p></div>
    
    </div>
  )
}