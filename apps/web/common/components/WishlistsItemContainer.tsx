"use client"
import Image from "next/image"
import React, { useState } from "react"
import { Title } from "./ui/Title"
import { DocumentDuplicateIcon, HeartIcon } from "@heroicons/react/24/outline"
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  StarIcon,
} from "@heroicons/react/20/solid"
import { Typography } from "./ui/Typography"
import AddNoteModal from "@/module/AccountSettings/components/modals/AddNoteModal"
import toast from "react-hot-toast"
import MenuModal from "@/module/AccountSettings/components/modals/MenuModal"
import { LINK_ACCOUNT_WISHLIST } from "../constants/links"
import { useParams } from "next/navigation"
import useGetWishGroupByUserAndTitle from "@/module/AccountSettings/hooks/useGetWishGroupByUserAndTitle"
import useSessionStore from "../store/useSessionStore"
import Link from "next/link"
import { Spinner } from "./ui/Spinner"

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
}

interface DetailsType {
  id: number
  img: string
  title: string
  address: string
  description: string
  price: string
  note: string
  isNight: boolean
}

const WishlistsItemContainer = ({ datas }: WishlistsItemCProps) => {
  const [details, setDetails] = useState<DetailsType>({
    id: 0,
    img: "",
    title: "",
    address: "",
    description: "",
    price: "",
    isNight: false,
    note: "",
  })
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked((setIsClicked) => !setIsClicked)
  }
  const [addNote, setAddNote] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const showAddNoteModal = () => {
    setAddNote(true)
  }
  const closeAddNoteModal = () => {
    setAddNote(false)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
  }
  const session = useSessionStore((state) => state)
  const params = useParams()
  const { data, isPending } = useGetWishGroupByUserAndTitle(
    session.id as number,
    params?._id as string
  )
  return (
    <>
      {isPending ? (
        <Spinner size={"md"}>Loading...</Spinner>
      ) : (
        <div className="flex flex-col w-full xl:w-[920px]">
          <div className="sticky w-full 2xl:w-[920px] top-26 bg-white z-50 flex border-b-gray-200 border-b py-4 items-center">
            <Link href={LINK_ACCOUNT_WISHLIST}>
              <ArrowLeftIcon className="h-10 w-10 cursor-pointer rounded-full hover:bg-gray-50 p-2 -ml-3" />
            </Link>
            <Typography
              variant={"h4"}
              className="w-full text-left place-self-center font-semibold ml-4"
            >
              Wishlist Title
            </Typography>
            <div className="flex gap-3">
              <DocumentDuplicateIcon
                onClick={() => {
                  toast("Link copied!", {
                    icon: (
                      <CheckCircleIcon className="h-5 w-5 text-success-500" />
                    ),
                  })
                  copyToClipboard()
                }}
                className="h-10 w-10 cursor-pointer rounded-full hover:bg-gray-50 p-2"
              />
              <button
                className="h-10 w-10 cursor-pointer rounded-full hover:bg-gray-50 p-2 text-xs"
                onClick={() => setOpenMenu(true)}
              >
                •••
              </button>
            </div>
          </div>
          <div>
            <Title className="w-full text-left place-self-center font-semibold">
              Wishlist title
            </Title>
            <div className="flex mb-8">
              <Typography
                variant={"h5"}
                className="border border-text-100 rounded-full hover:border-text-300 p-2"
              >
                Add dates
              </Typography>
              <Typography
                variant={"h5"}
                className="border border-text-100 rounded-full hover:border-text-300 p-2"
              >
                1 guest
              </Typography>
            </div>
          </div>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full max-w-[2520px] justify-center">
            {data?.items?.map((item) => (
              <li key={item.id}>
                <div className="h-72 2xl:w-auto rounded-2xl relative select-none">
                  <HeartIcon
                    id={item?.listing.id}
                    className={`absolute top-3 right-3 h-7 w-7 text-text-50 active:scale-90 ${
                      !isClicked ? "fill-error-500" : "fill-text-500/50 "
                    }`}
                    onClick={handleClick}
                  />
                  <Image
                    src={JSON.parse(item.listing.imageUrls)[0].url}
                    width={300}
                    height={300}
                    alt={JSON.parse(item.listing.imageUrls)[0].url}
                    className="object-cover h-full w-full rounded-xl"
                  />
                </div>
                <div className="flex-1 -space-y-1 w-auto">
                  <div className="flex justify-between">
                    <Title size={"ContentTitle"} className="text-text-500">
                      {item.listing.title}
                    </Title>
                    <div className="flex text-text-500 place-items-center gap-1">
                      <StarIcon className="h-4 w-auto" />
                      {item.listing.review.length !== 0
                        ? item?.listing?.review.rate
                        : "0.0"}{" "}
                      <span className="text-text-400">
                        {"(" + item?.listing?.review.length + ")"}
                      </span>
                    </div>
                  </div>
                  <div className="text-text-300 text-sm">
                    <Typography>{item?.listing?.address}</Typography>
                    <p>{item?.listing?.description}</p>
                  </div>
                  <Typography
                    variant={"p"}
                    fontWeight={"semiBold"}
                    className="text-text-700 underline"
                  >
                    {"₱" +
                      (item?.listing?.price?.fee +
                        item?.listing?.price.cleaningFee +
                        item?.listing?.price.serviceFee)}{" "}
                    <span className="font-normal">
                      {item?.price?.isNight ? "Night" : ""}
                    </span>
                  </Typography>
                </div>
                <div className="bg-primary-100 w-full p-2 mt-2 rounded-lg">
                  {item.note === null ? (
                    <button
                      id={"addNoteBtn"+item?.id}
                      type="button"
                      onClick={() => {
                        setDetails({
                          id: item?.id,
                          img: JSON.parse(item?.listing?.imageUrls)[0].url,
                          title: item?.listing?.title,
                          address: item?.listing?.address,
                          description: item?.listing?.description,
                          price:
                            item?.listing?.price?.fee +
                            item?.listing?.price.cleaningFee +
                            item?.listing?.price.serviceFee,
                          isNight: item?.listing?.price.isNight,
                          note: item?.note,
                        })
                        showAddNoteModal()
                      }}
                      className="text-text-300 underline hover:text-text-00 select-none "
                    >
                      Add a note
                    </button>
                  ) : (
                    item.note + " "
                  )}
                  {item.note !== null && (
                    <button
                      type="button"
                      id={"editBtn"+item?.id}
                      onClick={() => {
                        setDetails({
                          id: item?.id,
                          img: JSON.parse(item?.listing?.imageUrls)[0].url,
                          title: item?.listing?.title,
                          address: item?.listing?.address,
                          description: item?.listing?.description,
                          price:
                            item?.listing?.price?.fee +
                            item?.listing?.price.cleaningFee +
                            item?.listing?.price.serviceFee,
                          isNight: item?.listing?.price.isNight,
                          note: item?.note,
                        })
                        showAddNoteModal()
                      }}
                      className="text-text-300 underline hover:text-text-00 select-none "
                    >
                      Edit Note
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <AddNoteModal
            isOpen={addNote}
            img={details?.img}
            title={details?.title}
            address={details?.address}
            description={details?.description}
            price={details?.price as string}
            isNight={details?.isNight}
            note={details?.note}
            onClose={closeAddNoteModal}
            id={details?.id as number}
          />

          <MenuModal isOpen={openMenu} onClose={() => setOpenMenu(false)} />
        </div>
      )}
    </>
  )
}

export default WishlistsItemContainer
