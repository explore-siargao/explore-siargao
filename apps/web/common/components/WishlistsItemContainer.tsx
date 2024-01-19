"use client"
import { useState } from "react"
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/20/solid"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import toast from "react-hot-toast"
import { LINK_ACCOUNT_WISHLIST } from "../constants/links"
import useGetWishGroupByUserAndTitle from "@/module/AccountSettings/hooks/useGetWishGroupByUserAndTitle"
import useSessionStore from "../store/useSessionStore"
import { Spinner } from "./ui/Spinner"
import AddNoteModal from "@/module/AccountSettings/components/modals/AddNoteModal"
import MenuModal from "@/module/AccountSettings/components/modals/MenuModal"
import { Title } from "./ui/Title"
import { Typography } from "./ui/Typography"
import { ComponentProps, DetailsType } from "../types/global"
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline"
import useRemoveFromWishGroup from "@/module/AccountSettings/hooks/useRemoveFromWishGroup"
import { useQueryClient } from "@tanstack/react-query"

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

const HeartButton = ({
  isClicked,
  onClick,
  id,
}: {
  isClicked: boolean
  onClick: () => void
  id: number
}) => (
  <HeartIcon
    id={"heart" + id}
    className={`absolute top-3 right-3 h-7 w-7 text-text-50 active:scale-90 ${
      !isClicked ? "fill-error-500" : "fill-text-500/50 "
    }`}
    onClick={onClick}
  />
)

const ActionButton = ({ onClick, icon, text }: ComponentProps) => (
  <button
    className="h-10 w-10 cursor-pointer rounded-full hover:bg-gray-50 p-2 text-xs"
    onClick={onClick}
  >
    {icon}
    {text && <span>{text}</span>}
  </button>
)

const AddEditNoteButton = ({ onClick, id, note }: ComponentProps) => (
  <button
    type="button"
    id={id}
    onClick={onClick}
    className="text-text-300 underline hover:text-text-00 select-none"
  >
    {note === null ? "Add a note" : "Edit Note"}
  </button>
)

const WishlistsItemContainer = () => {
  const [details, setDetails] = useState<DetailsType>({
    id: 0,
    link: "",
    img: "",
    title: "",
    address: "",
    description: "",
    price: "",
    isNight: false,
    note: "",
    priceProps: {
      fee: 0,
      cleaningFee: 0,
      serviceFee: 0,
      isNight: false,
    },
  })

  const [addNote, setAddNote] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const showAddNoteModal = (item: any) => {
    setDetailsForItem(item)
    setAddNote(true)
  }

  const closeAddNoteModal = () => {
    setAddNote(false)
  }

  const setDetailsForItem = (item: any) => {
    setDetails({
      id: item?.id,
      link: item?.link,
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
      priceProps: {
        fee: item?.listing?.price?.fee,
        cleaningFee: item?.listing?.price?.cleaningFee,
        serviceFee: item?.listing?.price?.serviceFee,
        isNight: item?.listing?.price.isNight,
      },
    })
  }

  const queryClient = useQueryClient()
  const callBackReq = {
    onSuccess: (data: any) => {
      if (!data.error) {
        queryClient.invalidateQueries({
          queryKey: ["wish-group"],
        })
        queryClient.invalidateQueries({
          queryKey: ["wish-group-count"],
        })
        toast.success("Wishlist Successfully rempved from group")
      } else {
        toast.error(String(data.message))
      }
    },
    onError: (err: any) => {
      toast.error(String(err))
    },
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
  }

  const session = useSessionStore((state) => state)
  const { mutate } = useRemoveFromWishGroup(1)
  const params = useParams()
  const { data, isPending } = useGetWishGroupByUserAndTitle(
    session.id as number,
    params?._id as string
  )
  const [isClickedArray, setIsClickedArray] = useState<boolean[]>(() => {
    return (data?.items || []).map(() => false)
  })

  const handleClick = (index: number, wishGroupId: number) => {
    setIsClickedArray((prev) => {
      const updatedArray = [...prev]
      updatedArray[index] = !prev[index]
      mutate({ id: wishGroupId }, callBackReq)
      return updatedArray
    })
  }

  return (
    <>
      {isPending ? (
        <div className="p-6">
          <Spinner size="sm">Loading...</Spinner>
        </div>
      ) : (
        <div className="w-full">
          {/* ... (other components remain unchanged) */}
          <div className="sticky w-full top-0 bg-white z-50 flex border-b-gray-100 border-b py-4 px-6 items-center mt-1">
            <Link href={LINK_ACCOUNT_WISHLIST}>
              <ArrowLeftIcon className="h-10 w-10 cursor-pointer rounded-full hover:bg-gray-50 p-2 -ml-3" />
            </Link>
            <Typography
              variant={"h4"}
              className="w-full text-left place-self-center font-semibold ml-4"
            >
              {decodeURIComponent(params?._id as string)}
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
              <ActionButton onClick={() => setOpenMenu(true)} icon={"•••"} />
            </div>
          </div>
          {/* ... (other components remain unchanged) */}
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-full justify-center pt-4 pb-6 px-4">
            {data?.items?.length !== 0 ? (
              data?.items?.map((item, index) => (
                <div key={item?.id}>
                  <div className="h-72 2xl:w-auto rounded-2xl relative select-none">
                    <HeartButton
                      id={item.id}
                      isClicked={Boolean(isClickedArray[index])}
                      onClick={() => handleClick(index, item?.id as number)}
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
                        {item?.listing?.title}
                      </Title>
                      <div className="flex text-text-500 place-items-center gap-1">
                        <StarIcon className="h-4 w-auto" />
                        {item?.listing?.review?.length !== 0
                          ? item?.listing?.review?.rate
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
                  <div className="w-full mt-2 rounded-lg">
                    {item.note === null ? (
                      <AddEditNoteButton
                        onClick={() => showAddNoteModal(item)}
                        id={"addNoteBtn" + item?.id}
                      />
                    ) : (
                      item.note + " "
                    )}
                    {item.note !== null && (
                      <AddEditNoteButton
                        onClick={() => showAddNoteModal(item)}
                        id={"editBtn" + item?.id}
                        note={item.note}
                      />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <Typography>No data found</Typography>
            )}
          </div>
          <AddNoteModal
            isOpen={addNote}
            img={details?.img}
            title={details?.title}
            address={details?.address}
            description={details?.description}
            price={details?.priceProps}
            note={details?.note}
            onClose={closeAddNoteModal}
            id={details?.id as number}
          />
          <MenuModal
            isOpen={openMenu}
            onClose={() => setOpenMenu(false)}
            title={decodeURIComponent(params?._id as string)}
          />
        </div>
      )}
    </>
  )
}

export default WishlistsItemContainer
