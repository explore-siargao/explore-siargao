import { Button } from "@/common/components/ui/Button"
import { Title } from "@/common/components/ui/Title"
import React from "react"

type Props = {}

const Payments = (props: Props) => {
  return (
    <div className="space-y-10 my-5">
      <div>
        <Title size={"sub"}>Your payments</Title>
        <p className="font-light pb-4">
          Keep track of all your payments and refunds.
        </p>
        <Button>Manage payments</Button>
      </div>
      <div>
        <Title size={"sub"}>Payment methods</Title>
        <p className="font-light pb-4">
          Add a payment method using our secure payment system, then start
          planning your next trip.
        </p>
        <Button>Add payment method</Button>
      </div>
      <div>
        <Title size={"sub"} className="pb-4">
          ExploreSiargao gift credit
        </Title>
        <Button>Add gift card</Button>
      </div>
      <div>
        <Title size={"sub"}>Coupons</Title>
        <div className="flex justify-between border-y border-y-text-100  py-4 my-1">
          <p className="font-light">Your coupons</p>
          <p>0</p>
        </div>
        <Button>Add gift card</Button>
      </div>
    </div>
  )
}

export default Payments
