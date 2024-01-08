import "@/app/globals.css"
import React from "react"
import BottomNavBar from "@/module/Authentication/components/BottomNavBar"
import Header from "@/module/LandingPage/components/Header"
import LayoutWrapper from "@/common/components/LayoutWrapper"
import { Toaster } from "react-hot-toast"
import { SessionProvider } from "next-auth/react"
import QueryClientWrapper from "@/common/components/QueryClientWrapper"
import GlobalModalWrapper from "@/common/components/GlobalModalWrapper"
import { getServerSession } from "next-auth"
import authOptions from "@/common/helpers/authOptions"

export default async function layout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <>
      <Toaster />
        <QueryClientWrapper>
          <GlobalModalWrapper>
          <Header contentWidth="wide" />
            {children}
          </GlobalModalWrapper>
          <BottomNavBar />
        </QueryClientWrapper>
      </>
  )
}
