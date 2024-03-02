import AccountSettingWrapper from "@/module/AccountSettings/components/AccountSettingWrapper"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"
import React from "react"

const YourPayments = () => {
  return (
    <AccountSettingWrapper>
      <Title>Your payments</Title>
      <Typography variant={"p"} className="text-text-400">
        Once you have a reservation, this is where you can come to track your
        payments and refunds.
      </Typography>
    </AccountSettingWrapper>
  )
}
export default YourPayments
