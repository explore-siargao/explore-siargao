import AuthGuard from "@/common/components/AuthGuard"
import PersonalInfo from "@/module/AccountSettings/PersonalInfo"
import React from "react"

const page = () => {
  return (
    <AuthGuard>
      <div className="min-h-screen">
        <PersonalInfo />
      </div>
    </AuthGuard>
  )
}

export default page
