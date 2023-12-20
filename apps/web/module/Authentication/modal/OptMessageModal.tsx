import ModalContainer from "@/common/components/ModalContainer"
import { Input } from "@/common/components/ui/Input"
import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useRef } from "react"
import { Typography } from "@/common/components/ui/Typography"
import useOptMessageStore from "@/common/store/useOptMessageStore"
import {
 CheckCircleIcon
} from "@heroicons/react/24/outline"
const OptMessageModal = () => {
  const isOpen = useOptMessageStore((state)=>state.isOpen)
  const closeModal = useOptMessageStore((state)=>state.setIsClose)
    const cancelButtonRef = useRef(null)
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={()=>closeModal()}
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
                    title=""
                    onClose={()=>closeModal()}
                  >
                      <div className="p-6 text-center">
                        <CheckCircleIcon className="w-12 h-12" />
                        <Typography variant={"h3"} fontWeight={"semiBold"}>You’re all signed up</Typography>
                        <Typography>I’d like to receive travel tips, uplifting content, and exclusive deals from ExploreSiargao. You can opt out at any time.</Typography>
                        <Input
                          inputLabel="Email Address"
                          inputId="emailAddress"
                          placeholder="youremail@gmail.com"
                          type="email"
                          className="mb-2"
                         
                        />
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
