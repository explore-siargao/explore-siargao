import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import React, { useState } from "react"

type PersonalInfoProps = {
  isButtonClicked: boolean
  contentId: string
}
const EmailAddress = () => {
  const [contentState, setContentState] = useState<PersonalInfoProps>({
    isButtonClicked: false,
    contentId: "",
  })
  return (
    <div>
      {!contentState.isButtonClicked ? (
        <div className="flex justify-between py-5">
          <div>
            <h1>Email Address</h1>
            <p className="text-base font-light">Full name</p>
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
            <h1>Legal name</h1>
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
          <p className="text-base font-light">
            Use an address you’ll always have access to.
          </p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <Input
              inputId="email"
              inputLabel="Email Address"
              placeholder="you@sample.com"
            />
          </div>
          <Button className="w-20" variant={"success"}>
            Save
          </Button>
        </div>
      )}
    </div>
  )
}

export default EmailAddress
