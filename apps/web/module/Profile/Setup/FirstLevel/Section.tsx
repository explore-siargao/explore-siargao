import ModalContainer from "@/common/components/ModalContainer"
import { Typography } from "@/common/components/ui/Typography"
import React, { useState } from "react"
import { T_ModalContent } from "."

type T_Section = {
  modalContent: ({ setIsOpen }: T_ModalContent) => React.ReactNode
  title: string
  icon: React.ReactNode
}

const Section = ({ modalContent, icon, title }: T_Section) => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <div className="border-b-2 relative">
        <div
          key={title}
          className="flex items-center p-5 rounded-xl hover:bg-primary-100 h-full cursor-pointer"
          onClick={() => setModalOpen(!modalOpen)}
          tabIndex={0} 
        >
          {icon}
          <Typography variant="h2" className="ml-2 text-gray-500">
            {title}
          </Typography>
        </div>
      </div>

      <ModalContainer
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        size="sm"
      >
        {modalContent({ setIsOpen: setModalOpen })}
      </ModalContainer>
    </>
  )
}

export default Section
