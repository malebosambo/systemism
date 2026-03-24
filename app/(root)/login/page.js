import { redirect } from "next/navigation";
import LoginForm from "./form";

export default async function Login() {
  /*
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }
  */
  return (
    <LoginForm />
  );
}
