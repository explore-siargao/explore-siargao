"use client"
import {
  LINK_ACCOUNT_BOOKINGS,
  LINK_ACCOUNT_WISHLIST,
  LINK_LOGIN,
} from "@/common/constants/links"
import {
  ChatBubbleBottomCenterIcon,
  ClipboardDocumentListIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline"
import React, { useEffect, useState } from "react"
import Cookies from "js-cookie"
import Link from "next/link"
import { Typography } from "@/common/components/ui/Typography"

const authenticatedNavBar = [
  { id: 1, link: "/", icon: MagnifyingGlassIcon, name: "Explore" },
  { id: 2, link: LINK_ACCOUNT_WISHLIST, icon: HeartIcon, name: "Wishlists" },
  { id: 3, link: LINK_LOGIN, icon: UserCircleIcon, name: "Log in" },
]

const unauthenticatedNavBar = [
  { id: 1, link: "/", icon: MagnifyingGlassIcon, name: "Explore" },
  { id: 2, link: LINK_ACCOUNT_WISHLIST, icon: HeartIcon, name: "Wishlists" },
  {
    id: 3,
    link: LINK_ACCOUNT_BOOKINGS,
    icon: ClipboardDocumentListIcon,
    name: "Bookings",
  },
  {
    id: 4,
    link: "/",
    icon: ChatBubbleBottomCenterIcon,
    name: "Inbox",
  },
  {
    id: 5,
    link: LINK_ACCOUNT_BOOKINGS,
    icon: UserCircleIcon,
    name: "Profile",
  },
]
const BottomNavBar = () => {
  const [isBottomNavVisible, setIsBottomNavVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust the scroll threshold as needed
      const scrollThreshold = 100

      if (window.scrollY > scrollThreshold) {
        setIsBottomNavVisible(false)
      } else {
        setIsBottomNavVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <footer
      className={`fixed inset-x-0 bottom-0 z-50 bg-white border-t-gray-200 border-t py-2 md:hidden duration-200 ease-in-out ${
        isBottomNavVisible ? "" : "duration-200 ease-in-out translate-y-full "
      }`}
    >
      {Cookies.get("accessToken") === undefined ? (
        <nav className="flex justify-center space-x-7 p-2" aria-label="Global">
          {authenticatedNavBar.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              type="button"
              className="grid justify-items-center -m-1.5 text-text-400 text-xs focus:text-primary-700"
            >
              <item.icon className="h-7 w-auto" />
              <Typography variant={"p"}> {item.name}</Typography>
            </Link>
          ))}
        </nav>
      ) : (
        <nav className="flex justify-center space-x-7 p-2" aria-label="Global">
          {unauthenticatedNavBar.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              type="button"
              className="grid justify-items-center -m-1.5 text-text-400 text-xs focus:text-primary-700"
            >
              <item.icon className="h-7 w-auto" />
              <Typography variant={"p"}> {item.name}</Typography>
            </Link>
          ))}
        </nav>
      )}
    </footer>
  )
}

export default BottomNavBar
