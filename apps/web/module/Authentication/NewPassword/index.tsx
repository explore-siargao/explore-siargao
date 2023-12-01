"use client"
import React from "react"
import { Button } from "@/common/components/ui/Button"
import { SUBMIT_BUTTON_TEXT } from "@/common/constants"
import AuthContainer from "@/common/components/AuthContainer"
import { Input } from "@/common/components/ui/Input"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import useForgotPassword from "../hooks/useForgotPassword"
import Cookies from "js-cookie"
import { signIn } from "next-auth/react"
import toast from "react-hot-toast"

type ForgotPassword = {
  email: string
  code: number
  newPassword: string
  confirmPassword: string
}

const NewPassword = () => {
  const params = useSearchParams()
  const code = params.get("code")
  const email = params.get("email")
  const router = useRouter()
  const { mutate: forgotPassword, isPending: isPendingNewPassword } =
    useForgotPassword()
  const { register, handleSubmit, getValues } = useForm<ForgotPassword>()
  const onSubmit = (data: ForgotPassword) => {
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          if (data.item && !isPendingNewPassword) {
            Cookies.set("accessToken", data.item.accessToken)
            signIn("credentials", {
              callbackUrl: "/",
              username: email,
              password: getValues("newPassword"),
            })
          }
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    if (getValues("newPassword") === getValues("confirmPassword")) {
      forgotPassword(
        {
          code: Number(code),
          email: email as string,
          newPassword: getValues("newPassword"),
          confirmPassword: getValues("confirmPassword"),
        },
        callBackReq
      )
    } else {
      toast.error("Password Not match")
    }
  }
  if (code === null || email === null) {
    router.push("/")
  } else {
    return (
      <AuthContainer title="Reset Password">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 space-y-4">
            <div>
              <Input
                inputLabel="Enter New Password"
                inputId="newPassword"
                type="password"
                {...register("newPassword")}
                disabled={isPendingNewPassword}
              />
              <Input
                inputLabel="Confirm password"
                inputId="confirmPassword"
                type="password"
                className="mt-2"
                {...register("confirmPassword")}
                disabled={isPendingNewPassword}
              />
            </div>
            <Button className="w-full my-5" type="submit">
              {isPendingNewPassword ? (
               <div className="content px-4 md:px-7 lg:px-16 2xl:px-80 mt-28">
               <div
                 className="m-4 animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
                 role="status"
                 aria-label="loading"
               >
                 <span className="sr-only">Loading...</span>
               </div>
             </div>
              ) : (
                SUBMIT_BUTTON_TEXT
              )}

            </Button>
          </div>
        </form>
      </AuthContainer>
    )
  }
}

export default NewPassword
