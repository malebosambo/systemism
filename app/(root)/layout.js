import { AuthProvider } from "./lib/authContext";
import { Rubik } from "next/font/google"; 
import Header from "../components/header";
import Footer from "../components/footer";
import "../globals.css";

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
        <AuthProvider>{children}</AuthProvider>
        <div><Footer /></div>
      </body>
    </html>
  );
}
