"use client"
import React from "react"
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/20/solid"
type Props = {
  children: React.ReactNode
  title: string
  onClose?: () => void
  onBack?: () => void
}
const AuthContainer = ({ children, title, onClose, onBack }: Props) => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-primary-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-[540px]">
        <div className="bg-white shadow sm:rounded-2xl">
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
                  {title} test image
                </span>
              </h1>
            </div>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default AuthContainer
