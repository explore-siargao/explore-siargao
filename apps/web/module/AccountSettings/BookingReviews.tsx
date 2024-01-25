"use client"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import React, { useState } from "react"
import BookingReviewItem from "./components/BookingReviewItem"
import { Breadcrumb } from "@/common/components/ui/Breadcrumb"
import { Title } from "@/common/components/ui/Title"
import { LINK_ACCOUNT_SETTINGS } from "@/common/constants/links"
import combineClasses from "@/common/helpers/combineClasses"
import BookingReviewItemPending from "./components/BookingReviewItemPending"

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
  },
]

const BookingReviews = () => {
  const [tableState, setTableState] = useState(0)
  let content

  if (tableState === 0) {
    content = (
      <>
        {bookingReviewsDummy.map((item) => (
          <BookingReviewItem
            id={item.id}
            location={item.location}
            name={item.name}
            pic={item.pic}
            reviewMessage={item.reviewMessage}
            reviewedTime={item.reviewedTime}
            key={item.id}
          />
        ))}
      </>
    );
  } else if (tableState === 1) {
    content = (
      <>
        {bookingReviewsDummy.map((item) => (
          <BookingReviewItemPending
            id={item.id}
            name={item.name}
            pic={item.pic}
            reviewedTime={item.reviewedTime}
            key={item.id}
          />
        ))}
      </>
    );
  }
  return (
    <AccountSettingWrapper>
      <div>
        <Breadcrumb
          home="Account"
          page="Booking Reviews"
          link={LINK_ACCOUNT_SETTINGS}
        />
        <Title>Booking Reviews</Title>
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
            Pending
          </button>
        </div>
        <div className="mt-6">
          {content}
        </div>
      </div>
    </AccountSettingWrapper>
  )
}

export default BookingReviews
