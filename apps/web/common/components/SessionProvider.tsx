"use client"
import { SessionProvider as Provider } from "next-auth/react"

export function SessionProvider({
  children,
  session,
}: {
  readonly children: React.ReactNode
  readonly session: any
}) {
  console.log("para sakin", session)
  return <Provider session={session}>{children}</Provider>
}
