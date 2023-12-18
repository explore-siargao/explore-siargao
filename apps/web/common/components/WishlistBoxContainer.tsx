"use client"
import React, { useState } from "react"
import { Title } from "./ui/Title"
import Image from "next/image"
import { XMarkIcon } from "@heroicons/react/24/outline"
import DeleteWIshlistsModal from "@/module/AccountSettings/modals/DeleteWIshlistsModal"

type Props = {
  photo: string
  title: string
  text: string
}
const WishlistBoxContainer = ({ title, text, photo }: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const [removeModal, setRemoveModal] = useState(false)

  return (
    <>
      <div className="flex flex-col">
        <div
          className="h-[150px] w-[150px] md:h-72 md:w-auto 2xl:h-72 2xl:w-auto rounded-3xl relative select-none border border-text-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          role="button"
        >
          {isHovered && (
            <div onClick={() => setRemoveModal(true)}>
              <XMarkIcon
                role="button"
                className="absolute top-4 left-4 h-8 w-8 text-text-400 bg-primary-100 rounded-full p-1 hover:bg-white hover:shadow-lg transition hover:scale-105"
              />
            </div>
          )}
          <Image
            src={photo}
            width={300}
            height={300}
            alt={photo}
            className="object-cover h-full w-full rounded-3xl p-1"
          />
        </div>
        <div className="flex-1 ml-1 -space-y-1 w-auto">
          <Title size={"ContentTitle"} className="text-text-500">
            {title}
          </Title>
          <p className="text-text-300">{text}</p>
        </div>
      </div>
      <DeleteWIshlistsModal
        isOpen={removeModal}
        onClose={() => setRemoveModal(false)}
        title={title}
      />
    </>
  )
}

export default WishlistBoxContainer
