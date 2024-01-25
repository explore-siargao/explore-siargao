import YourPayments from "@/module/AccountSettings/components/YourPayments"
import AuthGuard from "@/common/components/AuthGuard"
import React from "react"

const page = () => {
  return (
    <AuthGuard>
      <YourPayments />
    </AuthGuard>
  )
}

export default page
