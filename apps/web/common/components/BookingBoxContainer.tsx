"use client"
import Image from "next/image"
import React, { useState } from "react"
import { Title } from "./ui/Title"
import { HeartIcon } from "@heroicons/react/24/outline"

type BookingProps = {
  photo: string
  distance: string
  location: string
  date: string
  price: string
  dayTime: string
}

const BookingBoxContainer = ({
  date,
  distance,
  location,
  price,
  photo,
  dayTime,
}: BookingProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked((setIsClicked) => !setIsClicked)
  }
  return (
    <div>
      <div className="relative h-[320px] w-[320px] rounded-2xl border border-text-100 select-none">
        <HeartIcon
          className={`absolute top-3 right-3 h-7 w-7 text-text-50 transition durataion-100 active:scale-90 ${
            isClicked ? "fill-error-500 before:scale-110" : "fill-text-200"
          }`}
          onClick={handleClick}
        />
        <Image
          src={photo}
          width={300}
          height={300}
          alt={photo}
          className="box-border h-full w-full rounded-xl shadow-md"
        />
      </div>
      <div className="mt-2 -space-y-1">
        <Title size={"ContentTitle"} className="text-text-500">
          {location}
        </Title>
        <div className="text-text-300 text-base -space-y-1 pb-2">
          <p>{distance}</p>
          <p>{date}</p>
        </div>
        <p className="text-text-700 font-semibold">
          {price} <span className="font-normal">{dayTime}</span>
        </p>
      </div>
    </div>
  )
}

export default BookingBoxContainer
