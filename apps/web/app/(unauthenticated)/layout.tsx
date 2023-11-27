import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import QueryClientWrapper from "@/common/components/QueryClientWrapper"
import AuthModalWrapper from "@/common/components/AuthModalWrapper"
import { Toaster } from "react-hot-toast"
import React from "react"
import { LOGO_SINGLE_IMAGE } from "@/common/constants/index"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Explore Siargao",
  description: "Generated by explore siargao",
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href={LOGO_SINGLE_IMAGE} />
      <body className={inter.className}>
        <Toaster />
        <QueryClientWrapper>
          <AuthModalWrapper>{children}</AuthModalWrapper>
        </QueryClientWrapper>
      </body>
    </html>
  )
}
