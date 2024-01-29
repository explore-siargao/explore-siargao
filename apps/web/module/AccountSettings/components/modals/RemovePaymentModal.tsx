import ModalContainer from "@/common/components/ModalContainer"
import { Dialog, Transition } from "@headlessui/react"
import { useQueryClient } from "@tanstack/react-query"
import React, { Fragment, useRef } from "react"
import toast from "react-hot-toast"
import useRemovePaymentmethod from "../../hooks/useRemovePaymentMethod"
import ModalContainerFooter from "@/common/components/ModalContainer/ModalContainerFooter"
import DialogPanelWrapper from "./DialogPanelWrapper"
import ModalBackgroundProvider from "./ModalBackgroundProvider"

interface PaymentModalProps {
  id: number
  userId: number
  isOpen: boolean
  onClose: () => void
}

const RemovePaymentModal = ({
  id,
  userId,
  isOpen: openModal,
  onClose: closeModal,
}: PaymentModalProps) => {
  const cancelButtonRef = useRef(null)
  const queryClient = useQueryClient()
  const { mutate, isPending } = useRemovePaymentmethod(userId, id)
  const callBackReq = {
    onSuccess: (data: any) => {
      if (!data.error) {
        queryClient.invalidateQueries({
          queryKey: ["payment-method"],
        })
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
          <ModalContainer
            title="Remove payment method"
            onClose={closeModal}
          >
            <div className="p-6">
              <p className="text-text-400 font-light">
                Are you sure you want to remove this payment method?
              </p>
            </div>
            <ModalContainerFooter
              positive="Remove"
              negative="Cancel"
              isPending={isPending}
              isSubmit={false}
              onClose={closeModal}
              buttonFn={() => {
                mutate({ id: id, userId: userId }, callBackReq)
              }}
            />
          </ModalContainer>
        </DialogPanelWrapper>
      </Dialog>
    </Transition.Root>
  )
}

export default RemovePaymentModal
