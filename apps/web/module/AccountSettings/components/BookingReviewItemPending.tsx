import { Button } from "@/common/components/ui/Button"
import { Textarea } from "@/common/components/ui/Textarea"
import { Typography } from "@/common/components/ui/Typography"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

type BookingReviewItemProps = {
  id: number
  pic?: string
  name: string
  reviewedTime?: string
}

const BookingReviewItemPending = ({
  id,
  name,
  pic,
  reviewedTime,
}: BookingReviewItemProps) => {
  const router = useRouter()
  return (
    <div
      key={id}
      className="flex w-full p-6 gap-x-4 items-center"
    >
      <div className="flex w-full gap-x-4 items-center">
        <div className="h-24 w-24 rounded bg-primary-100">
        </div>
        <div className="h-full grid grid-cols-3 gap-4 content-between">
          <div className="col-span-3">
            <Typography variant={'h1'}>
              {name}
            </Typography>
          </div>
          <div className="col-span-3">
            <Button onClick={() => router.push(`/add-review/${id}`)} variant={"primary"}>
              Add Review
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full text-right">
        <Typography variant={'p'} className="text-gray-500 flex-shrink-0">
          June 7, 2024 to June 12, 2024
        </Typography>
      </div>
    </div>
  )
}

export default BookingReviewItemPending
