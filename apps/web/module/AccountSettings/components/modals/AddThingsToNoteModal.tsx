import ModalContainer from "@/common/components/ModalContainer"
import { Title } from "@/common/components/ui/Title"
import React from "react"


interface IThingsToNote {
  id?: number
  checkingInAndOut: {
    title: string,
    icon: React.ElementType
  }

  
}
interface AddThingsToNoteModalProps {
  isOpen: boolean
  onClose: () => void
  thingsToNote: IThingsToNote
}

const AddThingsToNoteModal = ({
  isOpen,
  onClose,
  thingsToNote,
}: AddThingsToNoteModalProps) => {
  return (
    <ModalContainer onClose={onClose} isOpen={isOpen} size="sm">
      <div className="py-4 px-8 flex flex-col divide-text-100 overflow-y-auto h-[600px]">
        <Title className="flex text-xl font-semibold mb-1">House rules</Title>
        <h2 className="text-sm">
          You'll be staying in someone's home so treat it like a home
        </h2>
        <div>
          {thingsToNote.checkingInAndOut && (
            <div>
              <Title className="flex text-md font-semibold mb-5 my-4">
                Checking in and out
              </Title>
              <div>{thingsToNote.checkingInAndOut.title}</div>
              <div className="border-b mt-5 mb-5"></div>
            
            </div>
          )}
        </div>
      </div>
    </ModalContainer>
  )
}

export default AddThingsToNoteModal
