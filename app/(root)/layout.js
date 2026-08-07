import { Rubik } from "next/font/google"; 
import Header from "../components/header";
import Footer from "../components/footer";
import "../globals.css";
import "../globalsicons.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: '400'
});

export const metadata = {
  title: "SYSTEMISM",
  description: "Fintech solutions for individuals and SMMEs.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className={rubik.className}>
      <body>
        <div><Header /></div>
        <div>{children}</div>
        <div><Footer /></div>
      </body>
    </html>
  );
}
