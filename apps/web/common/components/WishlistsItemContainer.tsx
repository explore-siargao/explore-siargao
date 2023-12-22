"use client"
import Image from "next/image"
import React, { useState } from "react"
import { Title } from "./ui/Title"
import {
  DocumentDuplicateIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline"
import {
  ArrowLeftIcon,
  ArrowUpTrayIcon,
  CheckCircleIcon,
  StarIcon,
} from "@heroicons/react/20/solid"
import { Typography } from "./ui/Typography"
import AddNoteModal from "@/module/AccountSettings/components/modals/AddNoteModal"
import toast from "react-hot-toast"
type ItemData = {
  id: number
  photo: string
  location: string
  distance: string
  date: string
  price: string
  dayTime: string
  ratings: string
  reviews: number
  wishlistName: string
}

type WishlistsItemCProps = {
  datas: ItemData[]
  isButtonClicked: boolean
  contentId: string
}

const WishlistsItemContainer = ({
  datas,
  isButtonClicked,
  contentId,
}: WishlistsItemCProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked((setIsClicked) => !setIsClicked)
  }
  const [addNote, setAddNote] = useState(false)
  const [contentState, setContentState] = useState({
    isButtonClicked: false,
    buttonId: "",
  })
  return (
    <div className="flex flex-col w-full xl:w-[920px]">
      <div className="sticky w-full 2xl:w-[920px] top-16 md:top-28 bg-white z-50 flex border-b-gray-200 border-b py-4 items-center">
        <ArrowLeftIcon
          className="h-10 w-10 cursor-pointer rounded-full hover:bg-gray-50 p-2 -ml-3"
          //   onClick={() => router.push(LINK_ACCOUNT_WISHLIST)}
        />

        <Typography
          variant={"h4"}
          className="w-full text-left place-self-center font-semibold ml-4"
        >
          asd{" "}
        </Typography>
        <div className="flex gap-3">
          <DocumentDuplicateIcon
            onClick={() =>
              toast("Link copied!", {
                icon: <CheckCircleIcon className="h-5 w-5 text-success-500" />,
              })
            }
            className="h-10 w-10 cursor-pointer rounded-full hover:bg-gray-50 p-2"
          />
          <button className="h-10 w-10 cursor-pointer rounded-full hover:bg-gray-50 p-2 text-xs">
            •••
          </button>
        </div>
      </div>
      <div>
        <Title className="w-full text-left place-self-center font-semibold">
          Wishlist title
        </Title>
        <div className="flex">
          <Typography
            variant={"h5"}
            className="border-2 border-text-100 rounded-full hover:border-text-300 p-2"
          >
            Add dates
          </Typography>
          <Typography
            variant={"h5"}
            className="border-2 border-text-100 rounded-full hover:border-text-300 p-2"
          >
            1 guest
          </Typography>
        </div>
      </div>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full max-w-[2520px] justify-center">
        {datas.map((item) => (
          <li key={item.id}>
            <div className="h-72 2xl:w-auto rounded-2xl relative select-none">
              <HeartIcon
                className={`absolute top-3 right-3 h-7 w-7 text-text-50 active:scale-90 ${
                  isClicked ? "fill-error-500" : "fill-text-500/50 "
                }`}
                onClick={handleClick}
              />
              <Image
                src={item.photo}
                width={300}
                height={300}
                alt={item.photo}
                className="object-cover h-full w-full rounded-xl"
              />
            </div>
            <div className="flex-1 -space-y-1 w-auto">
              <div className="flex justify-between">
                <Title size={"ContentTitle"} className="text-text-500">
                  {item.location}
                </Title>
                <div className="flex text-text-500 place-items-center gap-1">
                  <StarIcon className="h-4 w-auto" />
                  {item.ratings} {item.reviews}
                </div>
              </div>
              <div className="text-text-300 text-sm">
                <Typography>{item.distance}</Typography>
                <p>{item.date}</p>
              </div>
              <Typography
                variant={"p"}
                fontWeight={"semiBold"}
                className="text-text-700 underline"
              >
                {item.price} <span className="font-normal">{item.dayTime}</span>
              </Typography>
            </div>
            <div>
              {/* {!contentState.isButtonClicked ? (
                <div className="flex justify-between py-5">
                  <button
                    onClick={() =>
                      setContentState({
                        isButtonClicked: !contentState.isButtonClicked,
                        contentId: "legalName",
                      })
                    }
                    className="text-text-300 underline hover:text-text-700 select-none "
                  >
                    Add a note
                  </button>
                </div>
              ) : (
                <div className="grid py-5">
                  <Typography>Typography</Typography>
                </div>
              )} */}
              {isButtonClicked === false ? (
                <button
                  // onClick={() =>
                  //   setContentState({
                  //     isButtonClicked: true,
                  //   })
                  // }
                  onClick={() => setAddNote(true)}
                  className="text-text-300 underline hover:text-text-700 select-none "
                >
                  Add a note
                </button>
              ) : (
                "Notes"
              )}
            </div>
          </li>
        ))}
      </ul>
      <AddNoteModal isOpen={addNote} onClose={() => setAddNote(false)} />
    </div>
  )
}

export default WishlistsItemContainer
