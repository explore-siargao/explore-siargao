"use client"
import React from "react"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import useGetAllBookings from "../LandingPage/hooks/useGetAllBookings"
import { Spinner } from "@/common/components/ui/Spinner"
import useSessionStore from "@/common/store/useSessionStore"
import Listing from "../Listing"
import useGetThisMonthEarnings from "../Host/hooks/useGetThisMonthEarnings"
import useGetUpcomingEarnings from "../Host/hooks/useGetUpcomingEarnings"
import useGetPaidEarnings from "../Host/hooks/useGetPaidEarnings"
import useGetMonthYearEarnings from "../Host/hooks/useGetMonthYearEarnings"
import useGetThisMonthEarningsWithBookings from "../Host/hooks/useGetThisMonthEarningsWithBookings"
import useGetUpcomingEarningsWithBookings from "../Host/hooks/useGetUpcomingEarningsWithBookings"
import useGetPaidEarningsWithBookings from "../Host/hooks/useGetPaidEarningsWithBookings"
import useGetMonthYearEarningsWithBookings from "../Host/hooks/useGetMonthYearEarningsWithBookings"

const LandingPage = () => {
  const userId = useSessionStore((state) => state).id
  const { data, isPending } = useGetAllBookings()
  const { data: earnings } = useGetMonthYearEarningsWithBookings("march-2024")
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
    </WidthWrapper>
  )
}

export default LandingPage
