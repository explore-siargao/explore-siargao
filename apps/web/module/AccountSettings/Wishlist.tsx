import React from "react"
import { Title } from "@/common/components/ui/Title"
import WishlistBoxContainer from "@/common/components/WishlistBoxContainer"
import { WidthWrapper } from "@/common/components/WidthWrapper"
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
    <WidthWrapper className="my-24 lg:my-32">
      <Title>Wishlists</Title>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
        {WishlistGroup.map((item) => (
          <WishlistBoxContainer
            key={item.id}
            photo={item.pic}
            title={item.name}
            text={item.text}
          />
        ))}
      </div>
    </WidthWrapper>
  )
}

export default Wishlist
