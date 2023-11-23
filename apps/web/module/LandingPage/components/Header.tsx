"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/common/assets/esLogo.png";
import { Button } from "@/common/components/ui/Button";
import LandingPageMenu from "@/common/components/ui/LandingPageMenu";

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white border-y-gray-400/50 border">
      <div className="w-full text-center py-4 bg-gray-100 shadow">
        <p className="font-bold underline text-lg">
          Learn about the new Listings tab and upgraded pricing tools
        </p>
      </div>
      <nav
        className="flex items-center justify-between p-5 mx-10 lg:px-8"
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
          <span className="font-bold">Explore Siargao</span>
        </a>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-3">
          <Button variant={"rounded"} size={"sm"} className="text-black">
            Be a host
          </Button>
          <LandingPageMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;
