import React, { useState } from "react"
import UserReview from "./Review"
import { Button } from "@/common/components/ui/Button"
import UserReviewModal from "../modals/UserReviewModal"

const userReviews = [
  {
    imageSrc: "1.jpg",
    name: "Bradford",
    origin: "Canada",
    rate: 5,
    date: "January 1, 1889",
    review:
      "Beautiful, quiet and private! This place offers solitude to everyone who wants to disappear from chaotic crowd once in a while. Place is romantic and cozy. It is the same as the pictures. We love the comfortable king size bed, outdoor shower, pool and kitchen! It is complete of amenities. Host are friendly and give us recommendations. Highly recommended. Will definitely come back again. Thank you!",
    showMore: false,
  },
  {
    imageSrc: "2.jpg",
    name: "Maygan",
    origin: "California, United States",
    rate: 4,
    date: "February 15, 1890",
    review: "The villa is exactly as seen in the photos, such an absolute dream to stay in! We were there during rainy season, so it’s a bit of an adventure to leave the villa on the beaten path. If it’s rainy, there are massive puddles to get through and only certain drivers will go through it (which the host help to arrange!).",
    showMore: true,
  },
  {
    imageSrc: "1.jpg",
    name: "Sami",
    origin: "Helsinki, Finland",
    rate: 5,
    date: "January 1, 1889",
    review:
      "The villa is extremely clean, cozy, beautiful, and right next to a quite and one of the most beautiful beaches on the island! We had an amazing stay all in all. Claire the caretaker was super responsive and took care of every need that we had during our 7 day stay.",
    showMore: true,
  },
  {
    imageSrc: "2.jpg",
    name: "Anna",
    origin: "Toronto, Canada",
    rate: 4,
    date: "February 15, 1890",
    review: "We loved our stay at Simon’s place. Beautifully designed and with lots of amenities (bathrobes were a nice touch!). We made full use of the beautiful outdoor shower, bathtub and pool! And I just loved having a chance to play a little on the electric piano! The villa was peaceful and secluded and the caretaker was lovely. We also really enjoyed walking out onto a pristine empty beach.",
    showMore: false,
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
      <Button variant={"outline"} className="mt-8" onClick={openShowMoreModal}>
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
