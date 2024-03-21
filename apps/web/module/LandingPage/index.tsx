"use client"
import React from "react"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import useGetAllBookings from "../LandingPage/hooks/useGetAllBookings"
import { Spinner } from "@/common/components/ui/Spinner"
import useSessionStore from "@/common/store/useSessionStore"
import Listing from "../Listing"
import useDeleteProperty from "../Host/Property/hooks/useDeleteProperty"
import { Button } from "@/common/components/ui/Button"

const LandingPage = () => {
  const userId = useSessionStore((state) => state).id
  const { data, isPending } = useGetAllBookings()

  const {mutate} = useDeleteProperty(4)

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
      <Button variant="primary" onClick={()=> mutate({
        id: 1,
        propertyPrimaryLanguage: "Tagalog",
        companyLegalName: "Mountain View Place",
        propertyEmail: "mountainview123@gmail.com",
        propertyPhone: "587-6723",
        propertyName: "Plain View",
        propertyDescription: "Clean and green",
        propertyCurrency: "PHP",
        PropertyAddress: "Muntinlupa City",
        propertyCheckInTime: "2024-03-20 01:05:43.736",
        propertyCheckOutTime: "2024-03-25 01:05:43.736",
        propertyLateCheckOutAllowed: true,
        propertyLateCheckOutType: "percent",
        propertyLateCheckoutValue: 0.50,
        propertyTermsAndConditions: "no pets allowed",
        taxId: 123465,
        taxId2: 987564,
        propertyType: "Resort",
      })}>Add Button</Button>
    </WidthWrapper>
  )
}

export default LandingPage
