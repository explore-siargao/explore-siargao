"use Client"
import { XMarkIcon } from "@heroicons/react/20/solid"
import React, { useRef, Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"

type Props = {
  children: React.ReactNode
  title?: string
  isOpen: boolean
  onClose: () => void
}

const ModalContainer = ({ children, title, onClose, isOpen }: Props) => {
  const cancelButtonRef = useRef(null)
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 w-[700px]"
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                <div className="bg-white shadow rounded-2xl">
                  <div className="flex border-b-gray-200 border-b p-4">
                    <div>
                      <XMarkIcon
                        className="h-6 w-6 cursor-pointer rounded-full hover:bg-gray-300/30"
                        onClick={() => onClose()}
                      />
                    </div>
                    <div className="flex-1">
                      <h1
                        className={`w-full text-center place-self-center font-semibold`}
                      >
                        {title}
                      </h1>
                    </div>
                  </div>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ModalContainer
