import React from "react"
import HomeWrapper from "@/common/components/HomeWrapper"
import { Title } from "@/common/components/ui/Title"
import WishlistBoxContainer from "@/common/components/WishlistBoxContainer"
const WishlistGroup = [
  {
    id: 1,
    pic: "http://localhost:3000/2.jpg",
    name: "My Wishlist",
    text: "1 saved",
  },
  {
    id: 2,
    pic: "http://localhost:3000/3.jpg",
    name: "Vacation",
    text: "3 saved",
  },
  {
    id: 3,
    pic: "http://localhost:3000/4.jpg",
    name: "Wanted",
    text: "2 saved",
  },
  {
    id: 4,
    pic: "http://localhost:3000/5.jpg",
    name: "Wanted",
    text: "2 saved",
  },
  {
    id: 5,
    pic: "http://localhost:3000/1.jpg",
    name: "Wanted",
    text: "2 saved",
  },
]

const Wishlist = () => {
  return (
    <HomeWrapper>
      <Title>Wishlists</Title>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 mx-auto w-full max-w-[2520px] ">
        {WishlistGroup.map((item) => (
          <WishlistBoxContainer
            key={item.id}
            photo={item.pic}
            title={item.name}
            text={item.text}
          />
        ))}
      </div>
    </HomeWrapper>
  )
}

export default Wishlist
