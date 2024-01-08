import "@/app/globals.css"
import React from "react"
import BottomNavBar from "@/module/Authentication/components/BottomNavBar"
import Header from "@/module/LandingPage/components/Header"
import { Toaster } from "react-hot-toast"
import QueryClientWrapper from "@/common/components/QueryClientWrapper"
import GlobalModalWrapper from "@/common/components/GlobalModalWrapper"

export default async function layout({
  children,
}: {
  readonly children: React.ReactNode
}) {
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
