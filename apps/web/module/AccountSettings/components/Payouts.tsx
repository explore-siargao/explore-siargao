import { Button } from "@/common/components/ui/Button"
import { Title } from "@/common/components/ui/Title"
import React from "react"

const Payouts = () => {
  return (
    <div className="my-5">
      <Title size={"sub"}>How you’ll get paid</Title>
      <p className="font-light pb-4">
        Add at least one payout method so we know where to send your money.
      </p>
      <Button>Set up payouts</Button>
    </div>
  )
}

export default Payouts
