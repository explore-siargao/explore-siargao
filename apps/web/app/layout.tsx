import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import QueryClientWrapper from "@/common/components/QueryClientWrapper"
import AuthModalWrapper from "@/common/components/AuthModalWrapper"
import { Toaster } from "react-hot-toast"
import React from "react"
import { getServerSession } from "next-auth/next"
import { SessionProvider } from "@/common/components/SessionProvider"
import { LOGO_SINGLE_IMAGE } from "@/common/constants/index"
import authOptions from "@/common/helpers/authOptions"
import { APP_NAME } from "@repo/constants"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: APP_NAME,
  description: `Generated by ${APP_NAME}`,
}

export default async function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href={LOGO_SINGLE_IMAGE} />
      <body className={nunito.className}>
        <Toaster />
        <SessionProvider session={session}>
          <QueryClientWrapper>
            <AuthModalWrapper>{children}</AuthModalWrapper>
          </QueryClientWrapper>
        </SessionProvider>
      </body>
    </html>
  )
}
