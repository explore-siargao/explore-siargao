import "../globals.css"
import { getServerSession } from "next-auth/next"
import { SessionProvider } from "@/common/components/SessionProvider"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import QueryClientWrapper from "@/common/components/QueryClientWrapper"

export const metadata = {
  title: "Explore Siargao",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <QueryClientWrapper>
            {children}
          </QueryClientWrapper>
        </SessionProvider>
      </body>
    </html>
  )
}
