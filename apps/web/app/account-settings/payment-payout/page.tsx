import PaymentPayout from "@/module/AccountSettings/PaymentPayout"
import AuthGuard from "@/common/components/AuthGuard"
import React from "react"

const page = () => {
  return (
    <AuthGuard>
      <PaymentPayout />
    </AuthGuard> 
  )
}

export default page
