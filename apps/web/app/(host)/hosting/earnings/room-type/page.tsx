import AuthGuard from "@/common/components/AuthGuard"
import React from "react"
import { APP_NAME } from "@repo/constants"
import { Metadata } from "next"
import RoomTypeTab from "@/module/Host/Earnings/RoomTypeTab"

export const metadata: Metadata = {
  title: `Earnings - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
}

const RoomTypePage = () => {
  return (
    <AuthGuard>
      <RoomTypeTab />
    </AuthGuard>
  )
}

export default RoomTypePage
