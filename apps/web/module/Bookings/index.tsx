import React from "react"
import { Title } from "@/common/components/ui/Title"
import BookingBoxContainer from "@/common/components/BookingBoxContainer"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import useGetAllBookings from "../LandingPage/hooks/useGetAllBookings"
import { Spinner } from "@/common/components/ui/Spinner"

const tripGroup = [
  {
    id: 1,
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    photo: "http://localhost:3000/1.jpg",
    dayTime: "night",
    ratings: "5.0",
  },
  {
    id: 2,
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    photo: "http://localhost:3000/2.jpg",
    dayTime: "night",
    ratings: "5.0",
  },
  {
    id: 3,
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    photo: "http://localhost:3000/3.jpg",
    dayTime: "night",
    ratings: "5.0",
  },
  {
    id: 4,
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    photo: "http://localhost:3000/4.jpg",
    dayTime: "night",
    ratings: "5.0",
  },
  {
    id: 5,
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    photo: "http://localhost:3000/5.jpg",
    dayTime: "night",
    ratings: "5.0",
  },
  {
    id: 6,
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    photo: "http://localhost:3000/5.jpg",
    dayTime: "night",
    ratings: "5.0",
  },
  {
    id: 7,
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    photo: "http://localhost:3000/5.jpg",
    dayTime: "night",
    ratings: "5.0",
  },
  {
    id: 8,
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    photo: "http://localhost:3000/5.jpg",
    dayTime: "night",
    ratings: "5.0",
  },
  {
    id: 9,
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    photo: "http://localhost:3000/5.jpg",
    dayTime: "night",
    ratings: "5.0",
  },
  {
    id: 10,
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    photo: "http://localhost:3000/5.jpg",
    dayTime: "night",
    ratings: "5.0",
  },
]
const Bookings = () => {
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
                location={item.address}
                date={item.description}
                distance={"100 kilometers away"}
                price={
                  "₱" +
                  (item?.price?.fee +
                    item.price.cleaningFee +
                    item.price.serviceFee)
                }
                photo={JSON.parse(item.imageUrls)[0].url as string}
                dayTime={item.price.isNight ? "Night" : ""}
                ratings={item.review.length !== 0 ? item.review.rate : "0.0"}
              />
            ))}
          </ul>
        </>
      )}
    </WidthWrapper>
  )
}

export default Bookings
