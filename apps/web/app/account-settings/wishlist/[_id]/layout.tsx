import "@/app/globals.css"
import React from "react"
import BottomNavBar from "@/module/Authentication/components/BottomNavBar"
import Header from "@/module/LandingPage/components/Header"
import LayoutWrapper from "@/common/components/LayoutWrapper"

export default async function layout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <LayoutWrapper>
      <Header contentWidth="wide" />
        {children}
      <BottomNavBar />
    </LayoutWrapper>
  )
}
