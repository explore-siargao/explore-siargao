import ModalContainer from "@/common/components/ModalContainer"
import { Typography } from "@/common/components/ui/Typography"
import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useRef } from "react"

interface RemoveWishlistsProps {
  isOpen: boolean
  onClose: () => void
  title: string
}

const DeleteWIshlistsModal = ({
  isOpen,
  title,
  onClose,
}: RemoveWishlistsProps) => {
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg ">
                <ModalContainer
                  onClose={onClose}
                  positive="Delete"
                  negative="Cancel"
                  isSubmit={true}
                  isPending={false}
                  onClick={() => null}
                >
                  <div className="p-6 flex flex-col items-center">
                    <Typography variant={"h3"}>
                      Delete this wishlist?
                    </Typography>
                    <Typography className="text-text-400 font-light w-60 text-center">
                      "{title as Array}" will be permanently deleted.
                    </Typography>
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

export default DeleteWIshlistsModal
