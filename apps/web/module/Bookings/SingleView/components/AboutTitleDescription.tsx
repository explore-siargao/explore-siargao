import ModalContainer from "@/common/components/ModalContainer";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

interface AboutTitleDescriptionProps {
  isOpen: boolean
  onClose: () => void
  aboutSpace: string
  aboutGuestAccess: string
  otherThingsNote: string
}

const AboutTitleDescriptionModal = ({
  isOpen: openModal,
  onClose: hideModal,
  aboutSpace,
  aboutGuestAccess,
  otherThingsNote
}: AboutTitleDescriptionProps) => {
  const closeButtonRef = useRef(null)
  const [modalState] = useState(0)

  const renderAboutTitleDescription = () => {
    return (
      <div>
      <ModalContainer onClose={hideModal}>
        <div className="p-6 flex flex-col divide-text-100 overflow-y-auto max-h-[80vh]">
          <div className="flex font-semibold text-xl mb-5">About this space</div>
          <div>
            <div>{aboutSpace}</div>
            <div>{aboutGuestAccess}</div>
            <div>{otherThingsNote}</div>
          </div>
        </div>
      </ModalContainer>
      </div>
    );
  };
  
  const toRender = () => {
    let componentToRender = null
    if (modalState === 0) {
      componentToRender = renderAboutTitleDescription()
    }
    return componentToRender
  }

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={closeButtonRef}
        onClose={hideModal}
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-md max-h-[80vh]">
               {toRender()}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AboutTitleDescriptionModal;
