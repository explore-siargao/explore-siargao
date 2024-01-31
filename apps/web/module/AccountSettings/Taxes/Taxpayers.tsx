import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { IPersonalInfo } from "@/common/types/global"
import React, { useState } from "react"
import useUpdatePersonalInfo from "../hooks/useUpdatePersonalInfo"
import { useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"
import { Typography } from "@/common/components/ui/Typography"
type PersonalInfoProps = {
  isButtonClicked: boolean
  contentId: string
}

const Taxpayers = ({ firstName, lastName, userId, country }: IPersonalInfo) => {
  const [contentState, setContentState] = useState<PersonalInfoProps>({
    isButtonClicked: false,
    contentId: "",
  })
  const { register, reset, handleSubmit } = useForm<IPersonalInfo>()
  const { mutate: mutateLegalName, isPending: isPendingLegalName } =
    useUpdatePersonalInfo(userId as number)
  const queryClient = useQueryClient()

  const onSubmitLegalName = (formData: IPersonalInfo) => {
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          queryClient.invalidateQueries({
            queryKey: ["session"],
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
    mutateLegalName({ ...formData }, callBackReq)
  }

  return (
    <div className="text-sm border-b border-text-50">
      {!contentState.isButtonClicked ? (
        <div className="flex justify-between pt-5 pb-8">
          <div>
            <Typography variant={"p"}>Value Added Tax (VAT)</Typography>
            <Typography fontWeight={"light"}>
              If you are VAT-registered, please add your VAT ID.
            </Typography>
          </div>
          <button
            onClick={() =>
              setContentState({
                isButtonClicked: !contentState.isButtonClicked,
                contentId: "legalName",
              })
            }
            className="underline self-start select-none "
          >
            Edit
          </button>
        </div>
      ) : (
        <div className="grid pt-5 pb-8">
          <div className="flex justify-between">
            <Typography variant={"p"}>Value Added Tax (VAT)</Typography>
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
          <Typography fontWeight={"light"}>
            If you are VAT-registered, please add your VAT ID.
          </Typography>
          <form onSubmit={handleSubmit(onSubmitLegalName)}>
            <div className="grid grid-cols-2 gap-4 my-4">
              <Input
                inputId="firstName"
                inputLabel="VAT ID Number"
                defaultValue={firstName}
                {...register("firstName")}
              />
              <Input
                inputId="lastName"
                inputLabel="Name on Registration"
                defaultValue={lastName}
                {...register("lastName")}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 my-4">
              <Input
                inputId="firstName"
                inputLabel="Address line 1"
                defaultValue={firstName}
                {...register("firstName")}
              />
              <Input
                inputId="lastName"
                inputLabel="Address line 2 (optional)"
                defaultValue={lastName}
                {...register("lastName")}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 my-4">
              <Input
                inputId="firstName"
                inputLabel="City"
                defaultValue={firstName}
                {...register("firstName")}
              />
              <Input
                inputId="lastName"
                inputLabel="Province"
                defaultValue={lastName}
                {...register("lastName")}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 my-4">
              <Input
                inputId="country"
                inputLabel="Country"
                defaultValue={country}
                {...register("country")}
              />
              <Input
                inputId="firstName"
                inputLabel="Zip/postal code"
                defaultValue={firstName}
                {...register("firstName")}
              />
            </div>
            <Button className="w-20" size={"sm"} type="submit">
              {isPendingLegalName ? (
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

export default Taxpayers
