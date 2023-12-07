import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { IEmergencyContact, IPersonalInfo } from "@/common/types/global"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import useAddEmergencyContact from "../hooks/useAddEmergencyContact"
import toast from "react-hot-toast"
import { useQueryClient } from "@tanstack/react-query"

type PersonalInfoProps = {
  isButtonClicked: boolean
  contentId: string
}
const EmergencyContact = ({ emergencyContact, id }: IPersonalInfo) => {
  const [contentState, setContentState] = useState<PersonalInfoProps>({
    isButtonClicked: false,
    contentId: "",
  })
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmergencyContact>()
  const { mutate, isPending } = useAddEmergencyContact(id as number)
  const queryClient = useQueryClient()

  const onSubmit = (formData: IEmergencyContact) => {
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          queryClient.invalidateQueries({
            queryKey: ["personal-info"],
          })
          toast.success("Contact Successfully added")
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
  console.log(emergencyContact)
  return (
    <div className="text-sm">
      {!contentState.isButtonClicked ? (
        <div className="flex justify-between py-5">
          <div>
            <h1>Emergency Contact</h1>
            {emergencyContact?.length === 0 ? (
              <p className="font-light">Not provided</p>
            ) : (
              emergencyContact?.map((contact: IEmergencyContact) => (
                <p className="font-light">{contact.name}</p>
              ))
            )}
          </div>
          <button
            onClick={() =>
              setContentState({
                isButtonClicked: !contentState.isButtonClicked,
                contentId: "EmergencyContact",
              })
            }
            className="underline self-start select-none"
          >
            Add
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid py-5">
            <div className="flex justify-between">
              <h1>Emergency Contact</h1>
              <button
                type="button"
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
              A trusted contact we can alert in an urgent situation.
            </p>
            <div className="my-4 space-y-4">
              <div>
                <Input
                  inputId="name"
                  inputLabel="Name"
                  {...register("name", { required: "This field is required" })}
                  errorMessage={
                    errors.name?.type === "required"
                      ? errors?.name?.message
                      : ""
                  }
                />
              </div>
              <div>
                <Input
                  inputId="relationship"
                  inputLabel="Relationship"
                  {...register("relationship", {
                    required: "This field is required",
                  })}
                  disabled={isPending}
                  errorMessage={
                    errors.relationship?.type === "required"
                      ? errors?.relationship?.message
                      : ""
                  }
                />
              </div>
              <select
                id="countries"
                disabled={isPending}
                className="pr-10 text-text-900 focus-within:z-10 focus-within:ring-2 focus-within:ring-text-600 text-sm rounded-lg block h-14 w-[490px] p-2.5 "
              >
                <option selected>Preferred language</option>
                <option value="ENG">English</option>
                <option value="TAG">Tagalog</option>
                <option value="CHINESE">中文 (繁體)</option>
                <option value="ITALIAN">Italian</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  inputId="email"
                  inputLabel="Email"
                  {...register("email", { required: "This field ia required" })}
                  disabled={isPending}
                  errorMessage={
                    errors.email?.type === "required" ||
                    errors.phoneNumber?.type === "required"
                      ? "Email and Phone number is required"
                      : ""
                  }
                />

                <Input
                  inputId="contactNumber"
                  inputLabel="Phone Number"
                  {...register("phoneNumber", {
                    required: "This field ia required",
                  })}
                  disabled={isPending}
                />
              </div>
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
          </div>
        </form>
      )}
    </div>
  )
}

export default EmergencyContact
