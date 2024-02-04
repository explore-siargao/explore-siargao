import AuthGuard from "@/common/components/AuthGuard"
import Notifications from "@/module/AccountSettings/Notifications"
import { APP_NAME } from "@repo/constants"
import { NOTIFICATIONS } from "@/common/constants"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: `${NOTIFICATIONS} - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
}

const NotificationPage = () => {
  return (
    <AuthGuard>
      <Notifications />
    </AuthGuard>
  )
}

export default NotificationPage
