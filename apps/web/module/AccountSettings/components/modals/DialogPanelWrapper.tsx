import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment } from "react"

const DialogPanelWrapper = ({
  children,
}: {
  readonly children: React.ReactNode
}) => {
  return (
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
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg ">
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  )
}

export default DialogPanelWrapper
