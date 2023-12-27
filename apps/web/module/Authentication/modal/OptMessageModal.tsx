import ModalContainer from "@/common/components/ModalContainer"
import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useRef } from "react"
import { Typography } from "@/common/components/ui/Typography"
import useOptMessageStore from "@/common/store/useOptMessageStore"
import { CheckCircleIcon } from "@heroicons/react/24/outline"
import { Button } from "@/common/components/ui/Button"
import useSetReceivedEmail from "../hooks/useSetReceivedEmail"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"
import { Spinner } from "@/common/components/ui/Spinner"
import useSessionStore from "@/common/store/useSessionStore"
interface OptChecked {
  isChecked: boolean
}
const OptMessageModal = () => {
  const { register, getValues } = useForm<OptChecked>()
  const isOpen = useOptMessageStore((state) => state.isOpen)
  const closeModal = useOptMessageStore((state) => state.setIsClose)
  const cancelButtonRef = useRef(null)
  const session = useSessionStore((state) => state)
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
  const {
    mutate: setCanReceivedEmail,
    isPending: IsPendingCetCanReceivedEmail,
  } = useSetReceivedEmail(session.id as number, {
    onSuccess: callBackReq.onSuccess,
    onError: callBackReq.onError,
  })
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={() => closeModal()}
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
          <div className="flex md:min-h-full items-end md:justify-center text-center sm:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:h-full sm:max-w-lg ">
                <ModalContainer title="" onClose={() => closeModal()}>
                  <div className="p-6 text-center h-screen md:h-full">
                    <CheckCircleIcon className="mx-auto w-12 h-12 text-success-700" />
                    <Typography variant={"h3"} fontWeight={"semiBold"}>
                      You’re all signed up!
                    </Typography>

                    <Button
                      variant={"secondary"}
                      className="w-full mt-4"
                      onClick={() => {
                        if (getValues("isChecked")) {
                          setCanReceivedEmail()
                        } else {
                          closeModal()
                        }
                      }}
                      disabled={IsPendingCetCanReceivedEmail}
                    >
                      {IsPendingCetCanReceivedEmail ? (
                        <Spinner>Loading...</Spinner>
                      ) : (
                        "OK"
                      )}
                    </Button>
                    <div className="flex  mt-6">
                      <input
                        id="recieved"
                        {...register("isChecked")}
                        type="checkbox"
                        className="h-6 w-6 rounded border-gray-400 text-secondary-600 focus:ring-transparent"
                      />
                      <label
                        htmlFor="recieved"
                        className="text-sm select-none text-left ml-2"
                      >
                        I’d like to receive travel tips, uplifting content, and
                        exclusive deals from ExploreSiargao. You can opt out at
                        any time.
                      </label>
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

export default OptMessageModal
