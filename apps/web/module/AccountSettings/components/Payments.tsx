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
import useGetPaymentMethods from "../hooks/useGetPaymentMethods"
import { ICoupon, IPaymentMethod } from "@/common/types/global"
import useUpdatePaymentMethod from "../hooks/useUpdatePaymentMethod"
import toast from "react-hot-toast"
import { useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import useUpdateCoupon from "../hooks/useUpdateCoupon"
import { Typography } from "@/common/components/ui/Typography"
import useSessionStore from "@/common/store/useSessionStore"
import { Spinner } from "@/common/components/ui/Spinner"
import { APP_NAME } from "@repo/constants"

const Payments = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const [addCardModal, setAddCardModal] = useState<boolean>(false)
  const [removePaymentModal, setRemovePaymentModal] = useState<boolean>(false)
  const [paymentMethodId, setPaymentMethodId] = useState(0)
  const [showHide, setShowHide] = useState(false)
  const [popPanelIsVisible, setPopPanelIsVisible] = useState(false)
  const { register, reset, getValues } = useForm<ICoupon>()
  const toggleVisibility = () => {
    setShowHide(!showHide)
  }
  const session = useSessionStore((state) => state)
  const { data: paymentMethods, isPending: isPendingPaymentmethods } =
    useGetPaymentMethods(session.id)
  const { mutate, isPending } = useUpdatePaymentMethod(session.id)
  const { mutate: redeemCoupon, isPending: isPendingRedeemCoupon } =
    useUpdateCoupon(session.id)

  const callBackReqDefaultPaymentMethod = {
    onSuccess: (data: any) => {
      if (!data.error) {
        queryClient.invalidateQueries({
          queryKey: ["payment-method"],
        })
        toast.success(data.message)
      } else {
        toast.error(String(data.message))
      }
    },
    onError: (err: any) => {
      toast.error(String(err))
    },
  }

  const CallBackCheckCoupon = {
    onSuccess: (data: any) => {
      if (!data.error) {
        toast.success("Code Successfully redeemed")
      } else {
        toast.error(String(data.message))
      }
      reset()
    },
    onError: (err: any) => {
      toast.error(String(err))
    },
  }

  return (
    <>
      {isPendingPaymentmethods ? (
        <Spinner className="mt-5" />
      ) : (
        <div className="space-y-10 my-5">
          <div>
            <Title size={"sub"}>Your payments</Title>
            <Typography fontWeight={"light"} className="pb-4">
              Keep track of all your payments and refunds.
            </Typography>
            <Button onClick={() => router.push(LINK_ACCOUNT_YOUR_PAYMENT)}>
              Manage payments
            </Button>
          </div>
          <div>
            <Title size={"sub"}>Payment methods</Title>
            <Typography fontWeight={"light"} className="py-3">
              Add a payment method using our secure payment system, then start
              planning your next trip.
            </Typography>
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
                      <Typography>
                        MasterCard {""}
                        <span className="font-medium">
                          **** {paymentMethod?.cardNumber?.slice(-3)}{" "}
                        </span>{" "}
                        {paymentMethod.isDefault ? (
                          <span className="bg-text-50 font-semibold ml-2 px-2 py-1">
                            Default
                          </span>
                        ) : (
                          ""
                        )}
                      </Typography>
                      <Typography>
                        Expiration:
                        <span className="font-medium">
                          {paymentMethod.expirationDate}
                        </span>{" "}
                      </Typography>
                    </div>
                  </div>
                  <Popover className="relative">
                    <Popover.Button
                      className="items-center focus:outline-none px-2 py-1"
                      onClick={() => setPopPanelIsVisible(true)}
                    >
                      {isPending ? (
                        <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent text-primary-200 rounded-full">
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        <span className="place-self-center select-none text-xs">
                          •••
                        </span>
                      )}
                    </Popover.Button>
                    {popPanelIsVisible && (
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
                            <button
                              className="relative rounded hover:bg-gray-50 px-5 py-2"
                              onClick={() => {
                                setPopPanelIsVisible(false)
                                mutate(
                                  { id: paymentMethod.id, isDefault: true },
                                  callBackReqDefaultPaymentMethod
                                )
                              }}
                            >
                              Set default
                            </button>
                            <button
                              onClick={() => {
                                setPaymentMethodId(paymentMethod.id as number)
                                setRemovePaymentModal(true)
                              }}
                              className="relative rounded hover:bg-gray-50 px-5 py-2"
                            >
                              Remove
                            </button>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    )}
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
              {APP_NAME} gift credit
            </Title>
            <Button onClick={() => router.push(LINK_GIFT)}>
              Add gift card
            </Button>
          </div>
          <div className="space-y-4">
            <Title size={"sub"}>Coupons</Title>
            <div className="flex justify-between border-y border-y-text-100  py-4">
              <Typography fontWeight={"light"}>Your coupons</Typography>
              <Typography>0</Typography>
            </div>
            {showHide === false ? (
              <Button onClick={toggleVisibility}>Add coupon</Button>
            ) : (
              <>
                <Input
                  id="couponCode"
                  label="Enter coupon code"
                  {...register("code", { required: true })}
                  disabled={isPendingRedeemCoupon}
                />
                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={() => {
                      if (getValues("code")?.length !== 0) {
                        redeemCoupon(
                          {
                            code: getValues("code"),
                            isUsed: true,
                            usedBy: session.id,
                          },
                          CallBackCheckCoupon
                        )
                      } else {
                        toast.error("Please enter a coupon code")
                      }
                    }}
                  >
                    <div>
                      {isPendingRedeemCoupon ? (
                        <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent text-primary-200 rounded-full">
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        "Redeem coupon"
                      )}
                    </div>
                  </Button>
                  <Button
                    onClick={toggleVisibility}
                    variant={"outline"}
                    type="button"
                  >
                    Cancel
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <AddCardDetailModal
        isOpen={addCardModal}
        onClose={() => setAddCardModal(false)}
        userId={session.id as number}
      />
      <RemovePaymentModal
        id={paymentMethodId}
        userId={session.id as number}
        isOpen={removePaymentModal}
        onClose={() => setRemovePaymentModal(false)}
      />
    </>
  )
}

export default Payments
