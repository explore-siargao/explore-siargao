"use client"
import WorldMap from "@/common/components/WorldMap"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import WishlistsItemContainer from "@/common/components/WishlistsItemContainer"
import React from "react"

const WishlistsItem = () => {
  return (
    <>
    <WidthWrapper width={"full"} className="pt-24 lg:pt-28 overflow-y-hidden">
      <div className="flex gap-2">
        <div className="relative px-5">
          <WishlistsItemContainer />
        </div>
        <div className="relative w-full hidden lg:block">
          <div>
            <WorldMap />
          </div>
        </div>
      </div>
    </WidthWrapper>
    </>
  )
}

export default WishlistsItem
