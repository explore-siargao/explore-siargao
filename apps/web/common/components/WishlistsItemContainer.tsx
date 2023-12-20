"use client"
import Image from "next/image"
import React, { useState } from "react"
import { Title } from "./ui/Title"
import { ArrowLeftIcon, HeartIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/20/solid"
import { Typography } from "./ui/Typography"
type ItemData = {
  id: number
  photo: string
  location: string
  distance: string
  date: string
  price: string
  dayTime: string
  ratings: string
  reviews: number
}

type WishlistsItemCProps = {
  datas: ItemData[]
  isButtonClicked: boolean
  contentId: string
}

const WishlistsItemContainer = ({
  datas,
  isButtonClicked,
  contentId,
}: WishlistsItemCProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked((setIsClicked) => !setIsClicked)
  }
  const [contentState, setContentState] = useState({
    isButtonClicked: false,
    contentId: "",
  })
  return (
    <>
      <div className="flex border-b-gray-200 border-b p-4">
        <ArrowLeftIcon
          className="h-6 w-6 cursor-pointer rounded-full hover:bg-gray-300/30"
          //   onClick={() => router.push(LINK_ACCOUNT_WISHLIST)}
        />
        <div className="flex-1">
          <Typography
            variant={"h4"}
            className={`w-full text-left place-self-center font-semibold`}
          >
            <span className="ml-4"></span>
          </Typography>
        </div>
      </div>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full max-w-[2520px] justify-center">
        {datas.map((item) => (
          <li>
            <div className="h-80 w-auto 2xl:h-72 2xl:w-auto rounded-2xl relative select-none">
              <HeartIcon
                className={`absolute top-3 right-3 h-7 w-7 text-text-50 active:scale-90 ${
                  isClicked ? "fill-error-500" : "fill-text-500/50 "
                }`}
                onClick={handleClick}
              />
              <Image
                src={item.photo}
                width={300}
                height={300}
                alt={item.photo}
                className="object-cover h-full w-full rounded-xl"
              />
            </div>
            <div className="flex-1 -space-y-1 w-auto">
              <div className="flex justify-between">
                <Title size={"ContentTitle"} className="text-text-500">
                  {item.location}
                </Title>
                <div className="flex text-text-500 place-items-center gap-1">
                  <StarIcon className="h-4 w-auto" />
                  {item.ratings} {item.reviews}
                </div>
              </div>
              <div className="text-text-300 text-sm">
                <p>{item.distance}</p>
                <p>{item.date}</p>
              </div>
              <Typography
                variant={"p"}
                fontWeight={"semiBold"}
                className="text-text-700 underline"
              >
                {item.price} <span className="font-normal">{item.dayTime}</span>
              </Typography>
            </div>
            <div>
              {!contentState.isButtonClicked ? (
                <div className="flex justify-between py-5">
                  <button
                    onClick={() =>
                      setContentState({
                        isButtonClicked: !contentState.isButtonClicked,
                        contentId: "legalName",
                      })
                    }
                    className="text-text-300 underline hover:text-text-700 select-none "
                  >
                    Add a note
                  </button>
                </div>
              ) : (
                <div className="grid py-5">
                  <Typography>Typography</Typography>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default WishlistsItemContainer
