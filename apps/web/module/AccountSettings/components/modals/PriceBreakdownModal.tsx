import ModalContainer from "@/common/components/ModalContainer"
import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useRef } from "react"
import { Typography } from "@/common/components/ui/Typography"

interface PriceBreakdownProps {
  id: string
  isOpen: boolean
  onClose: () => void
}

const PriceBreakdownModal = ({ id, isOpen, onClose }: PriceBreakdownProps) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 " />
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
              <Dialog.Panel
                id={id}
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-[500px] "
              >
                <ModalContainer title="Price breakdown" onClose={onClose}>
                  <div className="grid grid-flow-row p-6 gap-5">
                    <div className="flex justify-between">
                      <Typography className="text-text-600">
                        ₱1,800 x 5 nights{" "}
                      </Typography>
                      <Typography className="text-text-600">₱9,000 </Typography>
                    </div>
                    <div className="flex justify-between ">
                      <Typography className="text-text-600">
                        Cleaning fee{" "}
                      </Typography>
                      <Typography className="text-text-600">₱550</Typography>
                    </div>
                    <div className="flex justify-between">
                      <Typography className="text-text-600">
                        ExploreSiargao service fee
                      </Typography>
                      <Typography className="text-text-600">₱1,348</Typography>
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

export default PriceBreakdownModal
