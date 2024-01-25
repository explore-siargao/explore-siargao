import { Button } from "@/common/components/ui/Button"
import { Textarea } from "@/common/components/ui/Textarea"
import Image from "next/image"
import React from "react"

type BookingReviewItemProps = {
  id: number
  pic: string
  name: string
  reviewedTime: string
}

const BookingReviewItemPending = ({
  id,
  name,
  pic,
  reviewedTime,
}: BookingReviewItemProps) => {
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
                {name}{" "}
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
          <select
            id="stars"
            className="pr-10 text-text-900 focus-within:z-10 focus-within:ring-2 focus-within:ring-text-600 text-sm rounded-md block"
          >
            <option>5 stars</option>
            <option>4 stars</option>
            <option>3 stars</option>
            <option>2 stars</option>
            <option>1 star</option>
          </select>
        </div>

        <Textarea className="mt-2" />
        <Button variant="shaded" size="sm" className="mt-4">Submit review</Button>
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

export default BookingReviewItemPending
