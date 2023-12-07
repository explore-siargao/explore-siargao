"use client"
import React, { useState } from "react"
import Header from "../LandingPage/components/Header"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { Title } from "@/common/components/ui/Title"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { LINK_ACCOUNT_SETTINGS } from "@/common/constants/links"
import combineClasses from "@/common/helpers/combineClasses"
import Payments from "./components/Payments"
import Payouts from "./components/Payouts"
import GuestContribution from "./components/GuestContribution"

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

  return (
    <>
      <Header />
      <AccountSettingWrapper>
        <div className="mb-10">
          <div className="flex items-center text-text-400">
            <a
              href={LINK_ACCOUNT_SETTINGS}
              className="font-semibold hover:underline"
            >
              Account
            </a>
            <ChevronRightIcon
              className="h-5 w-5 flex-shrink-0 mx-3"
              aria-hidden="true"
            />
            <p className="font-medium">Payments & payouts</p>
          </div>
          <Title>Payments & payouts</Title>
        </div>
        <div className="hidden sm:block">
          <div className="flex border-b border-b-text-50">
            <button
              className={combineClasses(
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
              className={combineClasses(
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
              className={combineClasses(
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
          {tableState === 0
            ? renderPayments()
            : tableState === 1
              ? renderPayouts()
              : renderGuestContribution()}
        </div>
      </AccountSettingWrapper>
    </>
  )
}

export default PaymentPayout
