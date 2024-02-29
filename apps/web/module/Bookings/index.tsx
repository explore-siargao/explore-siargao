import React from "react"
import { Title } from "@/common/components/ui/Title"
import BookingBoxContainer from "@/common/components/BookingBoxContainer"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import useGetAllBookings from "../LandingPage/hooks/useGetAllBookings"
import { Spinner } from "@/common/components/ui/Spinner"
import useSessionStore from "@/common/store/useSessionStore"
import Notifications from "../Notification/Notification"

const notifications = [
  {
    avatarKey: 'profile1.jpg',
    user: 'John Madrigal',
    description: 'booked your listing Transient House in Paete for 5 days',
    time: '4hr'
  },
  {
    avatarKey: 'profile2.jpg',
    user: 'John Madrigal',
    description: 'added a review to your listing',
    time: '1hr'
  },
  {
    avatarKey: 'profile3.jpg',
    user: 'Rene Diaz',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '3hr'
  }
];

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

          <Notifications content={notifications} />

          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 mx-auto w-full max-w-[2520px] justify-center">
            {data?.items?.map((item: any) => (
              <BookingBoxContainer
                key={item.id}
                listingId={item.id}
                location={item.address}
                date={item.description}
                distance={"100 kilometers away"}
                price={"₱" + item.price}
                imageKey={item.imageKey[0].fileKey as string}
                dayTime={item.price.isNight ? "Night" : ""}
                ratings={item.ratings}
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
