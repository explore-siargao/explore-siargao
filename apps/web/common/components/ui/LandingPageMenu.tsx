"use client"
import {
  LINK_ACCOUNT,
  LINK_CREATE_ACCOUNT,
  LINK_LOGIN,
  LINK_LOGOUT,
} from "@/common/constants/links"
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/20/solid"
import React, { Fragment, useState } from "react"
import { Popover, Transition } from "@headlessui/react"
import Link from "next/link"
import { useSession } from "next-auth/react"

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
    name: "Account",
    href: LINK_ACCOUNT,
  },
  {
    name: "Log out",
    href: LINK_LOGOUT,
  },
]

const LandingPageMenu = () => {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)

  const { data: session } = useSession()
  return (
    <Popover className="relative">
      <Popover.Button
        onClick={() => setTimeout(() => setMenuIsVisible(true), 500)}
        className="flex gap-1 rounded-full border-text-50 border items-center focus:ring-gray-400 focus:border-gray-400 px-2 py-1"
      >
        <Bars3Icon className="h-5 text-text-200" />
        <UserCircleIcon className="h-8 text-gray-400" />
      </Popover.Button>
      {menuIsVisible && (
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute right-0 top-9 z-10 mt-5 flex w-screen max-w-max">
            <div className="w-screen max-w-[200px] flex-auto bg-white text-sm leading-6 border border-gray-200 shadow-sm ring-transparent rounded-md">
              {[...(session ? authMenus : unAuthMenus)].map((item) => (
                <div
                  key={item.name}
                  className="relative rounded hover:bg-gray-50 px-5 py-2"
                >
                  <Link
                    href={item.href}
                    className="font-semibold text-gray-800"
                    onClick={() =>
                      menuIsVisible
                        ? setMenuIsVisible(false)
                        : setMenuIsVisible(true)
                    }
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </Link>
                </div>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      )}
    </Popover>
  )
}

export default LandingPageMenu
