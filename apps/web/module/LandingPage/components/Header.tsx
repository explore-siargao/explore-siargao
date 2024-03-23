"use client"
import React, { useState } from "react"
import Image from "next/image"
import Logo from "@/common/assets/logo.png"
import { Button } from "@/common/components/ui/Button"
import LandingPageMenu from "@/common/components/ui/LandingPageMenu"
import { APP_NAME } from "@repo/constants"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
import { LINK_LOGIN } from "@/common/constants/links"
import Link from "next/link"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import { Typography } from "@/common/components/ui/Typography"
import { cn } from "@/common/helpers/cn"
import ApplyToHostModal from "./ApplyToHostModal"
import useSessionStore from "@/common/store/useSessionStore"

function Header({
  contentWidth = "wide",
  isFixed = true,
}: {
  readonly contentWidth?: "medium" | "small" | "wide" | "full"
  isFixed?: boolean
}) {
  const { data: session } = useSession()
  const isHost = useSessionStore((state) => state.isHost)
  const path = usePathname()
  const router = useRouter()
  let withoutHeader = [
    "/login",
    "/create-account",
    "/create-account/google",
    "/create-account/facebook",
    "/forgot-password",
    "/verification",
    "/logout",
    "/new-password",
  ]
  const [isModalOpen, setIsModalOpen] = useState(false)
  const renderHeader = () => {
    const closeModal = () => setIsModalOpen(false)
    const applyToHost = () => {
      if (!session) {
        router.push(LINK_LOGIN)
      } else {
        setIsModalOpen(true)
      }
    }
    if (!withoutHeader.includes(path as string)) {
      return (
        <>
          <header
            className={cn(
              `w-full inset-x-0 top-0 z-50 bg-white border-y-gray-200/50 border flex flex-col items-center`,
              isFixed && "fixed"
            )}
          >
            <div className="min-w-full py-3 text-center bg-primary-50 sr-only md:not-sr-only">
              <Typography fontWeight={"light"} className="py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </div>
            <WidthWrapper width={contentWidth}>
              <nav
                className="flex items-center justify-between py-2 my-2 w-full"
                aria-label="Global"
              >
                <Link
                  href="/"
                  className="-m-1.5 gap-2 flex lg:flex-1 items-center"
                >
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
                        Login | Sign up
                      </Button>
                    </div>
                  )}
                  <div>
                    {isHost && !path.includes("/hosting") ? (
                      <Button
                        variant="ghost"
                        className="underline font-semibold"
                        size="sm"
                        onClick={() => router.push("/hosting")}
                      >
                        Manage Listing
                      </Button>
                    ) : (
                      <Button variant="primary" size="sm" onClick={applyToHost}>
                        Apply to Host
                      </Button>
                    )}
                  </div>
                  {session && <LandingPageMenu />}
                </div>
              </nav>
              <ApplyToHostModal
                isModalOpen={isModalOpen}
                onClose={closeModal}
              />
            </WidthWrapper>
          </header>
        </>
      )
    }
  }
  return <>{renderHeader()}</>
}

export default Header
