import AccountSettings from "@/module/AccountSettings"
import AuthGuard from "@/common/components/AuthGuard"
import React from "react"

const page = () => {
  return (
    <AuthGuard>
      <div className="h-screen">
        <AccountSettings />
      </div>
    </AuthGuard>
  )
}

export default page
