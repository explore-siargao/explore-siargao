import Earnings from "@/module/Host/Earnings"
import AuthGuard from "@/common/components/AuthGuard"
import React from "react"
import { APP_NAME } from "@repo/constants"
import { Metadata } from "next"
import EarningGraphTab from "@/module/Host/Earnings/EarningGraphTab"

export const metadata: Metadata = {
  title: `Earnings - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
}

const EarningsGraphTabPage = () => {
  return (
    <AuthGuard>
      <EarningGraphTab />
    </AuthGuard>
  )
}

export default EarningsGraphTabPage
