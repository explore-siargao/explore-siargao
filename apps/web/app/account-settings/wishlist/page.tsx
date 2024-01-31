import Wishlist from "@/module/AccountSettings/Wishlist"
import AuthGuard from "@/common/components/AuthGuard"
import React from "react"

const page = () => {
  return (
    <AuthGuard>
      <div className="h-screen">
        <Wishlist />
      </div>
    </AuthGuard>
  )
}

export default page
