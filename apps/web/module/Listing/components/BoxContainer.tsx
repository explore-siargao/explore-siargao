"use client"
import React, { useState } from "react"
import { Title } from "../../../common/components/ui/Title"
import { HeartIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/20/solid"
import { Typography } from "../../../common/components/ui/Typography"
import AddWishlistModal from "@/module/AccountSettings/components/modals/AddWishlistModal"
import useSessionStore from "../../../common/store/useSessionStore"
import Slider from "../../../common/components/Slider"

type BoxContainerProps = {
  listingId: number
  imageKey: {
    fileKey: string
    alt: string
  }[]
  distance: string
  location: string
  date: string
  price: string
  dayTime: string
  ratings: string
  isHearted: boolean
}

const BoxContainer = ({
  listingId,
  date,
  distance,
  location,
  price,
  imageKey,
  dayTime,
  ratings,
  isHearted,
}: BoxContainerProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked((setIsClicked) => !setIsClicked)
  }
  const [addWIshlistModal, setAddWIshlistModal] = useState(false)
  const userId = useSessionStore((state) => state).id
  return (
    <>
      <li>
        <div className="h-80 w-auto 2xl:h-72 2xl:w-auto rounded-2xl relative select-none">
          <button
            onClick={() => setAddWIshlistModal(true)}
            className="absolute top-3 right-3 z-40"
          >
            {userId ? (
              <HeartIcon
                className={` h-7 w-7 text-text-50 active:scale-90 ${
                  isClicked || isHearted
                    ? "fill-error-500"
                    : "fill-text-500/50 "
                }`}
                onClick={handleClick}
              />
            ) : (
              ""
            )}
          </button>
          <Slider images={imageKey} />
        </div>
        <div className="flex-1 -space-y-1 w-auto">
          <div className="flex justify-between">
            <Title size={"ContentTitle"} className="text-text-500">
              {location}
            </Title>
            <div className="flex text-text-500 place-items-center gap-1">
              <StarIcon className="h-4 w-auto" />
              {ratings}
            </div>
          </div>
          <div className="text-text-300 text-sm">
            <Typography variant={"p"}>{distance}</Typography>
            <Typography variant={"p"}>{date}</Typography>
          </div>
          <Typography
            variant={"p"}
            className="text-text-700 font-semibold underline"
          >
            {price} <span className="font-normal">{dayTime}</span>
          </Typography>
        </div>
      </li>
      <AddWishlistModal
        listingId={listingId}
        isOpen={addWIshlistModal}
        onClose={() => setAddWIshlistModal(false)}
      />
    </>
  )
}

export default BoxContainer
