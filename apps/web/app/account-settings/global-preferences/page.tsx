import AuthGuard from "@/common/components/AuthGuard"
import GlobalPreferences from "@/module/AccountSettings/GlobalPreferences"
import React from "react"

const GlobalPreferencePage = () => {
  return (
    <AuthGuard>
      <div className="min-h-screen">
        <GlobalPreferences />
      </div>
    </AuthGuard>
  )
}

export default GlobalPreferencePage
