"use client"
import WorldMap from "@/common/components/WorldMap"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import WishlistsItemContainer from "@/common/components/WishlistsItemContainer"
import React from "react"

const WishlistsItem = () => {
  return (
    <WidthWrapper width="full">
      <div className="flex pt-28">
        <div className="flex-1">
          <WishlistsItemContainer />
        </div>
        <div className="flex-1 hidden lg:block">
          <div className="h-[calc(100vh-112px)] w-full">
            <WorldMap />
          </div>
        </div>
      </div>
    </WidthWrapper>
  )
}

export default WishlistsItem
