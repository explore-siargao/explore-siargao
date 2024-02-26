import React, { useEffect, useState } from "react"
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
            key={review.id}
            avatarKey={
              review.user.profilePicture ? review.user.profilePicture : "1.jpg"
            }
            name={
              review.user.personalInfo.firstName +
              " " +
              review.user.personalInfo.lastName
            }
            origin={
              review.user.personalInfo.address.city +
              " " +
              review.user.personalInfo.address.stateProvince +
              ", " +
              review.user.personalInfo.address.country
            }
            rate={review.average}
            date={review.createdAt}
            review={review.comment}
            showMore={true}
          />
        ))}
      </div>
      <Button variant="outline" className="mt-8" onClick={openShowMoreModal}>
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
