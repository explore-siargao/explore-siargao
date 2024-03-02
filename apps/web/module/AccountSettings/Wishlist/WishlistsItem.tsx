"use client"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import WishlistsItemContainer from "@/module/AccountSettings/Wishlist/WishlistsItemContainer"
import React from "react"
import dynamic from "next/dynamic"

const WorldMap = dynamic(
  () => import("@/module/AccountSettings/Wishlist/WorldMap"),
  {
    ssr: false,
  }
)

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
