import AdminNavigation from "../../components/adminNavigation";

export default function DashboardLayout({ children }) {
  
  return (
    <>
      <div><AdminNavigation /></div>
      <div>{children}</div>
    </>
  )
}
