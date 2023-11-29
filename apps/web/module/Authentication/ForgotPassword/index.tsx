import React from "react"
import { Button } from "@/common/components/ui/Button"
import { SEND_EMAIL_BUTTON_TEXT } from "@/common/constants"
import AuthContainer from "@/common/components/AuthContainer"
import { Input } from "@/common/components/ui/Input"

const ForgotPassword = () => {
  return (
    <AuthContainer title="Forgot Password">
      <div className="p-6 space-y-4">
        <Input
          inputLabel="Email"
          inputId="email"
          type="email"
          placeholder="you@example.com"
        />
        <Button className="w-full">{SEND_EMAIL_BUTTON_TEXT}</Button>
      </div>
    </AuthContainer>
  )
}

export default ForgotPassword
