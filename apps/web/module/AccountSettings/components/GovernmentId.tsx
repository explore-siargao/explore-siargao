import { Button } from "@/common/components/ui/Button"
import { Typography } from "@/common/components/ui/Typography"
import { IPersonalInfo } from "@/common/types/global"
import React, { useState } from "react"
import GovernmentIdModal from "./modals/GovernmentIdModal"

type PersonalInfoProps = {
  isButtonClicked: boolean
  contentId: string
}
const GovernmentId = ({ governmentId }: IPersonalInfo) => {
  const [contentState, setContentState] = useState<PersonalInfoProps>({
    isButtonClicked: false,
    contentId: "",
  })

  type GovernmentIdItem = {
    type: string
    fileKey: string
  }

  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedGovernmentId, setSelectedGovernmentId] =
    useState<GovernmentIdItem | null>(null)

  const openModal = (item: GovernmentIdItem) => {
    setSelectedGovernmentId(item)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const GovernmentIdList: GovernmentIdItem[] = [
    { type: "Passport", fileKey: "1.jpg" },
    { type: "Driver's License", fileKey: "2.jpg" },
    { type: "National ID", fileKey: "3.jpg" },
    { type: "Postal ID", fileKey: "4.jpg" },
  ]

  return (
    <div className="text-sm">
      {!contentState.isButtonClicked ? (
        <div className="flex justify-between py-5">
          <div>
            <Typography variant={"p"}>Goverment ID</Typography>
            <Typography fontWeight={"light"}>
              {governmentId ? governmentId.toString() : "Not Provided"}
            </Typography>
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
            <Typography variant={"p"}>Goverment ID</Typography>
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
          <Typography fontWeight={"light"}>
            We’ll need you to add an official government ID. This step helps
            make sure you’re really you.
          </Typography>
          <div className="grid grid-cols-2">
            <div className="w-full my-4">
              <h3 className="text-xl font-semibold">Your IDs</h3>
              <div className="mt-4">
                {GovernmentIdList.map((id, index) => (
                  <p className="text-lg" key={id.type}>
                    {index + 1}. {id.type}{" "}
                    <span
                      role="button"
                      onClick={() => openModal(id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          openModal(id)
                        }
                      }}
                      className="text-primary-500 underline cursor-pointer hover:text-primary-700"
                    >
                      View File
                    </span>
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full my-4">
              <h3 className="text-xl font-semibold">Upload your ID here</h3>
              <div className="mt-4">
                <select
                  id="stars"
                  className="pr-10 text-text-900 focus-within:z-10 focus-within:ring-2 focus-within:ring-text-600 text-sm rounded-md block"
                >
                  <option value="">ID Type</option>
                  <option>Driver's License</option>
                  <option>Passport</option>
                  <option>National ID</option>
                  <option>Postal ID</option>
                </select>
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-primary-300 border-dashed rounded-lg cursor-pointer bg-primary-50 hover:bg-primary-100 mt-4"
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
                    <Typography className="mb-2 text-text-500 d">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </Typography>
                    <Typography className="text-xs text-text-500">
                      PNG, JPG or GIF (MAX. 800x400px)
                    </Typography>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept="image/png, image/gif, image/jpeg"
                  />
                </label>
              </div>
              <Button className="w-20 mt-4" size="sm">
                Upload
              </Button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && selectedGovernmentId && (
        <GovernmentIdModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedGovernmentId.type}
          fileKey={[`/assets/${selectedGovernmentId.fileKey}`]}
        />
      )}
    </div>
  )
}

export default GovernmentId
