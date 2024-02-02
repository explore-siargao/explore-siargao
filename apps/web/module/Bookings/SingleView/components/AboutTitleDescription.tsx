import ModalContainer from "@/common/components/ModalContainer"
import { Title } from "@/common/components/ui/Title"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useRef, useState } from "react"

interface IDescription {
  id?: number
  generalDes: string
  aboutSpace?: string
  aboutGuestAccess?: string
  otherThingsNote?: string
}
interface AboutTitleDescriptionProps {
  isOpen: boolean
  onClose: () => void
  listingDesc: IDescription
}

const AboutTitleDescription = ({
  isOpen,
  onClose,
  listingDesc,
}: AboutTitleDescriptionProps) => {
  const closeButtonRef = useRef(null)
  const [modalState] = useState(0)

  const renderAboutTitleDescription = () => {
    return (
      <div>
        <ModalContainer onClose={onClose}>
          <div className="p-6 flex flex-col divide-text-100 overflow-y-auto h-[600px]">
            <Title className="flex text-xl font-semibold mb-5">
              About this place
            </Title>
            <div>
              <div>{listingDesc.generalDes}</div>
              {listingDesc.aboutSpace && (
                <div>
                  <Title className="flex text-md font-semibold mb-5 my-4">
                    About space
                  </Title>
                  <div>{listingDesc.aboutSpace}</div>
                </div>
              )}
              {listingDesc.aboutGuestAccess && (
                <div>
                  <Title className="flex text-md font-semibold mb-5 my-4">
                    About guest access
                  </Title>
                  <div>{listingDesc.aboutGuestAccess}</div>
                </div>
              )}
              {listingDesc.otherThingsNote && (
                <div>
                  <Title className="flex text-md font-semibold mb-5 my-4">
                    Other things to note
                  </Title>
                  <div>{listingDesc.otherThingsNote}</div>
                </div>
              )}
            </div>
          </div>
        </ModalContainer>
      </div>
    )
  }

  const toRender = () => {
    let componentToRender = null
    if (modalState === 0) {
      componentToRender = renderAboutTitleDescription()
    }
    return componentToRender
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={closeButtonRef}
        onClose={onClose}
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
          <div className="fixed inset-0 bg-slate-700 bg-opacity-50 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-20 overflow-y-auto">
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-6/12  max-h-[750px]">
                {toRender()}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default AboutTitleDescription
