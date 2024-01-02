import ModalContainer from "@/common/components/ModalContainer"
import ModalContainerFooter from "@/common/components/ModalContainer/ModalContainerFooter"
import { Typography } from "@/common/components/ui/Typography"
import { Dialog, Transition } from "@headlessui/react"
import {
  ChevronRightIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/20/solid"
import React, { Fragment, useRef } from "react"

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}
const MenuModal = ({ isOpen, onClose }: MenuProps) => {
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-md ">
                <ModalContainer onClose={onClose} title="Settings">
                  <div className="p-6 flex flex-col items-center divide-y divide-text-100">
                    <div className="flex justify-between w-full py-5">
                      <div className="flex">
                        <PencilIcon className="h-5 w-auto text-text-400 mr-2" />
                        <Typography variant={"h5"}>Rename</Typography>
                      </div>
                      <ChevronRightIcon className="h-7 w-auto" />
                    </div>
                    <div className="flex justify-between w-full py-5">
                      <div className="flex">
                        <TrashIcon className="h-5 w-auto text-text-400 mr-2" />
                        <Typography variant={"h5"}>Delete</Typography>
                      </div>
                      <ChevronRightIcon className="h-7 w-auto" />
                    </div>
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

export default MenuModal
