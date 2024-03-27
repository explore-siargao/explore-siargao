"use client"
import React from "react"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import useGetAllBookings from "../LandingPage/hooks/useGetAllBookings"
import { Spinner } from "@/common/components/ui/Spinner"
import useSessionStore from "@/common/store/useSessionStore"
import Listing from "../Listing"
import MessageConversation from "../Host/Conversation/MessageConversation"


const messages = [
  {
    id: 1,
    user: "Jane Doe",
    imageKey: "5.jpg",
    message: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at lectus nec arcu accumsan vulputate. Mauris aliquet, enim a conguefringilla, felis lorem pharetra justo, eget vestibulum lacus odio",
    isSender: true,
    timeSent: "2024-03-27 10:00:00",
    isSeen: true
  },
  {
    id: 1,
    user: "Jane Doe",
    imageKey: "5.jpg",
    message: " Lorem ipsum dolor ra Lorem ipsum dolor ra ",
    isSender: true,
    timeSent: "2024-03-27 10:00:00",
    isSeen: true
  },
  {
    id: 2,
    user: "Manny Brills",
    imageKey: "2.jpg",
    message: "Lorem ipsum dolor sit  Lorem ipsum ",
    timeSent: "2024-03-27 10:05:00",
    isSender: false,
    isSeen: false
  },
];


const LandingPage = () => {
  const userId = useSessionStore((state) => state).id
  const { data, isPending } = useGetAllBookings()
  return (
    <WidthWrapper className="my-24 lg:my-36">
      {isPending ? (
        <Spinner variant="primary" className="mt-4" />
      ) : (
        <>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 mx-auto w-full max-w-[2520px] justify-center">
            {data?.items?.map((item: any) => (
              <Listing
                key={item.id}
                listingId={item.id}
                location={item.address}
                date={item.description}
                distance={"100 kilometers away"}
                price={"₱" + item.price}
                imageKey={item.images}
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
      <MessageConversation messages={messages}/>
    </WidthWrapper>
  )
}

export default LandingPage
