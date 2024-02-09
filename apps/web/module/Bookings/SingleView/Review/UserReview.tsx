import { Button } from "@/common/components/ui/Button"
import { Typography } from "@/common/components/ui/Typography"
import { StarIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import { useState } from "react"
import UserReviewModal from "./UserReviewModal"

interface UserReviewProps {
  imageSrc: string
  name: string
  origin: string
  rate: number
  date: string
  review: string
  showMore: boolean
}

const UserReview = ({
  imageSrc,
  name,
  origin,
  rate,
  date,
  review,
  showMore,
}: UserReviewProps) => {
  const displayStars = () => {
    const stars = []
    for (var i = 0; i < rate; i++) {
      stars.push(<StarIcon key={i} className="h-3 w-3" />)
    }

    return stars
  }

  const [showMoreModalOpen, setShowMoreModalOpen] = useState(false);

  const openShowMoreModal = () => {
    setShowMoreModalOpen(true);
  };

  const closeShowMoreModal = () => {
    setShowMoreModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-center">
        <div className="profile-con h-14 w-14 relative rounded-full bg-primary-500 overflow-hidden">
            <img src="/assets/1.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="ml-4">
          <Typography variant={"h4"} className="font-bold">
            {name}
          </Typography>
          <Typography variant={"h5"} className="font-semibold">
            {origin}
          </Typography>
        </div>
      </div>
      <div className="flex items-center mt-3">
        {displayStars()}
        <span className="text-[5px] text-gray-700 mx-1.5">■</span>
        <Typography variant={"h5"} className="font-bold mt-0.5">
          {date}
        </Typography>
      </div>
      <Typography variant={"h5"} className="font-semibold mt-2">
        {review}
      </Typography>
      {showMore ? (
         <Button
         className="text-md p-1 font-semibold underline"
         variant={"ghost"}
         onClick={openShowMoreModal}
       >
         Show more &gt;
       </Button>
      ) : (
        ""
      )}
        <UserReviewModal isOpen={showMoreModalOpen}  onClose={() => closeShowMoreModal()} />
    </div>
  )
}

export default UserReview
