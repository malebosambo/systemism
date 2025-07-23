import UserNavigation from "../components/userNavigation";

export default function UserLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <div><UserNavigation /></div>
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}
