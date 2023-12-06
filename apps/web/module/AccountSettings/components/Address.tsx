import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import React, { useState } from "react"

type PersonalInfoProps = {
  isButtonClicked: boolean
  contentId: string
}
const Address = () => {
  const [contentState, setContentState] = useState<PersonalInfoProps>({
    isButtonClicked: false,
    contentId: "",
  })
  return (
    <div className="text-sm">
      {!contentState.isButtonClicked ? (
        <div className="flex justify-between py-5">
          <div>
            <h1>Address</h1>
            <p className="font-light">Enter an Address</p>
          </div>
          <button
            onClick={() =>
              setContentState({
                isButtonClicked: !contentState.isButtonClicked,
                contentId: "Address",
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
            <h1>Address</h1>
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
            Use a permanent address where you can receive mail.
          </p>
          <div className="my-4 space-y-4">
            <select
              id="countries"
              className="pr-10 text-text-900 focus-within:z-10 focus-within:ring-2 focus-within:ring-text-600 text-sm rounded-lg block h-14 w-[490px] p-2.5 "
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <div className="grid grid-cols-2 gap-4">
              <Input inputId="streetAddress" inputLabel="Street address" />
              <Input inputId="aptSuite" inputLabel="Apt, suite (optional)" />
              <Input inputId="city" inputLabel="city" />
              <Input inputId="stateProvice" inputLabel="State/Province" />
              <Input inputId="zipCode" type="number" inputLabel="zip code" />
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

export default Address
