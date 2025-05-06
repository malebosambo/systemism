import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

export const metadata = {
  title: "SYSTEMISM",
  description: "Compound annual investments and business monetary solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div><Header /></div>
        <div>{children}</div>
        <div><Footer /></div>
      </body>
    </html>
  );
}
