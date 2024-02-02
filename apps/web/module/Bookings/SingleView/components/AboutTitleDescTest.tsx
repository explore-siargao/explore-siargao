import React, { useState } from "react"
import { Button } from "@/common/components/ui/Button"
import AboutTitleDescriptionModal from "./AboutTitleDescription"

const AboutTitleDescTest = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div>
      <AboutTitleDescriptionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        aboutSpace={" "}
        aboutGuestAccess={" "}
        otherThingsNote={" "}/>
     
        
      <Button
        className="underline text-sm font-semibold"
        variant={"ghost"}
        onClick={openModal}
      >
        Show more &gt;
      </Button>
    </div>
  )
}

export default AboutTitleDescTest
