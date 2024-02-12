"use client"
import PesoSign from "@/common/components/PesoSign"
import { Button } from "@/common/components/ui/Button"
import { Input } from "@/common/components/ui/Input"
import { Select } from "@/common/components/ui/Select"
import { Typography } from "@/common/components/ui/Typography"
import formatCurrency from "@/common/helpers/formatCurrency"
import CheckoutBreakdownModal from "./modals/CheckoutBreakdownModal"
import { useState } from "react"
import CheckoutMoreInfoModal from "./modals/CheckoutMoreInfoModal"

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

const CheckoutProcess = ({ checkoutDesc }: CheckoutProcessProps) => {
    const [isBreakdownMoalOpen, setIsBreakdownModalOpen] = useState(false)
    const [isMoreInfoModalOpen, setMoreInfoModalOpen] = useState(false)
  return (
    <div className="border rounded-xl shadow-lg px-6 pb-6 pt-5 flex flex-col divide-text-100 overflow-y-auto mb-5">
      <span className="text-xl font-semibold mb-4">
        {formatCurrency(checkoutDesc.titlePrice, "Philippines")}{" "}
        <small className="font-light">night</small>
      </span>
      <div className="font-semibold grid grid-cols-1 gap-5 w-full">
        <Input id="checkIn" label="CHECK-IN" required={true} />
        <Input id="checkOut" label="CHECK-OUT" required={true} />
        <Select id="guest" label="GUESTS" required={true} />
        <Button variant="primary">Reserve</Button>
        <Typography className="text-center mb-5 text-sm">
          You won't be charge yet
        </Typography>
      </div>
      <div>
        <div className="flex justify-between mb-5">
          <Button variant={"ghost"} className="underline pl-0" onClick={()=>setIsBreakdownModalOpen(true)}>
            <PesoSign />
            25,000 x 5 nights
          </Button>
          <div>{formatCurrency(checkoutDesc.durationCost, "Philippines")}</div>
        </div>

        <div className="flex justify-between">
          <Button 
          variant={"ghost"}
          className="underline pl-0" 
          onClick={()=>setMoreInfoModalOpen(true)}
          >ES service fee</Button>
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
       isOpen={isBreakdownMoalOpen}
        onClose={()=>setIsBreakdownModalOpen(false)} 
       />
       <CheckoutMoreInfoModal 
       isOpen={isMoreInfoModalOpen}
       onClose={()=>setMoreInfoModalOpen(false)}
       />
    </div>
  )
}

export default CheckoutProcess
