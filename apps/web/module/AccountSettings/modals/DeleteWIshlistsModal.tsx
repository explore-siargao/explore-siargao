import ModalContainer from "@/common/components/ModalContainer"
import ModalContainerFooter from "@/common/components/ModalContainer/ModalContainerFooter"
import { Typography } from "@/common/components/ui/Typography"
import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useRef } from "react"
import useDeleteWishGroupByTitle from "../hooks/useDeleteWishGroupByTitle"
import useSessionStore from "@/common/store/useSessionStore"
import { useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

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
  const userId = useSessionStore((state) => state).id
  const cancelButtonRef = useRef(null)
  const queryClient = useQueryClient()
  const { mutate, isPending } = useDeleteWishGroupByTitle(
    userId as number,
    title
  )
  const callBackReq = {
    onSuccess: (data: any) => {
      if (!data.error) {
        queryClient.invalidateQueries({
          queryKey: ["wish-group-count"],
        })
        onClose()
        toast.success("Wish Group Successfully deleted")
      } else {
        toast.error(String(data.message))
      }
    },
    onError: (err: any) => {
      toast.error(String(err))
    },
  }

  const deleteWishGroup = () => {
    mutate({}, callBackReq)
  }
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
          <div className="fixed inset-0 bg-primary-100 bg-opacity-50 backdrop-blur-sm transition-opacity" />
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
                <ModalContainer onClose={onClose}>
                  <div className="p-6 flex flex-col items-center">
                    <Typography variant={"h3"}>
                      Delete this wishlist?
                    </Typography>
                    <Typography className="text-text-400 font-light w-60 text-center">
                      "{title}" will be permanently deleted.
                    </Typography>
                  </div>
                  <ModalContainerFooter
                    positive="Delete"
                    negative="Cancel"
                    isSubmit={false}
                    isPending={isPending}
                    buttonFn={() => deleteWishGroup()}
                    onClose={onClose}
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

export default DeleteWIshlistsModal
