import React from "react"
import { StarIcon } from "@heroicons/react/20/solid"

export interface ReviewStartRatingProps {
  totalStars: number
  rating: number
  size?: "sm" | "md" | "lg"
}

const ReviewStarRating = ({
  totalStars,
  rating,
  size = "md",
}: ReviewStartRatingProps) => {
  const getStarWidth = () => {
    switch (size) {
      case "sm":
        return 24
      case "md":
        return 34
      case "lg":
        return 44
      default:
        return 34 // Medium as default
    }
  }

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`cursor-pointer ${
            index < rating ? "text-secondary-500" : "text-gray-400"
          }`}
        >
          <StarIcon width={getStarWidth()} />
        </span>
      ))}
    </div>
  )
}

export default ReviewStarRating
