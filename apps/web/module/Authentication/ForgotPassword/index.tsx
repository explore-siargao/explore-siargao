import React from "react"
import { Button } from "@/common/components/ui/Button"
import { SEND_EMAIL_BUTTON_TEXT } from "@/common/constants"
import AuthContainer from "@/common/components/AuthContainer"

const ForgotPassword = () => {
  return (
    <AuthContainer title="Forgot Password">
      <div className="mt-3 space-y-4">
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-gray-600">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="you@example.com"
          />
        </div>
        <Button className="w-full">{SEND_EMAIL_BUTTON_TEXT}</Button>
      </div>
    </AuthContainer>
  )
}

export default ForgotPassword
