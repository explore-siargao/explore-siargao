"use client"
import React from "react"
import Image from "next/image"
import Logo from "@/common/assets/esLogo.png"

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-slate-500">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-8 w-auto"
              src={Logo}
              width={500}
              height={500}
              alt="asdasd"
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-3">
          <a
            href="/login"
            className="text-sm font-semibold leading-6 text-white focus:underline focus:text-blue-300"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="text-sm font-semibold leading-6 text-white focus:underline focus:text-blue-300"
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
