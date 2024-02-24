import React, { useState } from "react"
import UserReview from "./Review"
import { Button } from "@/common/components/ui/Button"
import UserReviewModal from "../modals/UserReviewModal"
import { T_UserReviewsProps } from "../../types/UserReviews"

const UserReviews = ({ reviews }: T_UserReviewsProps) => {
  const [showMoreModalOpen, setShowMoreModalOpen] = useState(false)

  const openShowMoreModal = () => {
    setShowMoreModalOpen(true)
  }
  const closeShowMoreModal = () => {
    setShowMoreModalOpen(false)
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-y-8 gap-x-16">
        {reviews.map((review) => (
          <UserReview
            key={review.date}
            avatarKey={review.imageSrc}
            name={review.name}
            origin={review.origin}
            rate={review.rate}
            date={review.date}
            review={review.review}
            showMore={review.showMore}
          />
        ))}
      </div>
      <Button variant="outlineDark" className="mt-8" onClick={openShowMoreModal}>
        Show All Reviews
      </Button>
      <UserReviewModal
        isOpen={showMoreModalOpen}
        onClose={() => closeShowMoreModal()}
      />
    </>
  )
}

export default UserReviews
