import AccountSettings from "@/module/AccountSettings"
import AuthGuard from "@/common/components/AuthGuard"
import React from "react"

const page = () => {
  return (
    <AuthGuard>
      <AccountSettings />
    </AuthGuard>
  )
}

export default page
