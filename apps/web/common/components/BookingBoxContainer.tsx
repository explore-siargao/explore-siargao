"use client"
import Image from "next/image"
import React, { useState } from "react"
import { Title } from "./ui/Title"
import { HeartIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/20/solid"

type BookingProps = {
  photo: string
  distance: string
  location: string
  date: string
  price: string
  dayTime: string
  ratings: string
}

const BookingBoxContainer = ({
  date,
  distance,
  location,
  price,
  photo,
  dayTime,
  ratings
}: BookingProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked((setIsClicked) => !setIsClicked)
  }
  return (
    <li className="flex">
      <div className="flex flex-col w-full items-center justify-between space-y-2">
        <div className="relative select-none">
          <HeartIcon
            className={`absolute top-3 right-3 h-7 w-7 text-text-50 active:scale-90 ${
              isClicked ? "fill-error-500" : "fill-text-500/50 "
            }`}
            onClick={handleClick}
          />
          <Image
            src={photo}
            width={500}
            height={500}
            alt={photo}
            className="flex-shrink-0 h-80 w-80 rounded-xl"
          />
        </div>
        <div className=" flex-1 -space-y-1 w-full">
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
            <p>{distance}</p>
            <p>{date}</p>
          </div>
          <p className="text-text-700 font-semibold">
            {price} <span className="font-normal">{dayTime}</span>
          </p>
        </div>
      </div>
    </li>
  )
}

export default BookingBoxContainer
