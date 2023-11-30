import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"

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
      async authorize(credentials) {
        const res = await fetch(`${process.env.API_URL}/api/users/auth/info`, {
          method: "POST",
          body: JSON.stringify({ email: credentials?.username }),
          headers: { "Content-Type": "application/json" },
        })

        const user = await res.json()

        // If no error and we have user data, return it
        if (res.ok && user.item) {
          return user.item
        }
        // Return null if user data could not be retrieved
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
}

export default authOptions
