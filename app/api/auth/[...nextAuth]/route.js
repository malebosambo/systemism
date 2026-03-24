import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/login"
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {}
      }
    })
  ]
})

export { handler as GET, handler as POST };