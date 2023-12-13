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
import useGetUserDetails from "@/common/hooks/useGetUserDetails"
import useGetPaymentmethods from "../hooks/useGetPaymentMethods"
import { IPaymentMethod } from "@/common/types/global"

const Payments = () => {
  const router = useRouter()
  const [addCardModal, setAddCardModal] = useState<boolean>(false)
  const [removePaymentModal, setRemovePaymentModal] = useState<boolean>(false)
  const [paymentMethodId, setPaymentMethodId] = useState(0)
  const [showHide, setShowHide] = useState(false)
  const toggleVisibility = () => {
    setShowHide(!showHide)
  }
  const { data: userDetails, isPending: isPendingUserDetails } =
    useGetUserDetails()
  const { data: paymentMethods, isPending: isPendingPaymentmethods } =
    useGetPaymentmethods(!isPendingUserDetails && userDetails?.item?.id)
  return (
    <>
      {isPendingUserDetails || isPendingPaymentmethods ? (
        <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent text-primary-200 rounded-full">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
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
            <p className="font-light py-3">
              Add a payment method using our secure payment system, then start
              planning your next trip.
            </p>
            {paymentMethods?.items?.length !== 0 ? (
              paymentMethods?.items?.map((paymentMethod: IPaymentMethod) => (
                <div
                  key={paymentMethod.id}
                  className="flex my-4 py-5 border-y border-y-text-100 justify-between"
                >
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
                        <span className="font-medium">
                          **** {paymentMethod?.cardNumber?.slice(5)}{" "}
                        </span>{" "}
                        {paymentMethod.isDefault ? (
                          <span className="bg-text-50 font-semibold ml-2">
                            Default
                          </span>
                        ) : (
                          ""
                        )}
                      </p>
                      <p>
                        Expiration:
                        <span className="font-medium">
                          {paymentMethod.expirationDate}
                        </span>{" "}
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
                            Set default
                          </div>
                          <div
                            onClick={() => {
                              setPaymentMethodId(paymentMethod.id as number)
                              setRemovePaymentModal(true)
                            }}
                            className="relative rounded hover:bg-gray-50 px-5 py-2"
                            aria-hidden="true"
                          >
                            Remove
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                </div>
              ))
            ) : (
              <div className="pt-5 border-t border-t-text-100"></div>
            )}
            <Button onClick={() => setAddCardModal(true)}>
              Add payment method
            </Button>
          </div>
          <div>
            <Title size={"sub"} className="pb-4">
              ExploreSiargao gift credit
            </Title>
            <Button onClick={() => router.push(LINK_GIFT)}>
              Add gift card
            </Button>
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
      )}
      <AddCardDetailModal
        isOpen={addCardModal}
        onClose={() => setAddCardModal(false)}
        userId={!isPendingUserDetails ? (userDetails?.item?.id as number) : 0}
      />
      <RemovePaymentModal
        id={paymentMethodId}
        userId={userDetails?.item?.id}
        isOpen={removePaymentModal}
        onClose={() => setRemovePaymentModal(false)}
      />
    </>
  )
}

export default Payments
