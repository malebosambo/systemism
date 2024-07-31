import Navigation from "./navigation"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/STARCH.png"

export default function Header() {
  
  return (
    <div className="Header">
      <div className="Logo">
        <Link href="/"><Image src={logo} alt="Logo" /></Link>
      </div>
      <div className="Navigation">
        <Navigation />
      </div>
    </div>
  );
}