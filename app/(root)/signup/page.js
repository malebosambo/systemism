import { redirect } from "next/navigation";
import SignupForm from "./form";

export default async function Signup() {
  /*
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }
  */
  return (
    <SignupForm />
  );
}
