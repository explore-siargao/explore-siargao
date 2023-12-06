import { Button } from "@/common/components/ui/Button"
import React, { useState } from "react"

type PersonalInfoProps = {
  isButtonClicked: boolean
  contentId: string
}
const GovernmentId = () => {
  const [contentState, setContentState] = useState<PersonalInfoProps>({
    isButtonClicked: false,
    contentId: "",
  })
  return (
    <div className="text-sm">
      {!contentState.isButtonClicked ? (
        <div className="flex justify-between py-5">
          <div>
            <h1>Goverment ID</h1>
            <p className="font-light">Not Provided</p>
          </div>
          <button
            onClick={() =>
              setContentState({
                isButtonClicked: !contentState.isButtonClicked,
                contentId: "GovernmentId",
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
            <h1>Goverment ID</h1>
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
            We’ll need you to add an official government ID. This step helps
            make sure you’re really you.
          </p>

          <div className="flex items-center justify-center w-full my-4">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-primary-300 border-dashed rounded-lg cursor-pointer bg-primary-50 hover:bg-primary-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-primary-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-text-500 d">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-text-500">
                  PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept="image/png, image/gif, image/jpeg"
              />
            </label>
          </div>

<<<<<<< HEAD
          <Button className="w-20"  size={"sm"}>
=======
          <Button className="w-20" size={"sm"} variant={"success"}>
>>>>>>> 5c510e51987c59283b24f1b7d4076b2fc8fdf4a7
            Save
          </Button>
        </div>
      )}
    </div>
  )
}

export default GovernmentId
