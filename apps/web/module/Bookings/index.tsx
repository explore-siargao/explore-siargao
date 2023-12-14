import React from "react"
import Header from "../LandingPage/components/Header"
import HomeWrapper from "@/common/components/HomeWrapper"
import { Title } from "@/common/components/ui/Title"
import BookingBoxContainer from "@/common/components/BookingBoxContainer"

const tripGroup = [
  {
    id: 1,
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    photo: "http://localhost:3000/1.jpg",
    dayTime: "night",
  },
  {
    id: 2,
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    photo: "http://localhost:3000/2.jpg",
    dayTime: "night",
  },
  {
    id: 3,
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    photo: "http://localhost:3000/3.jpg",
    dayTime: "night",
  },
  {
    id: 4,
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    photo: "http://localhost:3000/4.jpg",
    dayTime: "night",
  },
  {
    id: 5,
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    photo: "http://localhost:3000/5.jpg",
    dayTime: "night",
  },
]
const Bookings = () => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <Title>Bookings</Title>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row place-items-center pt-4 gap-4">
          {tripGroup.map((item) => (
            <BookingBoxContainer
              key={item.id}
              location={item.location}
              date={item.date}
              distance={item.distance}
              price={item.price}
              photo={item.photo}
              dayTime={item.dayTime}
            />
          ))}
        </div>
      </HomeWrapper>
    </>
  )
}

export default Bookings
