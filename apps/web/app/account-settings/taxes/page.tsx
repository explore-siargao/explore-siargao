import AuthGuard from "@/common/components/AuthGuard"
import Taxes from "@/module/AccountSettings/Taxes"
import React from "react"

const TaxesPage = () => {
  return (
    <AuthGuard>
      <Taxes />
    </AuthGuard>
  )
}

export default TaxesPage
