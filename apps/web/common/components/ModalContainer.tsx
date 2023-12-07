"use Client"
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/20/solid"
import React from "react"
type Props = {
  children: React.ReactNode
  title?: string
  onClose?: () => void
  onBack?: () => void
}
const ModalContainer = ({ children, title, onClose, onBack }: Props) => {
  return (
    <>
      <div className="bg-white shadow rounded-2xl ">
        <div className="flex border-b-gray-200 border-b p-4">
          <div>
            {onClose ? (
              <XMarkIcon
                className="h-6 w-6 cursor-pointer rounded-full hover:bg-gray-300/30"
                onClick={() => onClose()}
              />
            ) : null}
            {onBack ? (
              <ArrowLeftIcon
                className="h-6 w-6 cursor-pointer rounded-full hover:bg-gray-300/30"
                onClick={() => onBack()}
              />
            ) : null}
          </div>
          <div className="flex-1">
            <h1
              className={`w-full text-center place-self-center font-semibold`}
            >
              <span className={`${onClose || onBack ? "-ml-4" : ""}`}>
                {title}
              </span>
            </h1>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}

export default ModalContainer
