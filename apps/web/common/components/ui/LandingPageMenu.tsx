import { LINK_LOGIN, LINK_SIGNUP } from "@/common/constants/links"
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/20/solid"
import React, { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import Link from "next/link"

const solutions = [
  {
    name: "Log in",
    href: LINK_LOGIN,
  },
  {
    name: "Sign up",
    href: LINK_SIGNUP,
  },
]
const LandingPageMenu = () => {
  return (
    <Popover className="relative ">
      <Popover.Button className="flex gap-1 rounded-full border-text-50 border items-center focus:ring-gray-400 focus:border-gray-400 px-2 py-1">
        <Bars3Icon className="h-5 text-text-200" />
        <UserCircleIcon className="h-10 text-gray-400" />
      </Popover.Button>

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
            {solutions.map((item) => (
              <div
                key={item.name}
                className="relative rounded hover:bg-gray-50 px-5 py-2"
              >
                <Link href={item.href} className="font-semibold text-gray-800">
                  {item.name}
                  <span className="absolute inset-0" />
                </Link>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default LandingPageMenu
