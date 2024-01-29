import ModalContainer from "@/common/components/ModalContainer"
import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useRef } from "react"
import toast from "react-hot-toast"
import ModalContainerFooter from "@/common/components/ModalContainer/ModalContainerFooter"
import useDeactivateAccount from "../../hooks/useDeactivateAccount"
import ModalBackgroundProvider from "./ModalBackgroundProvider"
import DialogPanelWrapper from "./DialogPanelWrapper"

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
        <ModalBackgroundProvider />
        <DialogPanelWrapper>
          <ModalContainer title="Deactivate your account" onClose={closeModal}>
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
        </DialogPanelWrapper>
      </Dialog>
    </Transition.Root>
  )
}

export default DeactivateUserModal
