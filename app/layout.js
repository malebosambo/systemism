import { Header } from "./components/header"
import { footer } from "./components/footer"
import { prime } from "./ui/fonts";
import "./globals.css";

export const metadata = {
  title: "STARCH Platform",
  description: "Compound annual investments and business monetary solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${prime.className} antialised`}>
        <div><Header /></div>
        <div>{children}</div>
        <div><Footer /></div>
      </body>
    </html>
  );
}
