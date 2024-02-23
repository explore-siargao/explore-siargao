import React, { useState } from "react"
import SetUpProfileModal from "../components/modal/SetupProfileAboutYouModal"
import { useInputSetupProfileAboutYouStore } from "@/module/HostProfile/store/useSetupProfileAboutYouStore"
import { Typography } from "@/common/components/ui/Typography"
import Link from "next/link"

const SetUpProfileAboutYou = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const introText = useInputSetupProfileAboutYouStore(
    (state) => state.inputValue
  )

  console.log(introText)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div>
      <Typography variant="h1" fontWeight="semibold">
        About You
      </Typography>
      <div className="relative">
        <div className="border border-gray-300 rounded-md p-5 mt-5 w-full h-25 border-dotted">
          <div className="absolute pl-3 left-2 text-gray-400">
          <Link href={''}>
            <Typography>
              {introText || "Write something fun and punchy."}
            </Typography>
          </Link>
           
          </div>
          <div className="pt-10 bottom-2 left-2 underline cursor-pointer">
            <Link href="#" onClick={openModal}>
              <Typography>
              {introText ? "Edit intro" : "Add intro"}
              </Typography>
            </Link>
          </div>
        </div>
      </div>

      <SetUpProfileModal isModalOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default SetUpProfileAboutYou
