"use client"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import React from "react"
import BookingReviewItem from "./components/BookingReviewItem"
import { Breadcrumb } from "@/common/components/ui/Breadcrumb"
import { Title } from "@/common/components/ui/Title"
import { LINK_ACCOUNT_SETTINGS } from "@/common/constants/links"

const bookingReviewsDummy = [
  {
    id: 1,
    joinedDate: "Joined on August 2014",
    name: "Explore Siargao",
    pic: "http://localhost:3000/5.jpg",
    reviewMessage:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem omnis similique illum id quo soluta atque tenetur necessitatibus reprehenderit perspiciatis, dolores, aliquid voluptate aut maxime perferendis provident distinctio nulla magni alias dolore facilis? Accusantium, sit. Quo neque numquam itaque minus libero sapiente eum iste odio eius soluta ulla soluta ulla hello pmi nas an asd ! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem omnis similique illum id quo soluta atque tenetur necessitatibus reprehenderit perspiciatis, dolores",
    location: "United Kingdom",
    reviewedTime: "March 3, 2017",
  },
  {
    id: 2,
    joinedDate: "Joined on August 2014",
    name: "Explore Siargao",
    pic: "http://localhost:3000/5.jpg",
    location: "United Kingdom",
    reviewMessage:
      "Laborum nisi consectetur esse irure consequat nulla nulla eu fugiat duis incididunt quis laborum. Nulla ea adipisicing ex et occaecat commodo sint ea do officia irure. Aliquip do incididunt ut sunt. Aliquip velit non consequat velit sit minim laborum voluptate sunt ex excepteur ad deserunt.",
    reviewedTime: "March 3, 2017",
  },
]

const BookingReviews = () => {
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
      {bookingReviewsDummy.map((item) => (
        <BookingReviewItem
          id={item.id}
          joinedDate={item.joinedDate}
          location={item.location}
          name={item.name}
          pic={item.pic}
          reviewMessage={item.reviewMessage}
          reviewedTime={item.reviewedTime}
          key={item.id}
        />
      ))}
    </AccountSettingWrapper>
  )
}

export default BookingReviews
