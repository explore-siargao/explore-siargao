"use client"
import React from "react"
import { Button } from "@/common/components/ui/Button"
import { SEND_EMAIL_BUTTON_TEXT } from "@/common/constants"
import AuthContainer from "@/common/components/AuthContainer"
import { Input } from "@/common/components/ui/Input"
import { useForm } from "react-hook-form"
import useForgotPassword, { TForgotPassword } from "../hooks/useForgotPassword"
import toast from "react-hot-toast"

const ForgotPassword = () => {
  const { mutate: forgotPassword, isPending: isForgotPasswordPending } =
    useForgotPassword()
  const { register, handleSubmit, reset } = useForm<TForgotPassword>()
  const onSubmit = (data: TForgotPassword) => {
    const { email } = data
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          if (data.message && !isForgotPasswordPending) {
            toast.success(String(data.message), { duration: 5000 })
            reset()
          }
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    forgotPassword(
      {
        email,
      },
      callBackReq
    )
  }

  return (
    <AuthContainer title="Forgot Password">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6 space-y-4">
          <div>
            <Input
              inputLabel="Email"
              inputId="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              disabled={isForgotPasswordPending}
            />
          </div>
          <Button
            className="w-full my-5"
            type="submit"
            variant={"primary"}
            disabled={isForgotPasswordPending}
          >
            {isForgotPasswordPending ? (
              <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent text-primary-200 rounded-full">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              SEND_EMAIL_BUTTON_TEXT
            )}
          </Button>
        </div>
      </form>
    </AuthContainer>
  )
}

export default ForgotPassword
