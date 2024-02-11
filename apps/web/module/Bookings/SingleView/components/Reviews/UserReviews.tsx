import React, { useState } from 'react'
import UserReview from './Review'
import { Button } from '@/common/components/ui/Button'
import UserReviewModal from '../modals/UserReviewModal'

const userReviews = [
  {
    imageSrc: "1.jpg",
    name: "John Doe Junior",
    origin: "Mandaluyong",
    rate: 5,
    date: "January 1, 1889",
    review:
      "Owner David is available by email and phone and Messenger and usually on-site, and managers Genny and Bert are available on-site and by phone and Messenger.",
    showMore: true,
  },
  {
    imageSrc: "2.jpg",
    name: "Jane Villanueva",
    origin: "Metro Mainla",
    rate: 4,
    date: "February 15, 1890",
    review: "Great experience overall! Maayos ang doormat",
    showMore: true,
  },
  {
    imageSrc: "1.jpg",
    name: "John Doe Junior",
    origin: "Mandaluyong",
    rate: 5,
    date: "January 1, 1889",
    review:
      "Owner David is available by email and phone and Messenger and usually on-site, and managers Genny and Bert are available on-site and by phone and Messenger.",
    showMore: true,
  },
  {
    imageSrc: "2.jpg",
    name: "Jane Villanueva",
    origin: "Metro Mainla",
    rate: 4,
    date: "February 15, 1890",
    review: "Great experience overall! Maayos ang doormat",
    showMore: true,
  },
]

const UserReviews = () => {
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
        {userReviews.map((review) => (
          <UserReview
            avatarKey={review.imageSrc}
            name={review.name}
            origin={review.origin}
            rate={review.rate}
            date={review.date}
            review={review.review}
            showMore={true}
          />
        ))}
      </div>
      <Button
        variant={"outline"}
        className="mt-8"
        onClick={openShowMoreModal}
      >
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