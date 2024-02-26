"use client"
import React, { useState } from "react"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { Title } from "@/common/components/ui/Title"
import { LINK_ACCOUNT } from "@/common/constants/links"
import { cn } from "@/common/helpers/cn"
import Payments from "./components/Payments"
import Payouts from "./components/Payouts"
import GuestContribution from "./components/GuestContribution"
import { Breadcrumb } from "@/common/components/ui/Breadcrumb"
import { ACCOUNT, PAYMENTS_PAYOUTS } from "@/common/constants"

const renderPayments = () => {
  return <Payments />
}
const renderPayouts = () => {
  return <Payouts />
}
const renderGuestContribution = () => {
  return <GuestContribution />
}

const PaymentPayout = () => {
  const [tableState, setTableState] = useState(0)
  let content

  if (tableState === 0) {
    content = renderPayments()
  } else if (tableState === 1) {
    content = renderPayouts()
  } else {
    content = renderGuestContribution()
  }
  return (
    <AccountSettingWrapper>
      <div>
        <Breadcrumb
          home={ACCOUNT}
          page={PAYMENTS_PAYOUTS}
          link={LINK_ACCOUNT}
        />
        <Title>{PAYMENTS_PAYOUTS}</Title>
      </div>
      <div className="hidden sm:block">
        <div className="flex border-b border-b-text-50">
          <button
            className={cn(
              tableState === 0
                ? "border-text-900 text-text-900"
                : "border-transparent text-text-500 hover:border-text-300 hover:text-text-700",
              "whitespace-nowrap border-b-2 py-4 px-8 text-sm font-medium"
            )}
            onClick={() => setTableState(0)}
          >
            Payments
          </button>
          <button
            className={cn(
              tableState === 1
                ? "border-text-900 text-text-900"
                : "border-transparent text-text-500 hover:border-text-300 hover:text-text-700",
              "whitespace-nowrap border-b-2 py-4 px-8 text-sm font-medium"
            )}
            onClick={() => setTableState(1)}
          >
            Payouts
          </button>
          <button
            className={cn(
              tableState === 2
                ? "border-text-900 text-text-900"
                : "border-transparent text-text-500 hover:border-text-300 hover:text-text-700",
              "whitespace-nowrap border-b-2 py-4 px-8 text-sm font-medium"
            )}
            onClick={() => setTableState(2)}
          >
            Guest contributions
          </button>
        </div>
        {content}
      </div>
    </AccountSettingWrapper>
  )
}

export default PaymentPayout
