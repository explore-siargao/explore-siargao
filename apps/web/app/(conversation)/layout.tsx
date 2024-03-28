import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "@/app/globals.css"
import QueryClientWrapper from "@/common/components/QueryClientWrapper"
import GlobalModalWrapper from "@/common/components/GlobalModalWrapper"
import { Toaster } from "react-hot-toast"
import React from "react"
import { LOGO_SINGLE_IMAGE } from "@/common/constants/index"
import { APP_NAME } from "@repo/constants"
import Header from "@/common/components/Header"
import Footer from "@/common/components/Footer"
import AuthStateProvider from "@/common/components/AuthStateProvider"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: APP_NAME,
  description: `Generated by ${APP_NAME}`,
}

export default async function ConversationLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href={LOGO_SINGLE_IMAGE} />
      <body className={nunito.className}>
        <Toaster />
        <QueryClientWrapper>
          <AuthStateProvider>
            <GlobalModalWrapper>
              <Header contentWidth="wide" />
              <div className="h-screen">{children}</div>
            </GlobalModalWrapper>
          </AuthStateProvider>
        </QueryClientWrapper>
      </body>
    </html>
  )
}