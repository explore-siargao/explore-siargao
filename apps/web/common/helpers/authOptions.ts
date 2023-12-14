import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import getCookie from "./getCookie"

const authOptions: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET_ID as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET_ID as string,
    }),
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const csrfToken = getCookie("next-auth.csrf-token", req.headers?.cookie)
        const res = await fetch(`${process.env.API_URL}/api/users/auth/info`, {
          method: "POST",
          body: JSON.stringify({ email: credentials?.username }),
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken as string,
          },
        })
        const user = await res.json()
        if (res.ok && user.item) {
          return user.item
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    maxAge: 604800, // 1 week of idle, session will be destroyed
  },
}

export default authOptions
