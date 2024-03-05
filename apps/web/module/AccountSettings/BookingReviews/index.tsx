"use client"
import AccountSettingWrapper from "@/module/AccountSettings/components/AccountSettingWrapper"
import React, { useState } from "react"
import BookingReviewItem from "./BookingReviewItem"
import { Breadcrumb } from "@/common/components/ui/Breadcrumb"
import { Title } from "@/common/components/ui/Title"
import { LINK_ACCOUNT } from "@/common/constants/links"
import { cn } from "@/common/helpers/cn"
import BookingReviewItemPending from "./BookingReviewItemPending"
import useGetReviewsByUserId from "../../Listing/hooks/useGetReviewsByUserId"
import useSessionStore from "@/common/store/useSessionStore"
import { ACCOUNT, BOOKING_REVIEWS } from "@/common/constants"
import useGetListings from "../hooks/useGetListings"

const bookingReviewsDummy = {
  "error": false,
  "items": [
    {
      "id": 2,
      "fromDate": "2024-02-06 04:15:20.123",
      "toDate": "2024-02-11 04:15:20.123",
      "listingId": 2,
      "listing": {
        "title": "Mountain Retreat",
        "image": "2.jpg"
      },
      "createdAt": "2024-03-06 04:16:10.987"
    },
    {
      "id": 3,
      "fromDate": "2024-02-07 08:45:45.567",
      "toDate": "2024-02-12 08:45:45.567",
      "listingId": 3,
      "listing": {
        "title": "Beach House Paradise",
        "image": "3.jpg"
      },
      "createdAt": "2024-03-07 08:46:30.123"
    },
    {
      "id": 5,
      "fromDate": "2024-02-09 15:20:35.456",
      "toDate": "2024-02-14 15:20:35.456",
      "listingId": 5,
      "listing": {
        "title": "Countryside Cottage",
        "image": "5.jpg"
      },
      "createdAt": "2024-03-09 15:21:20.765"
    },
    {
      "id": 7,
      "fromDate": "2024-02-11 22:05:30.321",
      "toDate": "2024-02-16 22:05:30.321",
      "listingId": 7,
      "listing": {
        "title": "Riverside Cabin",
        "image": "7.jpg"
      },
      "createdAt": "2024-03-11 22:06:15.789"
    },
    {
      "id": 8,
      "fromDate": "2024-02-16 01:40:45.678",
      "toDate": "2024-03-02 01:40:45.678",
      "listingId": 8,
      "listing": {
        "title": "Historic Mansion",
        "image": "8.jpg"
      },
      "createdAt": "2024-03-12 01:41:30.987"
    },
    {
      "id": 9,
      "fromDate": "2024-03-01 05:25:20.987",
      "toDate": "2024-03-04 05:25:20.987",
      "listingId": 9,
      "listing": {
        "title": "Ski Chalet",
        "image": "9.jpg"
      },
      "createdAt": "2024-03-13 05:26:10.654"
    },
    {
      "id": 10,
      "fromDate": "2024-03-01 09:10:35.234",
      "toDate": "2024-03-04 09:10:35.234",
      "listingId": 10,
      "listing": {
        "title": "Treehouse Hideaway",
        "image": "10.jpg"
      },
      "createdAt": "2024-03-14 09:11:20.543"
    }
  ],
  "allItemCount": 7
}

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

  if (tableState === 1) {
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
  } else if (tableState === 0) {
    content = (
      <div className="flex flex-col">
        {bookingReviewsDummy?.items?.map((item, index) => (
          <div key={item.id}>
            <BookingReviewItemPending
              id={item.id}
              title={item.listing.title}
              image={item.listing.image}
              dateFrom={item.fromDate}
              dateTo={item.toDate}
              key={item.id}
            />
            {index === bookingReviewsDummy?.items.length! - 1 ? <></> : <hr />}
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
            className={cn(
              tableState === 0
                ? "border-text-900 text-text-900"
                : "border-transparent text-text-500 hover:border-text-300 hover:text-text-700",
              "whitespace-nowrap border-b-2 py-4 px-8 text-sm font-medium"
            )}
            onClick={() => setTableState(0)}
          >
            To Review
          </button>
          <button
            className={cn(
              tableState === 1
                ? "border-text-900 text-text-900"
                : "border-transparent text-text-500 hover:border-text-300 hover:text-text-700",
              "whitespace-nowrap border-b-2 py-4 px-8 text-sm font-medium"
            )}
            onClick={() => setTableState(1)}
          >
            Reviewed
          </button>
        </div>
        <div className="mt-6">{content}</div>
      </div>
    </AccountSettingWrapper>
  )
}

export default BookingReviews
