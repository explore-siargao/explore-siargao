import { Button } from "@/common/components/ui/Button"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"
import React from "react"

const Payouts = () => {
  return (
    <div className="my-5">
      <Title size={"sub"}>How you’ll get paid</Title>
      <Typography variant={"p"} className="font-light pb-4">
        Add at least one payout method so we know where to send your money.
      </Typography>
      <Button>Set up payouts</Button>
    </div>
  )
}

export default Payouts
