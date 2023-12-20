"use client"
import BookingBoxContainer from "@/common/components/BookingBoxContainer"
import Map from "@/common/components/Map"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import WishlistBoxContainer from "@/common/components/WishlistBoxContainer"
import WishlistsItemContainer from "@/common/components/WishlistsItemContainer"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"
import { LINK_ACCOUNT_WISHLIST } from "@/common/constants/links"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"
import React from "react"
const tripGroup = [
  {
    id: 1,
    photo: "http://localhost:3000/5.jpg",
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "200",
  },
  {
    id: 2,
    photo: "http://localhost:3000/5.jpg",
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "200",
  },
  {
    id: 3,
    photo: "http://localhost:3000/5.jpg",
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "200",
  },
  {
    id: 4,
    photo: "http://localhost:3000/5.jpg",
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "200",
  },
  {
    id: 5,
    photo: "http://localhost:3000/5.jpg",
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "200",
  },
  {
    id: 6,
    photo: "http://localhost:3000/5.jpg",
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "200",
  },
  {
    id: 7,
    photo: "http://localhost:3000/5.jpg",
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "200",
  },
  {
    id: 8,
    photo: "http://localhost:3000/5.jpg",
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "200",
  },
  {
    id: 9,
    photo: "http://localhost:3000/5.jpg",
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "200",
  },
  {
    id: 10,
    photo: "http://localhost:3000/5.jpg",
    location: "Cavinti, Laguna",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "200",
  },
]
const WishlistsItem = () => {
  const router = useRouter()
  return (
    <WidthWrapper width={"full"} className="mt-24 lg:mt-32 h-screen">
      <div className="flex bg-slate-100 h-full">
        <div className="bg-red-100 w-[920px] 2xl:w-[1000px]">
          <WishlistsItemContainer datas={tripGroup} />
        </div>
        <div className="h-full">
          <Map />
        </div>
      </div>
    </WidthWrapper>
  )
}

export default WishlistsItem
