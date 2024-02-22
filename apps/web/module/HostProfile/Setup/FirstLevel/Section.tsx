import ModalContainer from '@/common/components/ModalContainer'
import { Typography } from '@/common/components/ui/Typography'
import React, { useState } from 'react'
import { T_ModalContent } from '.'

type T_Section = {
  modalContent: ({ setIsOpen }: T_ModalContent) => React.ReactNode
  title: string
  icon: React.ReactNode
}

const Section = ({ modalContent, icon, title }: T_Section) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div
        key={title}
        className="border-b flex items-center p-5  rounded-xl hover:bg-primary-100 cursor-pointer"
        onClick={() => setModalOpen(!modalOpen)}
      >
        <div className="mr-2">{icon}</div>
        <Typography className="text-gray-500">
          {title}
        </Typography>
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