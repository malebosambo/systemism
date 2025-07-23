import AdminNavigation from "../components/adminNavigation";

export default function DashboardLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <div><AdminNavigation /></div>
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}
