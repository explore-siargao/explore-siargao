"use client"
import React from "react"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import useGetAllBookings from "../LandingPage/hooks/useGetAllBookings"
import { Spinner } from "@/common/components/ui/Spinner"
import useSessionStore from "@/common/store/useSessionStore"
import Listing from "../Listing"
import useGetReservationById from "../Host/Property/hooks/useGetReservationById"
import useGetReservationByGuest from "../Host/Property/hooks/useGetReservationsByGuest.ts"
import useGetReservationsByHostId from "../Host/Property/hooks/useGetReservationsByHost"
import useAddReservation from "../Host/Property/hooks/useAddReservation"
import useUpdateReservation from "../Host/Property/hooks/useUpdateReservation"
import useRemoveReservation from "../Host/Property/hooks/useRemoveReservation"


const LandingPage = () => {
  const userId = useSessionStore((state) => state).id
  const { data, isPending } = useGetAllBookings()
  const {mutate} = useRemoveReservation()
  return (
    <WidthWrapper className="my-24 lg:my-36">
      {isPending ? (
        <Spinner variant="primary" className="mt-4" />
      ) : (
        <>
        <button onClick={()=>mutate({id:2,propertyId:2,startDate:"2024-03-19 08:40:55.449", endDate:"2024-03-22 08:40:55.449"})}>Add</button>
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
    </WidthWrapper>
  )
}

export default LandingPage
