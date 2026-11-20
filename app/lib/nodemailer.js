import { client } from "nodemailer";

const smtp = client({
  "auth": {
    "user": "noreply@systemism.co.za",
    "password": ""
  },
  "host": "://smtp.vox.co.za",
  "secure": true,
  "port": 587
});

export async function Welcome( fullname, name, email ) {
  
  try {
    
    const emailWelcome = await smtp.sendAsync({
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