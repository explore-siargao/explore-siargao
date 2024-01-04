"use client"
import WorldMap from "@/common/components/WorldMap"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import WishlistsItemContainer from "@/common/components/WishlistsItemContainer"
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
  return (
    <WidthWrapper width={"full"} className="pt-24 lg:pt-28 overflow-y-hidden">
      <div className="flex gap-2">
        <div className="relative px-5">
          {/* @ts-ignore */}
          <WishlistsItemContainer datas={tripGroup} />
        </div>
        <div className="relative w-full hidden lg:block">
          <div>
            <WorldMap />
          </div>
        </div>
      </div>
    </WidthWrapper>
  )
}

export default WishlistsItem
