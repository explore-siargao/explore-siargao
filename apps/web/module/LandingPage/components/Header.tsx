"use client"
import React from "react"
import Image from "next/image"
import Logo from "@/common/assets/logo.png"
import { Button } from "@/common/components/ui/Button"
import LandingPageMenu from "@/common/components/ui/LandingPageMenu"
import { APP_NAME } from "@repo/constants"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
import { LINK_CREATE_ACCOUNT, LINK_LOGIN } from "@/common/constants/links"
import Link from "next/link"

function Header() {
  const { data: session } = useSession()
  const path = usePathname()
  const router = useRouter()
  let withoutHeader = [
    "login",
    "create-account",
    "forgot-password",
    "verification",
    "logout",
    "new-password",
  ]
  const urls = path.split("/")
  const url = urls[urls.length - 1]
  const renderHeader = () => {
    if (!withoutHeader.includes(url as string)) {
      return (
        <header className="absolute inset-x-0 top-0 z-50 bg-white border-y-gray-200/50 border flex flex-col items-center">
          <div className="w-full text-center py-2 bg-gray-50 sr-only md:not-sr-only">
            <p className="underline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <nav
            className="flex items-center justify-between p-2 m-2 px-4 lg:px-16 mx-auto w-full max-w-[2520px]"
            aria-label="Global"
          >
            <Link href="/" className="-m-1.5 gap-2 flex lg:flex-1 items-center">
              <Image
                className="h-12 w-auto"
                src={Logo}
                width={500}
                height={700}
                alt={APP_NAME}
              />
            </Link>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-3 items-center relative">
              {!session && (
                <div className="flex gap-1 rounded-full items-center px-2 py-1">
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => router.push(LINK_LOGIN)}
                  >
                    Login
                  </Button>
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => router.push(LINK_CREATE_ACCOUNT)}
                  >
                    Sign up
                  </Button>
                </div>
              )}
              <div>
                <Button variant="primary" size="sm">
                  Apply to Host
                </Button>
              </div>
              {session && <LandingPageMenu />}
            </div>
          </nav>
        </header>
      )
    }
  }
  return <>{renderHeader()}</>
}

export default Header
