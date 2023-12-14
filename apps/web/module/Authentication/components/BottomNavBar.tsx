"use client"
import { LINK_LOGIN } from "@/common/constants/links"
import {
  ChatBubbleBottomCenterIcon,
  ClipboardDocumentListIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline"
import React, { useEffect, useState } from "react"
import Cookies from "js-cookie"

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
          <a
            href="/"
            type="button"
            className="grid justify-items-center -m-1.5 text-text-400 text-xs focus:text-primary-700"
          >
            <MagnifyingGlassIcon className="h-7 w-auto" />
            <p> Explore</p>
          </a>
          <a
            href="#"
            type="button"
            className="grid justify-items-center -m-1.5  text-text-400 text-xs focus:text-primary-700"
          >
            <HeartIcon className="h-7 w-auto" />
            <p> Wishlists</p>
          </a>
          <a
            href={LINK_LOGIN}
            type="button"
            className="grid justify-items-center -m-1.5  text-text-400 text-xs focus:text-primary-700"
          >
            <UserCircleIcon className="h-7 w-auto" />
            <p> Log in</p>
          </a>
        </nav>
      ) : (
        <nav className="flex justify-center space-x-7 p-2" aria-label="Global">
          <a
            href="/"
            type="button"
            className="grid justify-items-center -m-1.5 text-text-400 text-xs focus:text-primary-700"
          >
            <MagnifyingGlassIcon className="h-7 w-auto" />
            <p> Explore</p>
          </a>
          <a
            href="#"
            type="button"
            className="grid justify-items-center -m-1.5  text-text-400 text-xs focus:text-primary-700"
          >
            <HeartIcon className="h-7 w-auto" />
            <p> Wishlists</p>
          </a>
          <a
            href="#"
            type="button"
            className="grid justify-items-center -m-1.5  text-text-400 text-xs focus:text-primary-700"
          >
            <ClipboardDocumentListIcon className="h-7 w-auto" />
            <p> Bookings</p>
          </a>
          <a
            href="#"
            type="button"
            className="grid justify-items-center -m-1.5  text-text-400 text-xs focus:text-primary-700"
          >
            <ChatBubbleBottomCenterIcon className="h-7 w-auto" />
            <p> Inbox</p>
          </a>
          <a
            href={LINK_LOGIN}
            type="button"
            className="grid justify-items-center -m-1.5  text-text-400 text-xs focus:text-primary-700"
          >
            <UserCircleIcon className="h-7 w-auto" />
            <p> Log in</p>
          </a>
        </nav>
      )}
    </footer>
  )
}

export default BottomNavBar
