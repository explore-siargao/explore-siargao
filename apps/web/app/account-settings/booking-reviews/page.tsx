import AuthGuard from "@/common/components/AuthGuard"
import BookingReviews from "@/module/AccountSettings/BookingReviews"
import React from "react"

const page = () => {
  return (
    <AuthGuard>
      <BookingReviews />
    </AuthGuard>
  )
}

export default page
