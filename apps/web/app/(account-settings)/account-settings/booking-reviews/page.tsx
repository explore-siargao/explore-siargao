import AuthGuard from "@/common/components/AuthGuard"
import BookingReviews from "@/module/AccountSettings/BookingReviews"
import { APP_NAME } from "@repo/constants"
import { BOOKING_REVIEWS } from "@/common/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: `${BOOKING_REVIEWS} - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
}

const BookingReviewsPage = () => {
  return (
    <AuthGuard>
      <BookingReviews />
    </AuthGuard>
  )
}

export default BookingReviewsPage