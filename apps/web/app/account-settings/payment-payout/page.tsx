import PaymentPayout from "@/module/AccountSettings/PaymentPayout"
import AuthGuard from "@/common/components/AuthGuard"
import React from "react"

const page = () => {
  return (
    <AuthGuard>
      <div className="min-h-screen">
        <PaymentPayout />
      </div>
    </AuthGuard>
  )
}

export default page
