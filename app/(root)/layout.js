import Header from "../components/header";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
  
  return (
    <>
      <div><Header /></div>
      <div>{children}</div>
      <div><Footer /></div>
    </>
  );
}
