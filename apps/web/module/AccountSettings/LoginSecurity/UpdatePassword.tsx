import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import React, { useState } from "react"
import useUpdatePersonalInfo from "../hooks/useUpdatePersonalInfo"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"
import { Typography } from "@/common/components/ui/Typography"
import { Title } from "@/common/components/ui/Title"
import { T_BackendResponse } from "@repo/contract"
import useSessionStore from "@/common/store/useSessionStore"

type T_UpdatePassword = {
  oldPassword: string
  newPassword: string
  confirmNewPassword: string
}

type T_ContentState = {
  isButtonClicked: boolean
  contentId: string
}

const UpdatePassword = () => {
  const [contentState, setContentState] = useState<T_ContentState>({
    isButtonClicked: false,
    contentId: "",
  })
  const { register, reset, handleSubmit } = useForm<T_UpdatePassword>()
  const isPending = false
  const registrationType = useSessionStore((state)=>state).registrationType
  const changePasswordDate = useSessionStore((state)=>state).changePasswordAt
  // const { mutate, isPending } = useUpdatePersonalInfo(1)
console.log(changePasswordDate)
  const onSubmitLegalName = (formData: T_UpdatePassword) => {
    const callBackReq = {
      onSuccess: (data: T_BackendResponse) => {
        if (!data.error) {
          toast.success(data.message as string)
          reset()
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    // mutate({ ...formData }, callBackReq)
  }
  const changePasswordLastUpdated = (changePasswordAt: string | Date | null | undefined): number | null => {
    if (!changePasswordAt) {
      return 0; 
    }
  
    const currentDate = new Date();
    const passwordChangeDate = new Date(changePasswordAt);
  
    if (isNaN(passwordChangeDate.getTime())) {
      return 0;
    }
  
    // Calculate the difference in months
    const monthsDifference = (currentDate.getFullYear() - passwordChangeDate.getFullYear()) * 12 +
      currentDate.getMonth() - passwordChangeDate.getMonth();
  
    return monthsDifference;
  };
  const passwordDuration = changePasswordLastUpdated(changePasswordDate as string)
  const passwordDescription = registrationType==="Manual" ? `Password updated ${passwordDuration} month ago` : `You are registered using ${registrationType}`
  
  return (
    <>
      <Title size="sub">Update password</Title>
      <div className="text-sm mt-2 border-b border-text-100">
        {!contentState.isButtonClicked ? (
          <div className="flex justify-between py-5">
            <div>
              <Typography variant="p">Password</Typography>
              <Typography fontWeight="light">
               {passwordDescription}
              </Typography>
            </div>
            <button
            disabled={registrationType!=="Manual"}
              onClick={() =>
                setContentState({
                  isButtonClicked: !contentState.isButtonClicked,
                  contentId: "legalName",
                })
              }
              className="underline self-start select-none disabled:opacity-40"
            >
              Edit
            </button>
          </div>
        ) : (
          <div className="grid py-5">
            <div className="flex justify-between">
              <Typography variant="p">Password</Typography>
              <button
                className="underline self-start select-none "
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
            <form onSubmit={handleSubmit(onSubmitLegalName)}>
              <div className="grid grid-cols-2 gap-4 my-4">
                <Input
                  id="firstName"
                  type="password"
                  label="Old Password"
                  {...register("oldPassword")}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 my-4">
                <Input
                  id="firstName"
                  type="New password"
                  label="First name"
                  {...register("newPassword")}
                />
                <Input
                  id="lastName"
                  type="Confirm new password"
                  label="Last name"
                  {...register("confirmNewPassword")}
                />
              </div>
              <Button className="w-20" size={"sm"} type="submit">
                {isPending ? (
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
    </>
  )
}

export default UpdatePassword
