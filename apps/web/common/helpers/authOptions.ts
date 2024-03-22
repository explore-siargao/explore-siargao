import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import getCookie from "./getCookie"
import {
  apiUrl,
  facebookClientId,
  facebookSecretId,
  googleClientId,
  googleSecretId,
  nextAuthSecret,
} from "@repo/env-vars"
const authOptions: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: facebookClientId as string,
      clientSecret: facebookSecretId as string,
    }),
    GoogleProvider({
      clientId: googleClientId as string,
      clientSecret: googleSecretId as string,
      authorization: {
        params: { prompt: "select_account" },
      },
    }),
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const csrfToken = getCookie("next-auth.csrf-token", req.headers?.cookie)
        const res = await fetch(`${apiUrl}/api/users/auth/info`, {
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
  secret: nextAuthSecret as string,
  session: {
    maxAge: 604800, // 1 week of idle, session will be destroyed
  },
}

export default authOptions
