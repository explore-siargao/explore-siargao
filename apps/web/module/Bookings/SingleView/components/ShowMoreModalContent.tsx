import ModalContainer from "@/common/components/ModalContainer"
import { Title } from "@/common/components/ui/Title"
import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useRef } from "react"

interface IconDescription {
  id: number
  icon: React.ElementType[]
  desc: string[]
}

interface ShowModalProps {
    title: string
    contents: string[]
    iconDesc: IconDescription[]
  }
interface ShowMoreModalProps {
  isOpen: boolean
  onClose: () => void
  contents: ShowModalProps[]
}

const ShowMoreModalContent = ({ isOpen, onClose, contents }: ShowMoreModalProps) => {
  const cancelButtonRef = useRef(null)
  return (
    <Transition.Root show={true} as="div">
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={() => {}}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all w-full h-full md:w-1/2">
                <ModalContainer title="" onClose={onClose}>
                  <div className="px-5 pt-4  md:h-[700px] md:overflow-y-auto">
                    <Title title="What this place offers">
                        <div className="py-2">
                            <ul>
                                {contents.map((contents, index) => (
                                <li className='mt-2' key={index}>{contents.Content}</li>
                                ))}
                            </ul>
                        </div>
                    </Title>
                  </div>
                </ModalContainer>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ShowMoreModalContent
