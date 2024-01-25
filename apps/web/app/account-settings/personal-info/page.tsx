import AuthGuard from "@/common/components/AuthGuard"
import PersonalInfo from "@/module/AccountSettings/PersonalInfo"
import React from "react"

const page = () => {
  return (
    <AuthGuard>
      <PersonalInfo />
    </AuthGuard>
  )
}

export default page
