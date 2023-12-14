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

const LegalName = ({ firstName, lastName, userId }: IPersonalInfo) => {
  const [contentState, setContentState] = useState<PersonalInfoProps>({
    isButtonClicked: false,
    contentId: "",
  })
  const {
    register: registerLegalName,
    reset: resetLegalName,
    handleSubmit: handleLegalNameSubmit,
  } = useForm<IPersonalInfo>()
  const { mutate: mutateLegalName, isPending: isPendingLegalName } =
    useUpdatePersonalInfo(userId as number)
  const queryClient = useQueryClient()

  const onSubmitLegalName = (formData: IPersonalInfo) => {
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          queryClient.invalidateQueries({
            queryKey: ["personal-info"],
          })
          toast.success(data.message)
          resetLegalName()
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
    <div className="text-sm">
      {!contentState.isButtonClicked ? (
        <div className="flex justify-between py-5">
          <div>
            <h1>Legal name</h1>
            <p className="font-light">{firstName + " " + lastName}</p>
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
        <div className="grid py-5">
          <div className="flex justify-between">
            <h1>Legal name</h1>
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
          <p className="font-light">
            This is the name on your travel document, which could be a license
            or a passport.
          </p>
          <form onSubmit={handleLegalNameSubmit(onSubmitLegalName)}>
            <div className="grid grid-cols-2 gap-4 my-4">
              <Input
                inputId="firstName"
                inputLabel="First name"
                defaultValue={firstName}
                {...registerLegalName("firstName")}
              />
              <Input
                inputId="lastName"
                inputLabel="Last name"
                defaultValue={lastName}
                {...registerLegalName("lastName")}
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

export default LegalName
