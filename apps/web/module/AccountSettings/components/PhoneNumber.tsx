import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { IPersonalInfo } from "@/common/types/global"
import React, { useState } from "react"

type PersonalInfoProps = {
  isButtonClicked: boolean
  contentId: string
}
const PhoneNumber = ({ phoneNumber }: IPersonalInfo) => {
  const [contentState, setContentState] = useState<PersonalInfoProps>({
    isButtonClicked: false,
    contentId: "",
  })
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
          <div className="grid grid-cols-2 gap-4 my-4">
            <Input
              inputId="phoneNumber"
              inputLabel="Phone number"
              defaultValue={phoneNumber}
            />
          </div>
          <Button className="w-20" size={"sm"}>
            Save
          </Button>
        </div>
      )}
    </div>
  )
}

export default PhoneNumber
