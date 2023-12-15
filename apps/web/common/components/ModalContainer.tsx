"use Client"
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/20/solid"
import React from "react"
import { Button } from "./ui/Button"
type Props = {
  children: React.ReactNode
  title?: string
  onClose?: () => void
  onBack?: () => void
  positive?: string
  negative?: string
  isPending: boolean
  onClick: () => void
  isSubmit: boolean
}

const ModalContainer = ({
  children,
  title,
  positive,
  negative,
  onClose,
  onBack,
  isPending,
  isSubmit,
  onClick,
}: Props) => {
  return (
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
          <h1 className={`w-full text-center place-self-center font-semibold`}>
            <span className={`${onClose || onBack ? "-ml-4" : ""}`}>
              {title}
            </span>
          </h1>
        </div>
      </div>
      <div>{children}</div>
      <div className="flex justify-between px-6 pb-4">
        {isSubmit === true ? (
          <>
            <Button variant={"shaded"} type="button" onClick={onClose}>
              {negative}
            </Button>
            <Button type="submit">
              {isPending === true ? (
                <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent text-primary-200 rounded-full">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                positive
              )}
            </Button>
          </>
        ) : (
          <>
            <Button variant={"shaded"} type="button" onClick={onClose}>
              {negative}
            </Button>
            <Button onClick={() => onClick()}>
              {isPending === true ? (
                <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent text-primary-200 rounded-full">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                positive
              )}
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default ModalContainer
