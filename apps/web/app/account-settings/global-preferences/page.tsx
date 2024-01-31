import AuthGuard from "@/common/components/AuthGuard"
import GlobalPreferences from "@/module/AccountSettings/GlobalPreferences"
import React from "react"

const GlobalPreferencePage = () => {
  return (
    <AuthGuard>
      <GlobalPreferences />
    </AuthGuard>
  )
}

export default GlobalPreferencePage
