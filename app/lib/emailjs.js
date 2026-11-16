import { SMTPClient } from "emailjs";

const client = new SMTPClient({
  "user": "noreply@systemism.co.za",
  "password": "",
  "host": "://smtp.vox.co.za",
  "ssl": true
});

export async function Welcome(fullname,name, email) {
  
  try {
    
    const emailWelcome = await client.sendAsync({
      text: "",
      from: "no-reply no-reply@systemism.co.za",
      to: `${fullname} ${email}`,
      subject: `Welcome ${name}: Registration Successful`
    });
    
    console.log(message);
    
  } catch (err) {
    
    console.error(err);
    
  }
  
}