"use client"
import React from "react"
import Tabs from "@/common/components/Tabs"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import tabs from "./constants/tabs"

const RoomTypeTab = () => {
  return (
    <WidthWrapper
      width="medium"
      className="grid lg:grid-cols-4 gap-12 lg:gap-0 mt-28 md:mt-36"
    >
      <div className="lg:col-span-9">
        <Tabs tabs={tabs} />
        <h2 className="text-center pt-20">This is for Room type tab</h2>
      </div>
    </WidthWrapper>
  )
}

export default RoomTypeTab
