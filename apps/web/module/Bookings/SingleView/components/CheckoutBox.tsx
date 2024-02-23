"use client"
import PesoSign from "@/common/components/PesoSign"
import { Button } from "@/common/components/ui/Button"
import { Select } from "@/common/components/ui/Select"
import formatCurrency from "@/common/helpers/formatCurrency"
import CheckoutBreakdownModal from "./modals/CheckoutBreakdownModal"
import { useState } from "react"
import CheckoutMoreInfoModal from "./modals/CheckoutMoreInfoModal"
import CheckInOutModal from "./modals/CheckInOutModal"
import useCheckInOutDateStore from "@/common/store/useCheckInOutDateStore"
import Asterisk from "@/common/components/ui/Asterisk"
import { format } from "date-fns"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface ICheckout {
  id?: number
  serviceFee: number
  durationCost: number
  descTotalBeforeTaxes: number
  totalBeforeTaxes: number
  titlePrice: number
}

interface CheckoutProcessProps {
  checkoutDesc: ICheckout
}

const CheckoutBox = ({ checkoutDesc }: CheckoutProcessProps) => {
  const router = useRouter()
  const [isBreakdownModalOpen, setIsBreakdownModalOpen] = useState(false)
  const [isMoreInfoModalOpen, setIsMoreInfoModalOpen] = useState(false)
  const [checkInOutCalendarModalIsOpen, setCheckInOutCalendarModalIsOpen] =
    useState(false)
  const dateRange = useCheckInOutDateStore((state) => state.dateRange)
  return (
    <div className="border rounded-xl shadow-lg px-6 pb-6 pt-5 flex flex-col divide-text-100 overflow-y-auto mb-5">
      <span className="text-xl font-semibold mb-4">
        {formatCurrency(checkoutDesc.titlePrice, "Philippines")}{" "}
        <small className="font-light">night</small>
      </span>
      <div className="font-semibold grid grid-cols-1 gap-5 w-full">
        <div className="grid grid-cols-2 gap-2">
          <div
            className="relative rounded-md px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-text-200 focus-within:z-10 focus-within:ring-2 focus-within:ring-text-600 hover:cursor-pointer"
            onClick={() => setCheckInOutCalendarModalIsOpen(true)}
          >
            <label
              htmlFor="check-in"
              className="block text-xs font-medium text-text-900 hover:cursor-pointer"
            >
              Check-in <Asterisk />
            </label>
            <span className="block w-full border-0 p-0 text-text-900 placeholder:text-text-400 focus:ring-0 sm:text-sm sm:leading-6 bg-transparent disabled:opacity-50">
              {dateRange.from
                ? format(dateRange.from, "MM/dd/yyyy")
                : "Add date"}
            </span>
          </div>
          <div
            className="relative rounded-md px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-text-200 focus-within:z-10 focus-within:ring-2 focus-within:ring-text-600 hover:cursor-pointer"
            onClick={() => setCheckInOutCalendarModalIsOpen(true)}
          >
            <label
              htmlFor="checkout"
              className="block text-xs font-medium text-text-900 hover:cursor-pointer"
            >
              Checkout <Asterisk />
            </label>
            <span className="block w-full border-0 p-0 text-text-900 placeholder:text-text-400 focus:ring-0 sm:text-sm sm:leading-6 bg-transparent disabled:opacity-50">
              {dateRange.to ? format(dateRange.to, "MM/dd/yyyy") : "Add date"}
            </span>
          </div>
        </div>
        <Select id="guest" label="GUESTS" required={true} />
        <Button
          variant="primary"
          onClick={() => router.push("/accommodation/1/checkout")}
        >
          Book Now
        </Button>
      </div>
      <div>
        <div className="flex justify-between items-center mb-5 mt-4">
          <Button
            variant={"ghost"}
            className="underline pl-0"
            onClick={() => setIsBreakdownModalOpen(true)}
          >
            <PesoSign />
            25,000 x 5 nights
          </Button>
          <div>{formatCurrency(checkoutDesc.durationCost, "Philippines")}</div>
        </div>

        <div className="flex justify-between items-center">
          <Button
            variant={"ghost"}
            className="underline pl-0"
            onClick={() => setIsMoreInfoModalOpen(true)}
          >
            ES service fee
          </Button>
          <div>{formatCurrency(checkoutDesc.serviceFee, "Philippines")}</div>
        </div>

        <div className="border-b mt-5 mb-5"></div>
        <div className="flex justify-between font-semibold">
          <div>Total before taxes</div>
          <div>
            {formatCurrency(checkoutDesc.totalBeforeTaxes, "Philippines")}
          </div>
        </div>
      </div>
      <CheckoutBreakdownModal
        isOpen={isBreakdownModalOpen}
        onClose={() => setIsBreakdownModalOpen(false)}
      />
      <CheckoutMoreInfoModal
        isOpen={isMoreInfoModalOpen}
        onClose={() => setIsMoreInfoModalOpen(false)}
      />
      <CheckInOutModal
        isOpen={checkInOutCalendarModalIsOpen}
        onClose={() => setCheckInOutCalendarModalIsOpen(false)}
      />
    </div>
  )
}

export default CheckoutBox
