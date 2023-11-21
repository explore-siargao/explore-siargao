import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import QueryWrapper from "../component/QueryClientWrapper"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "explore siargao",
  description: "Generated by explore siargao",
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <QueryWrapper>{children}</QueryWrapper>
      </body>
    </html>
  )
}
