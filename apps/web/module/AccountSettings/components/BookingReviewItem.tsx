import { Button } from "@/common/components/ui/Button"
import { Typography } from "@/common/components/ui/Typography"
import Image from "next/image"
import React, { useState } from "react"

type BookingReviewItemProps = {
  id: number
  pic: string
  name: string
  joinedDate: string
  location: string
  reviewedTime: string
  reviewMessage: string
}

const BookingReviewItem = ({
  id,
  joinedDate,
  name,
  pic,
  reviewMessage,
  location,
  reviewedTime,
}: BookingReviewItemProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <div
      key={id}
      className="grid grid-flow-row lg:grid-cols-3 items-center lg:items-start divide-text-100 rounded-xl gap-5 h-full w-full mb-8"
    >
      <article className="col-span-2">
        <div className="flex justify-between">
          <div className="flex items-center mb-4">
            <div className="font-medium ">
              <p>
                <strong>You reviewed</strong> {name}{" "}
                <time
                  dateTime="2014-08-16 19:00"
                  className="block text-sm text-gray-500 d"
                >
                  {reviewedTime}
                </time>
              </p>
            </div>
          </div>
          <Button variant={"primary"}>View listing</Button>
        </div>
        <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
          <svg
            className="w-4 h-4 text-text-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-text-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-text-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-text-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-text-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <h3 className="ms-2 text-sm font-semibold text-gray-900 ">
            Thinking to buy another one!
          </h3>
        </div>
        <footer className="mb-5 text-sm text-gray-500">
          <p>
            Reviewed in the {location}{" "}
            <time dateTime="2017-03-03 19:00">{reviewedTime}</time>
          </p>
        </footer>
        {/* <div className="overflow-hidden h-28"> */}

        {reviewMessage.length > 350 ? (
          <div className={isClicked ? "overflow-hidden h-28" : ""}>
            <Typography className="text-text-400">
              {reviewMessage}
              {reviewMessage.length}
            </Typography>
          </div>
        ) : (
          <Typography className="text-text-400">{reviewMessage}</Typography>
        )}
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
  )
}

export default BookingReviewItem
