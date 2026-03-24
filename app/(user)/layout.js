import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import UserNavigation from "../components/userNavigation";

export default function UserLayout({ children }) {
  
  const router = useRouter();
  const { data } = useSession();
  console.log(data);
  /*
  if ( data ) {
    router.push("/login");
    router.refresh();
  }
  */
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
