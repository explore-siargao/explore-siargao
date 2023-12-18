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
