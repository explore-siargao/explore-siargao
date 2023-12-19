import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { Title } from "@/common/components/ui/Title"
import React from "react"

const YourPayments = () => {
  return (
    <AccountSettingWrapper>
      <Title>Your payments</Title>
      <p className="text-text-400">
        Once you have a reservation, this is where you can come to track your
        payments and refunds.
      </p>
    </AccountSettingWrapper>
  )
}
export default YourPayments
