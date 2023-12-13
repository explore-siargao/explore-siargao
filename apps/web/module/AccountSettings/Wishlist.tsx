import React from "react"
import Header from "../LandingPage/components/Header"
import HomeWrapper from "@/common/components/HomeWrapper"
import { Title } from "@/common/components/ui/Title"
import WishlistBoxContainer from "@/common/components/WishlistBoxContainer"
const WishlistGroup = [
  {
    id: 1,
    pic: "http://localhost:3000/logo-single.png",
    name: "My Wishlist",
    text: "1 saved",
  },
  {
    id: 2,
    pic: "http://localhost:3000/logo-single.png",
    name: "Vacation",
    text: "3 saved",
  },
  {
    id: 3,
    pic: "http://localhost:3000/logo-single.png",
    name: "Wanted",
    text: "2 saved",
  },
  {
    id: 4,
    pic: "http://localhost:3000/logo-single.png",
    name: "Wanted",
    text: "2 saved",
  },
  {
    id: 5,
    pic: "http://localhost:3000/logo-single.png",
    name: "Wanted",
    text: "2 saved",
  },
  {
    id: 6,
    pic: "http://localhost:3000/logo-single.png",
    name: "Wanted",
    text: "2 saved",
  },
]

const Wishlist = () => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <Title className="">Wishlist</Title>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row place-items-center pt-4 gap-4">
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
    </>
  )
}

export default Wishlist
