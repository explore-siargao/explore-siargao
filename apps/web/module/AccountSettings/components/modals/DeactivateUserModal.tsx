import ModalContainer from "@/common/components/ModalContainer"
import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useRef } from "react"
import toast from "react-hot-toast"
import ModalContainerFooter from "@/common/components/ModalContainer/ModalContainerFooter"
import useDeactivateAccount from "../../hooks/useDeactivateAccount"

interface DeactivateUserModalProps {
  userId: number
  isOpen: boolean
  onClose: () => void
}

const DeactivateUserModal = ({
  userId,
  isOpen: openModal,
  onClose: closeModal,
}: DeactivateUserModalProps) => {
  const cancelButtonRef = useRef(null)
  const { mutate, isPending } = useDeactivateAccount()
  const callBackReq = {
    onSuccess: (data: any) => {
      if (!data.error) {
        toast.success(data.message)
        closeModal()
      } else {
        toast.error(String(data.message))
      }
    },
    onError: (err: any) => {
      toast.error(String(err))
    },
  }

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={closeModal}
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
                  title="Deactivate your account"
                  onClose={closeModal}
                >
                  <div className="p-6">
                    <p className="text-text-400 font-light">
                      Are you sure you want to deactivate your account?
                    </p>
                  </div>
                  <ModalContainerFooter
                    positive="Deactivate"
                    negative="Cancel"
                    isPending={isPending}
                    isSubmit={false}
                    onClose={closeModal}
                    buttonFn={() => {
                      mutate(userId, callBackReq)
                    }}
                  />
                </ModalContainer>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default DeactivateUserModal
