import React from "react"
import Image from "next/image"
import Logo from "@/common/assets/logo.png"
import { Button } from "@/common/components/ui/Button"
import LandingPageMenu from "@/common/components/ui/LandingPageMenu"
import { APP_NAME } from "@repo/constants"
import { Input } from "@/common/components/ui/Input"

const Gift = () => {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 my-5">
        <nav
          className="flex items-center justify-between p-2 mx-10 lg:px-8"
          aria-label="Global"
        >
          <a href="#" className="-m-1.5 gap-2 flex lg:flex-1 items-center">
            <Image
              className="h-12 w-auto"
              src={Logo}
              width={500}
              height={700}
              alt={APP_NAME}
            />
          </a>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-3 items-center">
            <div>
              <Button variant="primary" size="sm">
                Be a host
              </Button>
            </div>
            <LandingPageMenu />
          </div>
        </nav>
      </header>

      <div className="grid grid-cols-2 ">
        <div className="grid bg-primary-50 h-screen py-40 justify-items-center">
          <div className="flex h-[300px] w-[500px] rounded-xl shadow-2xl bg-primary-700 self-center justify-center align-middle">
            <h1 className="text-white text-5xl my-auto">Logo</h1>
          </div>
        </div>
        <div className="grid self-center justify-center align-middle">
          <h1 className="text-5xl font-bold mb-10">
            Let's redeem your gift <br /> card
          </h1>
          <div className="space-y-5">
            <Input inputId="pin" inputLabel="Pin" />
            <p>
              By redeeming, you agree to the ExploreSiargao Gift Card Terms.
            </p>
            <Button variant={"primary"} className="w-full">
              {" "}
              Redeem gift card
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gift
