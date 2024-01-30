import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { IEmergencyContact } from "@/common/types/global"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import useAddEmergencyContact from "../hooks/useAddEmergencyContact"
import toast from "react-hot-toast"
import { useQueryClient } from "@tanstack/react-query"
import useRemoveEmergencyContact from "../hooks/useRemoveEmergencyContact"
import { Typography } from "@/common/components/ui/Typography"
import { T_EmergencyContact } from "@repo/contract"

type PersonalInfoProps = {
  isButtonClicked: boolean
  contentId: string
}
const EmergencyContact = ({
  emergencyContact,
  id,
}: {
  emergencyContact: T_EmergencyContact[]
  id: number
}) => {
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
  const { mutate, isPending } = useAddEmergencyContact(id)
  const {
    mutate: removeEmergencyContact,
    isPending: isPendingRemoveEmergencyContact,
  } = useRemoveEmergencyContact(id)
  const queryClient = useQueryClient()
  const [emergencyContactFormIsVisible, setEmergencyContactFormIsVisible] =
    useState(false)
  const onSubmit = (formData: IEmergencyContact) => {
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          queryClient.invalidateQueries({
            queryKey: ["session"],
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

  const callBackReq2 = {
    onSuccess: (data: any) => {
      if (!data.error) {
        queryClient.invalidateQueries({
          queryKey: ["session"],
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

  return (
    <div className="text-sm">
      {!contentState.isButtonClicked ? (
        <div>
          <div className="flex justify-between py-5">
            <div>
              <Typography variant={"p"}>Emergency Contact</Typography>
              {emergencyContact?.length === 0 ? (
                <p className="font-light">Not provided</p>
              ) : (
                ""
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
              {emergencyContact?.length !== 0 ? "Edit" : "Add"}
            </button>
          </div>
          {emergencyContact?.map((contact: T_EmergencyContact) => (
            <div key={contact.id} className="flex justify-between py-1">
              <Typography key={contact.id}>{contact.name}</Typography>
            </div>
          ))}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid py-5">
            <div className="flex justify-between">
              <Typography variant={"p"}>Emergency Contact</Typography>
              <button
                type="button"
                className="underline self-start select-none"
                onClick={() => {
                  setContentState({
                    isButtonClicked: !contentState.isButtonClicked,
                    contentId: " ",
                  })
                  setEmergencyContactFormIsVisible(false)
                }}
              >
                Cancel
              </button>
            </div>
            <Typography fontWeight={"light"}>
              A trusted contact we can alert in an urgent situation.
            </Typography>
            {emergencyContact?.map((contact: T_EmergencyContact) => (
              <div key={contact.id} className="flex justify-between py-5">
                <Typography key={contact.id}>{contact.name}</Typography>
                <button
                  type="button"
                  className="underline self-start select-none text-sm font-semibold"
                  onClick={() =>
                    removeEmergencyContact({ id: contact?.id }, callBackReq2)
                  }
                >
                  {isPendingRemoveEmergencyContact ? (
                    <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent text-primary-200 rounded-full">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Remove"
                  )}
                </button>
              </div>
            ))}
            {emergencyContact?.length === 0 || emergencyContactFormIsVisible ? (
              <div>
                <div className="my-4 space-y-4">
                  <div>
                    <Input
                      id="name"
                      label="Name"
                      {...register("name", {
                        required: "This field is required",
                      })}
                      errorMessage={
                        errors.name?.type === "required"
                          ? errors?.name?.message
                          : ""
                      }
                    />
                  </div>
                  <div>
                    <Input
                      id="relationship"
                      label="Relationship"
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
                      id="email"
                      label="Email"
                      {...register("email", {
                        required: "This field ia required",
                      })}
                      disabled={isPending}
                      errorMessage={
                        errors.email?.type === "required" ||
                        errors.phoneNumber?.type === "required"
                          ? "Email and Phone number is required"
                          : ""
                      }
                    />
                    <Input
                      id="contactNumber"
                      label="Phone Number"
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
            ) : (
              <div>
                {!emergencyContactFormIsVisible && (
                  <Button
                    variant={"secondary"}
                    type="button"
                    className="text-lg font-semibold p-6"
                    onClick={() => setEmergencyContactFormIsVisible(true)}
                  >
                    Add new emergency contact
                  </Button>
                )}
              </div>
            )}
          </div>
        </form>
      )}
    </div>
  )
}

export default EmergencyContact
