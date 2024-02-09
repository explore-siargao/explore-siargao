import { Typography } from "@/common/components/ui/Typography"
import React from "react"

interface ReviewCategoryProps {
  title: string
  rating: string
  isHorizontal: boolean
  icon: React.ReactElement
}

const ReviewCategory = ({
  title,
  rating,
  isHorizontal,
  icon: Icon,
}: ReviewCategoryProps) => {
  if (isHorizontal) {
    return (
      <div>
        <div className="flex justify-between items-center w-full py-4">
          <div className="flex space-x-3 items-center">
            <Icon.type {...Icon.props} />
            <Typography variant={"h5"} className="font-semibold">
              {title}
            </Typography>
          </div>
          <Typography variant={"h5"} className="font-semibold">
            {rating}
          </Typography>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col lg:px-4 py-4">
        <Typography variant={"h5"} className="font-bold">
          {title}
        </Typography>
        <Typography variant={"h4"} className="font-bold mb-5">
          {rating}
        </Typography>
        <Icon.type {...Icon.props} className="h-7 w-7" />
      </div>
    )
  }
}

export default ReviewCategory
