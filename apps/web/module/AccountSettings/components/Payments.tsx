import { Button } from "@/common/components/ui/Button"
import { Title } from "@/common/components/ui/Title"
import { LINK_ACCOUNT_YOUR_PAYMENT, LINK_GIFT } from "@/common/constants/links"
import { useRouter } from "next/navigation"
import React, { Fragment, useState } from "react"
import AddCardDetailModal from "./modals/AddCardDetailModal"
import mastercard from "@/common/assets/mastercard.png"
import Image from "next/image"
import { Input } from "@/common/components/ui/Input"
import { Popover, Transition } from "@headlessui/react"
import RemovePaymentModal from "./modals/RemovePaymentModal"

const Payments = () => {
  const router = useRouter()
  const [addCardModal, setAddCardModal] = useState<boolean>(false)
  const [removePaymentModal, setRemovePaymentModal] = useState<boolean>(false)
  const [showHide, setShowHide] = useState(false)
  const toggleVisibility = () => {
    setShowHide(!showHide)
  }

  return (
    <>
      <div className="space-y-10 my-5">
        <div>
          <Title size={"sub"}>Your payments</Title>
          <p className="font-light pb-4">
            Keep track of all your payments and refunds.
          </p>
          <Button onClick={() => router.push(LINK_ACCOUNT_YOUR_PAYMENT)}>
            Manage payments
          </Button>
        </div>
        <div>
          <Title size={"sub"}>Payment methods</Title>
          <p className="font-light ">
            Add a payment method using our secure payment system, then start
            planning your next trip.
          </p>
          <div className="flex my-4 py-5 border-y border-y-text-100 justify-between">
            <div className="flex gap-4">
              <Image
                src={mastercard}
                width={500}
                height={500}
                className="h-8 w-auto"
                alt="mastercard"
              />
              <div className="text-sm">
                <p>
                  MasterCard {""}
                  <span className="font-medium">**** 0000 </span>{" "}
                  <span className="bg-text-50 font-semibold ml-2">DEFAULT</span>
                </p>
                <p>
                  Expiration:<span className="font-medium"> 00/2023</span>{" "}
                </p>
              </div>
            </div>
            <Popover className="relative">
              <Popover.Button className="items-center focus:outline-none px-2 py-1">
                <span className="place-self-center select-none">•••</span>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 top-5 z-10 mt-5 flex w-screen max-w-max shadow-md">
                  <div className="w-screen max-w-[200px] flex-auto bg-white text-sm leading-6 border border-gray-200 shadow-sm ring-transparent rounded-md cursor-pointer">
                    <div className="relative rounded hover:bg-gray-50 px-5 py-2">
                      Use default
                    </div>
                    <div
                      onClick={() => setRemovePaymentModal(true)}
                      role="button"
                      className="relative rounded hover:bg-gray-50 px-5 py-2"
                    >
                      Remove
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
          <Button onClick={() => setAddCardModal(true)}>
            Add payment method
          </Button>
        </div>
        <div>
          <Title size={"sub"} className="pb-4">
            ExploreSiargao gift credit
          </Title>
          <Button onClick={() => router.push(LINK_GIFT)}>Add gift card</Button>
        </div>
        <div className="space-y-4">
          <Title size={"sub"}>Coupons</Title>
          <div className="flex justify-between border-y border-y-text-100  py-4">
            <p className="font-light">Your coupons</p>
            <p>0</p>
          </div>
          {showHide && (
            <Input inputId="couponCode" inputLabel="Enter coupon code" />
          )}
          <Button onClick={toggleVisibility}>Add coupon</Button>
        </div>
      </div>
      <AddCardDetailModal
        isOpen={addCardModal}
        onClose={() => setAddCardModal(false)}
      />
      <RemovePaymentModal
        isOpen={removePaymentModal}
        onClose={() => setRemovePaymentModal(false)}
      />
    </>
  )
}

export default Payments
