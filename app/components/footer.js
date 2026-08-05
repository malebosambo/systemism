import Link from "next/link"
import Image from "next/image";

export default function Footer() {
  
  return (
    <div className="Footer">
      
      <div>
        <Image src="/SystemismLogoZoom.png" alt="Systemism Logo" height={70} weight={100} />
      </div>
      
      <div className="Legal">
        <p>© 2026 Systemism</p>
      </div>
      
      <div className="Contacts">
        <p>E-mail:</p>
        <Link href="admin@systemism.co.za">admin@systemism.co.za</Link>
        <p>Tel:</p>
        <Link href="+27630013711">063 001 3711</Link>
      </div>
    
    </div>
  );
}