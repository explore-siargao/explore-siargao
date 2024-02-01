import React from "react"
import { Title } from "@/common/components/ui/Title"
import BookingBoxContainer from "@/common/components/BookingBoxContainer"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import useGetAllBookings from "../LandingPage/hooks/useGetAllBookings"
import { Spinner } from "@/common/components/ui/Spinner"
import useSessionStore from "@/common/store/useSessionStore"

const Bookings = () => {
  const userId = useSessionStore((state) => state).id
  const { data, isPending } = useGetAllBookings()

  return (
    <WidthWrapper className="my-24 lg:my-32">
      {isPending ? (
        <Spinner className="mt-4" />
      ) : (
        <>
          <Title>Bookings</Title>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 mx-auto w-full max-w-[2520px] justify-center">
            {data?.items?.map((item: any) => (
              <BookingBoxContainer
                key={item.id}
                listingId={item.id}
                location={item.address}
                date={item.description}
                distance={"100 kilometers away"}
                price={
                  "₱" +
                  (item?.price?.fee +
                    item.price.cleaningFee +
                    item.price.serviceFee)
                }
                imageKey={JSON.parse(item.imageUrls)[0].fileKey as string}
                dayTime={item.price.isNight ? "Night" : ""}
                ratings={item.review.length !== 0 ? item.review.rate : "0.0"}
                isHearted={
                  item.wishes.filter((value: any) => value.userId === userId)
                    .length !== 0
                }
              />
            ))}
          </ul>
        </>
      )}
    </WidthWrapper>
  )
}

export default Bookings
