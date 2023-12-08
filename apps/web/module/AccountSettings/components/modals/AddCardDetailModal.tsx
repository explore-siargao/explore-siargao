import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useRef } from "react"
import amex from "@/common/assets/amex.png"
import discover from "@/common/assets/discover-card.png"
import mastercard from "@/common/assets/mastercard.png"
import visa from "@/common/assets/visa.png"
import Image from "next/image"

interface CardDetailModal {
  isOpen: boolean
  onClose: () => void
}

const AddCardDetailModal = ({ isOpen, onClose }: CardDetailModal) => {
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
                <ModalContainer title="Add card details" onClose={onClose}>
                  <div className="p-6 space-y-4">
                    <div className="flex gap-2">
                      <Image
                        src={mastercard}
                        width={500}
                        height={500}
                        className="h-5 w-auto"
                        alt="mastercard"
                      />
                      <Image
                        src={visa}
                        width={500}
                        height={500}
                        className="h-5 w-auto"
                        alt="visa"
                      />
                      <Image
                        src={amex}
                        width={500}
                        height={500}
                        className="h-5 w-auto"
                        alt="amex"
                      />
                      <Image
                        src={discover}
                        width={500}
                        height={500}
                        className="h-5 w-auto"
                        alt="discover"
                      />
                    </div>
                    <div>
                      <Input
                        inputLabel="Card Number"
                        inputId="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        type="number"
                        className="rounded-b-none"
                      />
                      <div className="grid grid-flow-col">
                        <Input
                          inputLabel="Expiration date"
                          inputId="expirationDate"
                          type="number"
                          className="rounded-t-none rounded-r-none"
                        />
                        <Input
                          inputLabel="CVV"
                          inputId="cvv"
                          type="number"
                          className="rounded-t-none rounded-l-none"
                        />
                      </div>
                    </div>
                    <Input
                      inputLabel="Zip code"
                      inputId="zipCode"
                      type="number"
                    />
                    <select
                      id="countries"
                      className=" text-text-900 focus-within:z-10 focus-within:ring-2 focus-within:ring-text-600 text-sm rounded-lg block h-14 w-full"
                    >
                      <option selected>Country/Region</option>
                      <option value="US">United state</option>
                      <option value="PH">Philippines</option>
                      <option value="ch">China</option>
                      <option value="ITALIAN">Italian</option>
                    </select>
                    <div className="flex justify-between">
                      <Button variant={"ghost"} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button>Save</Button>
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

export default AddCardDetailModal
