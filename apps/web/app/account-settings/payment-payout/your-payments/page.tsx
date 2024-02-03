import YourPayments from "@/module/AccountSettings/components/YourPayments"
import AuthGuard from "@/common/components/AuthGuard"
import React from "react"

const page = () => {
  return (
    <AuthGuard>
      <div className="min-h-screen">
        <YourPayments />
      </div>
    </AuthGuard>
  )
}

export default page
