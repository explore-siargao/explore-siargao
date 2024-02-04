import AccountSettings from "@/module/AccountSettings"
import AuthGuard from "@/common/components/AuthGuard"
import React from "react"
import { APP_NAME } from "@repo/constants"
import { Metadata } from "next"
import { ACCOUNT_SETTINGS } from "@/common/constants"

export const metadata: Metadata = {
  title: `${ACCOUNT_SETTINGS} - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
}

const AccountSettingsPage = () => {
  return (
    <AuthGuard>
      <AccountSettings />
    </AuthGuard>
  )
}

export default AccountSettingsPage
