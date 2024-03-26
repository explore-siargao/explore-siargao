"use client"
import React, { Fragment} from "react"
import Image from "next/image"
import Logo from "@/common/assets/es-logo.png"
import { APP_NAME } from "@repo/constants"
import { useSession } from "next-auth/react"
import {
  LINK_ACCOUNT,
  LINK_CREATE_ACCOUNT,
  LINK_LOGIN,
  LINK_LOGOUT,
} from "@/common/constants/links"
import Link from "next/link"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import { cn } from "@/common/helpers/cn"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon, LucideCheck } from "lucide-react"

const unAuthMenus = [
  {
    name: "Log in",
    href: LINK_LOGIN,
  },
  {
    name: "Sign up",
    href: LINK_CREATE_ACCOUNT,
  },
]

const authMenus = [
  {
    name: "Settings",
    href: LINK_ACCOUNT,
  },
  {
    name: "Logout",
    href: LINK_LOGOUT,
  },
]

const items = [
  {
    name: "Hosting Account",
    href: LINK_LOGIN,
    selected: false,
  },
  {
    name: "Guest Account",
    href: LINK_CREATE_ACCOUNT,
    selected: false,
  },
]

function HeaderHost({
  contentWidth = "wide",
  isFixed = true,
  headerType = "Hosting Account"
}: {
  readonly contentWidth?: "medium" | "small" | "wide" | "full"
  isFixed?: boolean
  readonly headerType: "Hosting Account" | "Guest Account"
}) {
  const { data: session } = useSession()
  const ASSET_ROOT = "/assets"

  const renderTransition = (children: React.ReactNode) => (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      {children}
    </Transition>
  )

    return (
      
        <header
          className={cn(
            `w-full inset-x-0 top-0 z-50 bg-white border-y-gray-200/50 border flex flex-col`,
            isFixed && "fixed"
          )}
        >
          <WidthWrapper width={contentWidth}>
            <nav
              className="flex items-center py-2 my-2 w-full"
              aria-label="Global"
            >
              <div className="grid grid-cols-3">
                <Link href="/" className=" lg:flex-1">
                  <Image
                    className="h-12 w-auto"
                    src={Logo}
                    width={500}
                    height={700}
                    alt={APP_NAME}
                  />
                </Link>
                <div className="col-span-2">
                  {session && (
                    <Popover className="relative items-center justify-start">
                      <Popover.Button className="flex py-3 focus:outline-none">
                        <div className="flex  gap-2">
                          <p className="font-semibold">{headerType}</p>
                          <span className="ml-auto">
                            <ChevronDownIcon />
                          </span>
                        </div>
                      </Popover.Button>
                      {renderTransition(
                        <Popover.Panel className="absolute left-0 top-8 z-10 mt-4 flex w-screen max-w-max">
                          <div className="w-screen max-w-[200px] flex-auto bg-white text-sm leading-6 border border-gray-200 shadow-sm ring-transparent rounded-md">
                            {items.map((item) => (
                              <div
                                key={item.name}
                                className="relative rounded hover:bg-gray-50 px-5 py-2"
                              >
                                <Popover.Button as="a" href={item.href}>
                                  <div className="font-semibold text-gray-800">
                                    <div className="flex items-center">
                                      {item.name}
                                      {item.name === headerType && (
                                        <span className="ml-auto">
                                          <LucideCheck size={20} />
                                        </span>
                                      )}
                                    </div>
                                    <span className="absolute inset-0" />
                                  </div>
                                </Popover.Button>
                              </div>
                            ))}
                          </div>
                        </Popover.Panel>
                      )}
                    </Popover>
                  )}
                </div>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-3 items-center relative">
                {session && (
                  <Popover className="relative">
                    <Popover.Button className="flex items-center px-2 py-1 focus:outline-none">
                      <div className="  w-6 h-8  overflow-hidden">
                        <Image
                          src={`${ASSET_ROOT}/1.jpg`}
                          fill
                          alt="Profile"
                          className="rounded-full object-cover"
                        />
                      </div>
                    </Popover.Button>
                    {renderTransition(
                      <Popover.Panel className="absolute right-0 top-9 z-10 mt-5 flex w-screen max-w-max">
                        <div className="w-screen max-w-[200px] flex-auto bg-white text-sm leading-6 border border-gray-200 shadow-sm ring-transparent rounded-md">
                          {[...(session ? authMenus : unAuthMenus)].map(
                            (item) => (
                              <div
                                key={item.name}
                                className="relative rounded hover:bg-gray-50 px-5 py-2"
                              >
                                <Popover.Button as="a" href={item.href}>
                                  <div className="font-semibold text-gray-800">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                  </div>
                                </Popover.Button>
                              </div>
                            )
                          )}
                        </div>
                      </Popover.Panel>
                    )}
                  </Popover>
                )}
              </div>
            </nav>
          </WidthWrapper>
        </header>
    
    )
  }
 


export default HeaderHost
