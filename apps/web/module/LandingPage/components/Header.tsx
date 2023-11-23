"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/common/assets/esLogo.png";
import { Button } from "@/common/components/ui/Button";

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white border-y-gray-400/50 border">
      <div className="w-full text-center py-4 bg-slate-50/75">
        <p className="font-bold underline text-lg">
          Learn about the new Listings tab and upgraded pricing tools
        </p>
      </div>
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <a href="#" className="-m-1.5 gap-2 flex lg:flex-1 items-center">
          <Image
            className="h-9 w-auto"
            src={Logo}
            width={500}
            height={500}
            alt="asdasd"
          />
          <span className="">Explore Siargao</span>
        </a>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-3">
          <Button variant={"outline"} size={"sm"} className="text-black">Be a host</Button>
          <a
            href="/login"
            className="text-sm font-semibold leading-6  focus:underline focus:text-blue-300"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="text-sm font-semibold leading-6  focus:underline focus:text-blue-300"
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
