import AuthGuard from "@/common/components/AuthGuard"
import BookingReviews from "@/module/AccountSettings/BookingReviews"
import React from "react"

const page = () => {
  return (
    <AuthGuard>
      <div className="min-h-screen">
        <BookingReviews />
      </div>
    </AuthGuard>
  )
}

export default page
