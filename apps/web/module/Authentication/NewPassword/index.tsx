import React from "react"
import lock from "@/common/assets/padlock.png"
import Image from "next/image"
import { LINK_LOGIN } from "@/common/constants/links"
import Link from "next/link"
import { Button } from "@/common/components/ui/Button"
import { SUBMIT_BUTTON_TEXT } from "@/common/constants"
import AuthContainer from "@/common/components/AuthContainer"

const NewPassword = () => {
  return (
    <AuthContainer title="Reset Your Password">
      <div className="mt-3 space-y-4">
        <div className="isolate -space-y-px rounded-xl shadow-sm">
          <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-gray-600">
            <label
              htmlFor="newPassword"
              className="block text-xs font-medium text-gray-900"
            >
              Enter New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-gray-600">
            <label
              htmlFor="confirmPassword"
              className="block text-xs font-medium text-gray-900"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <Button className="w-full  my-5 ">{SUBMIT_BUTTON_TEXT}</Button>
      </div>
    </AuthContainer>
  )
}

export default NewPassword
