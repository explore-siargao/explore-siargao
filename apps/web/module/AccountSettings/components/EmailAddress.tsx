import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { IUser } from "@/common/types/global"
import React, { useState } from "react"
import useUpdateUserEmail from "../hooks/useUpdateEmail.ts"
import { useForm } from "react-hook-form"
import { useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { signIn } from "next-auth/react"
import Cookies from "js-cookie"

type PersonalInfoProps = {
  isButtonClicked: boolean
  contentId: string
}
const EmailAddress = ({ email, id }: IUser) => {
  const [contentState, setContentState] = useState<PersonalInfoProps>({
    isButtonClicked: false,
    contentId: "",
  })
  const {
    register: registerEmail,
    reset: resetEmail,
    handleSubmit: handleEmailSubmit,
  } = useForm<IUser>()
  const { mutate: mutateEmail, isPending: isPendingEmail } = useUpdateUserEmail(
    id as number
  )
  const queryClient = useQueryClient()

  const onSubmitEmail = (formData: IUser) => {
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          Cookies.set("accessToken", data?.items?.accessToken)
          signIn("credentials", {
            username: formData.email,
          })
          toast.success(data.message)
          queryClient.invalidateQueries({
            queryKey: ["personal-info"],
          })
          resetEmail()
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    mutateEmail({ ...formData }, callBackReq)
  }

  return (
    <div className="text-sm">
      {!contentState.isButtonClicked ? (
        <div className="flex justify-between py-5">
          <div>
            <h1>Email address</h1>
            <p className="font-light">{email}</p>
          </div>
          <button
            onClick={() =>
              setContentState({
                isButtonClicked: !contentState.isButtonClicked,
                contentId: "emailAddress",
              })
            }
            className="underline self-start select-none"
          >
            Edit
          </button>
        </div>
      ) : (
        <div className="grid py-5">
          <div className="flex justify-between">
            <h1>Email address</h1>
            <button
              className="underline self-start select-none"
              onClick={() =>
                setContentState({
                  isButtonClicked: !contentState.isButtonClicked,
                  contentId: " ",
                })
              }
            >
              Cancel
            </button>
          </div>
          <p className="font-light">
            Use an address you’ll always have access to.
          </p>
          <form onSubmit={handleEmailSubmit(onSubmitEmail)}>
            <Input
              inputId="email"
              inputLabel="Email Address"
              placeholder="you@sample.com"
              defaultValue={email}
              className="my-4"
              {...registerEmail("email")}
            />
            <Button className="w-20" size={"sm"} type="submit">
              {isPendingEmail ? (
                <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent text-primary-200 rounded-full">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Save"
              )}
            </Button>
          </form>
        </div>
      )}
    </div>
  )
}

export default EmailAddress
