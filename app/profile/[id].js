import Image from "next/image";

export default function Profile() {
  
  return (
    <div>
      <div>
        <Image src="" alt="" height={50} width={50} />
        <h1></h1>
      </div>
      
      <div>
        <h1>Personal Details</h1>
        <p>Email:</p>
        <p>Cellphone:</p>
      </div>
      
      <div>
        <h1>Security Details</h1>
        <p>Password</p>
      </div>
    </div>
  )
}