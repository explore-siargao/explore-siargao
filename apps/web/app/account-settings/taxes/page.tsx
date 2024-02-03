import AuthGuard from "@/common/components/AuthGuard"
import Taxes from "@/module/AccountSettings/Taxes"
import React from "react"

const TaxesPage = () => {
  return (
    <AuthGuard>
      <div className="min-h-screen">
        <Taxes />
      </div>
    </AuthGuard>
  )
}

export default TaxesPage
