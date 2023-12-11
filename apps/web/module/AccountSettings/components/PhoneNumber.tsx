import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { IPersonalInfo } from "@/common/types/global"
import React, { useState } from "react"
import useUpdatePersonalInfo from "../hooks/useUpdatePersonalInfo"
import { useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"

type PersonalInfoProps = {
  isButtonClicked: boolean
  contentId: string
}
const PhoneNumber = ({ phoneNumber, userId }: IPersonalInfo) => {
  const [contentState, setContentState] = useState<PersonalInfoProps>({
    isButtonClicked: false,
    contentId: "",
  })

  const { register, reset, handleSubmit } = useForm<IPersonalInfo>()
  const { mutate, isPending } = useUpdatePersonalInfo(userId as number)
  const queryClient = useQueryClient()

  const onSubmit = (formData: IPersonalInfo) => {
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          queryClient.invalidateQueries({
            queryKey: ["personal-info"],
          })
          toast.success(data.message)
          reset()
        } else {
          toast.error(String(data.message))
        }
      },
      onError: (err: any) => {
        toast.error(String(err))
      },
    }
    mutate({ ...formData }, callBackReq)
  }

  return (
    <div className="text-sm">
      {!contentState.isButtonClicked ? (
        <div className="flex justify-between py-5">
          <div>
            <h1>Phone number</h1>
            <p className="font-light">
              {phoneNumber !== "" ? phoneNumber : "Enter a new phone number"}
            </p>
          </div>
          <button
            onClick={() =>
              setContentState({
                isButtonClicked: !contentState.isButtonClicked,
                contentId: "PhoneNumber",
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
            <h1>Phone number</h1>
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
            Add a number so confirmed guests and ExploreSiargao can get in
            touch. You can add other numbers and choose how they’re used
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4 my-4">
              <Input
                inputId="phoneNumber"
                inputLabel="Phone number"
                defaultValue={phoneNumber}
                {...register("phoneNumber")}
              />
            </div>
            <Button className="w-20" size={"sm"}>
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
  )
}

export default PhoneNumber
