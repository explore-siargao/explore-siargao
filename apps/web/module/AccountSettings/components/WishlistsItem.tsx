"use client"
import BookingBoxContainer from "@/common/components/BookingBoxContainer"
import Map from "@/common/components/Map"
import MapBox from "@/common/components/MapBox"
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
    location: "Explore Siargao",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "(200)",
    wishlistName: "Siargao",
  },
  {
    id: 2,
    photo: "http://localhost:3000/5.jpg",
    location: "Explore Siargao",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "(200)",
    wishlistName: "Siargao",
  },
  {
    id: 3,
    photo: "http://localhost:3000/5.jpg",
    location: "Explore Siargao",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "(200)",
    wishlistName: "Siargao",
  },
  {
    id: 4,
    photo: "http://localhost:3000/5.jpg",
    location: "Explore Siargao",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "(200)",
    wishlistName: "Siargao",
  },
  {
    id: 5,
    photo: "http://localhost:3000/5.jpg",
    location: "Explore Siargao",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "(200)",
    wishlistName: "Siargao",
  },
  {
    id: 6,
    photo: "http://localhost:3000/5.jpg",
    location: "Explore Siargao",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "(200)",
    wishlistName: "Siargao",
  },
  {
    id: 7,
    photo: "http://localhost:3000/5.jpg",
    location: "Explore Siargao",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "(200)",
    wishlistName: "Siargao",
  },
  {
    id: 8,
    photo: "http://localhost:3000/5.jpg",
    location: "Explore Siargao",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "(200)",
    wishlistName: "Siargao",
  },
  {
    id: 9,
    photo: "http://localhost:3000/5.jpg",
    location: "Explore Siargao",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "(200)",
    wishlistName: "Siargao",
  },
  {
    id: 10,
    photo: "http://localhost:3000/5.jpg",
    location: "Explore Siargao",
    distance: "100 kilometers away",
    date: "Dec 13 - 15",
    price: "₱3,419",
    dayTime: "night",
    ratings: "5.0",
    reviews: "(200)",
    wishlistName: "Siargao",
  },
]
const WishlistsItem = () => {
  const router = useRouter()
  return (
    <WidthWrapper width={"full"} className="pt-24 lg:pt-28 overflow-y-hidden">
      <div className="flex gap-2">
        <div className="relative px-5">
          {/* @ts-ignore */}
          <WishlistsItemContainer datas={tripGroup} />
        </div>
        <div className="relative w-full hidden lg:block ">
          <Map />
        </div>
      </div>
    </WidthWrapper>
  )
}

export default WishlistsItem
