import Link from "next/link";
import Image from "next/image";

export default function WalletGateway() {
  
  return (
    <>
      <div><h2>Balance: R0.00</h2></div>
        
      <div className="Wallet_Buttons">
        <div>
          <div style={{ display: "flex", justifyContent: "space-around" }}><Link href="/account/deposit"><Image src="/icons/circled-add.png" alt="Add Icon" height={35} width={35} /></Link></div>
          <div style={{ textAlign: "center" }}><p>Deposit</p></div>
        </div>
          
        <div>
          <div style={{ display: "flex", justifyContent: "space-around" }}><Link href="/account/withdraw"><Image src="/icons/circled-minus.png" alt="Minus Icon" height={35} width={35} /></Link></div>
          <div style={{ textAlign: "center" }}><p>Withdraw</p></div>
        </div>
        
        <div>
          <div><p>Your profit/loss margin is balanced.</p></div>
        </div>
      </div>  
    </>
  )
}