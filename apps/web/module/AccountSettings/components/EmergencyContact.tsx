import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import React, { useState } from "react"

type PersonalInfoProps = {
  isButtonClicked: boolean
  contentId: string
}
const EmergencyContact = () => {
  const [contentState, setContentState] = useState<PersonalInfoProps>({
    isButtonClicked: false,
    contentId: "",
  })
  return (
    <div className="text-sm">
      {!contentState.isButtonClicked ? (
        <div className="flex justify-between py-5">
          <div>
            <h1>Emergency Contact</h1>
            <p className="font-light">Not provided</p>
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
        <div className="grid py-5">
          <div className="flex justify-between">
            <h1>Emergency Contact</h1>
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
            A trusted contact we can alert in an urgent situation.
          </p>
          <div className="my-4 space-y-4">
            <Input inputId="name" inputLabel="Name" />
            <Input inputId="relationship" inputLabel="Relationship" />
            <select
              id="countries"
              className="pr-10 text-text-900 focus-within:z-10 focus-within:ring-2 focus-within:ring-text-600 text-sm rounded-lg block h-14 w-[490px] p-2.5 "
            >
              <option selected>Preferred language</option>
              <option value="ENG">English</option>
              <option value="TAG">Tagalog</option>
              <option value="CHINESE">中文 (繁體)</option>
              <option value="ITALIAN">Italian</option>
            </select>
            <div className="grid grid-cols-2 gap-4">
              <Input inputId="email" inputLabel="Email" />
              <Input inputId="contactNumber" inputLabel="Phone Number" />
            </div>
          </div>
          <Button className="w-20" size={"sm"} variant={"success"}>
            Save
          </Button>
        </div>
      )}
    </div>
  )
}

export default EmergencyContact
