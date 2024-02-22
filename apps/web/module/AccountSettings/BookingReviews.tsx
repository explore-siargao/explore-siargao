"use client"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import React, { useState } from "react"
import BookingReviewItem from "./components/BookingReviewItem"
import { Breadcrumb } from "@/common/components/ui/Breadcrumb"
import { Title } from "@/common/components/ui/Title"
import { LINK_ACCOUNT } from "@/common/constants/links"
import combineClasses from "@/common/helpers/combineClasses"
import BookingReviewItemPending from "./components/BookingReviewItemPending"
import useGetReviewsByUserId from "../Bookings/hooks/useGetReviewsByUserId"
import useSessionStore from "@/common/store/useSessionStore"
import { ACCOUNT, BOOKING_REVIEWS } from "@/common/constants"
import useGetListings from "./hooks/useGetListings"

const bookingReviewsDummy = [
  {
    id: 1,
    joinedDate: "Joined on August 2014",
    name: "Luna Tres Villas",
    pic: "http://localhost:3000/5.jpg",
    reviewMessage:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem omnis similique illum id quo soluta atque tenetur necessitatibus reprehenderit perspiciatis, dolores, aliquid voluptate aut maxime perferendis provident distinctio nulla magni alias dolore facilis? Accusantium, sit. Quo neque numquam itaque minus libero sapiente eum iste odio eius soluta ulla soluta ulla hello pmi nas an asd ! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem omnis similique illum id quo soluta atque tenetur necessitatibus reprehenderit perspiciatis, dolores",
    location: "United Kingdom",
    reviewedTime: "March 3, 2017",
    averageRating: 3,
  },
  {
    id: 2,
    joinedDate: "Joined on August 2014",
    name: "Inn Hotels II",
    pic: "http://localhost:3000/5.jpg",
    location: "United Kingdom",
    reviewMessage:
      "Laborum nisi consectetur esse irure consequat nulla nulla eu fugiat duis incididunt quis laborum. Nulla ea adipisicing ex et occaecat commodo sint ea do officia irure. Aliquip do incididunt ut sunt. Aliquip velit non consequat velit sit minim laborum voluptate sunt ex excepteur ad deserunt.",
    reviewedTime: "March 3, 2017",
    averageRating: 5,
  },
]

const BookingReviews = () => {
  const [tableState, setTableState] = useState(0)
  let content
  const userId = useSessionStore().id
  const { data: reviewsByUserId } = useGetReviewsByUserId(userId as number)
  const { data: listingData } = useGetListings()

  type ratingsSchema = {
    accuracyRates: number
    checkInRates: number
    cleanLinessRates: number
    communicationRates: number
    locationRates: number
    valueRates: number
  }

  function getAverageStars(ratings: ratingsSchema) {
    // Extract values from the ratings object
    const values = Object.values(ratings)

    // Calculate the sum of all values
    const sum = values.reduce((acc, currentValue) => acc + currentValue, 0)

    // Calculate the average
    const average = sum / values.length

    // Round up the average
    const roundedAverage = Math.ceil(average)

    return roundedAverage
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  if (tableState === 0) {
    content = (
      <>
        {reviewsByUserId?.items?.map((item, index) => {
          const ratings = {
            accuracyRates: item.accuracyRates,
            checkInRates: item.checkInRates,
            cleanLinessRates: item.cleanLinessRates,
            communicationRates: item.communicationRates,
            locationRates: item.locationRates,
            valueRates: item.valueRates,
          }

          const reviewDate = new Date(item.createdAt)

          const year = reviewDate.getFullYear()
          const monthIndex = reviewDate.getMonth()
          const day = reviewDate.getDate()

          const monthName = months[monthIndex]

          return (
            <>
              <BookingReviewItem
                id={item.listing.id}
                location={item.listing.address}
                name={item.listing.title}
                pic={""}
                reviewMessage={item.comment}
                reviewedTime={`${monthName} ${day}, ${year}`}
                key={item.id}
                averageRating={getAverageStars(ratings)}
              />
              {index === reviewsByUserId.items?.length! - 1 ? <></> : <hr />}
            </>
          )
        })}
      </>
    )
  } else if (tableState === 1) {
    content = (
      <div className="flex flex-col">
        {listingData?.items?.map((item, index) => (
          <div key={item.id}>
            <BookingReviewItemPending
              id={item.id}
              name={item.title}
              pic={JSON.stringify(item.images)}
              key={item.id}
            />
            {index === listingData.items?.length! - 1 ? <></> : <hr />}
          </div>
        ))}
      </div>
    )
  }
  return (
    <AccountSettingWrapper>
      <div>
        <Breadcrumb home={ACCOUNT} page={BOOKING_REVIEWS} link={LINK_ACCOUNT} />
        <Title>{BOOKING_REVIEWS}</Title>
      </div>
      <div className="hidden sm:block">
        <div className="flex border-b border-b-text-50">
          <button
            className={combineClasses(
              tableState === 0
                ? "border-text-900 text-text-900"
                : "border-transparent text-text-500 hover:border-text-300 hover:text-text-700",
              "whitespace-nowrap border-b-2 py-4 px-8 text-sm font-medium"
            )}
            onClick={() => setTableState(0)}
          >
            Reviewed
          </button>
          <button
            className={combineClasses(
              tableState === 1
                ? "border-text-900 text-text-900"
                : "border-transparent text-text-500 hover:border-text-300 hover:text-text-700",
              "whitespace-nowrap border-b-2 py-4 px-8 text-sm font-medium"
            )}
            onClick={() => setTableState(1)}
          >
            To Review
          </button>
        </div>
        <div className="mt-6">{content}</div>
      </div>
    </AccountSettingWrapper>
  )
}

export default BookingReviews
