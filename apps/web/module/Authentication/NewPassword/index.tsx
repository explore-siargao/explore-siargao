import React from "react"
import { Button } from "@/common/components/ui/Button"
import { SUBMIT_BUTTON_TEXT } from "@/common/constants"
import AuthContainer from "@/common/components/AuthContainer"
import { Input } from "@/common/components/ui/Input"

const NewPassword = () => {
  return (
    <AuthContainer title="Reset Password">
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <Input
            Label="Enter New Password"
            inputId="newPassword"
            type="password"
          />
          <Input
            Label="Confirm password"
            inputId="confirmPassword"
            type="password"
          />
        </div>
        <Button className="w-full my-5 ">{SUBMIT_BUTTON_TEXT}</Button>
      </div>
    </AuthContainer>
  )
}

export default NewPassword
