import { Button } from "@/common/components/ui/Button"
import { Typography } from "@/common/components/ui/Typography"
import Image from "next/image"
import React, { useState } from "react"
import ReviewStarRating from './ReviewStarRating'

type BookingReviewItemProps = {
  id: number
  pic: string
  name: string
  location: string
  reviewedTime: string
  reviewMessage: string
  averageRating: number
}

const BookingReviewItem = ({
  id,
  name,
  pic,
  reviewMessage,
  location,
  reviewedTime,
  averageRating
}: BookingReviewItemProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <>
      <div
        key={id}
        className="grid grid-flow-row lg:grid-cols-3 items-center lg:items-start divide-text-100 rounded-xl gap-5 h-full w-full my-8"
      >
        <article className="col-span-2">
          <div className="flex justify-between">
            <div className="flex items-center mb-4">
              <div className="font-medium ">
                <p>
                  <strong>You reviewed</strong>{name}{" "}
                  {reviewedTime}
                </p>
              </div>
            </div>
            <Button variant={"primary"}>View listing</Button>
          </div>
          <ReviewStarRating totalStars={5} rating={averageRating} size={'sm'} />
          {/* <div className="overflow-hidden h-28"> */}

          <Typography className="text-text-400 mt-4">{reviewMessage}</Typography>
          <button
            className="relative block text-sm font-medium text-secondary-600 hover:underline w-full pb-5"
            onClick={handleClick}
            key={id}
          >
            {reviewMessage.length > 350 ? (
              isClicked ? (
                <div className="absolute -top-5 w-full backdrop-blur-[2px] pt-5">
                  <Typography
                    variant={"h5"}
                    className="underline underline-offset-2"
                  >
                    Show more{" "}
                  </Typography>
                </div>
              ) : (
                <Typography
                  variant={"h5"}
                  className="underline underline-offset-2"
                >
                  Show less{" "}
                </Typography>
              )
            ) : null}
          </button>
        </article>

        <div className="h-full w-72 2xl:w-full rounded-2xl relative ">
          <Image
            src={pic}
            width={300}
            height={300}
            alt={pic}
            className="object-cover h-full w-full rounded-xl"
          />
        </div>
      </div>
      <hr />
    </>
  )
}

export default BookingReviewItem
