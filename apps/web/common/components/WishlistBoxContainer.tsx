import React from "react"
import { Title } from "./ui/Title"
import Image from "next/image"

type Props = {
  photo: string
  title: string
  text: string
}
const WishlistBoxContainer = ({ title, text, photo }: Props) => {
  return (
    <>
      <div>
        <div className="h-[150px] w-[150px] md:h-[290px] md:w-[290px] rounded-2xl p-1 border border-text-100 shadow-md">
          <Image
            src={photo}
            width={300}
            height={300}
            alt={photo}
            className="box-border h-full w-full rounded-xl shadow-md"
          />
        </div>
        <div className="mt-2">
          <Title size={"ContentTitle"} className="text-text-500">
            {title}
          </Title>
          <p className="text-text-300">{text}</p>
        </div>
      </div>
    </>
  )
}

export default WishlistBoxContainer
