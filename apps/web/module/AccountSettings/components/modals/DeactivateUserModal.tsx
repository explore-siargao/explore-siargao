import ModalContainer from "@/common/components/ModalContainer"
import React, { useRef } from "react"
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
    <ModalContainer title="Deactivate your account" onClose={closeModal} isOpen={openModal}>
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
  )
}

export default DeactivateUserModal
