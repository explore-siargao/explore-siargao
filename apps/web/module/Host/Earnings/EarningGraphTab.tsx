"use client"
import React from "react"
import EarningsThisMonth from "./EarningsThisMonth"
import EarningsUpcoming from "./EarningsUpcoming"
import EarningsPaid from "./EarningsPaid"
import { Typography } from "@/common/components/ui/Typography"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import Tabs from "@/common/components/Tabs"
import earningsTabs from "./helpers/earningsTabs"
import YearToDateSummary from "./components/YearToDateSummaryBox"

const Earnings = () => {

  return (
    <WidthWrapper
      width="medium"
      className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-14 mt-28 md:mt-36"
    >
      <div className="lg:col-span-3">
        <Typography variant="h1" fontWeight="semibold">
          Earnings
        </Typography>
        <div className="mt-3">
          <Tabs tabs={earningsTabs} />
        </div>
        <EarningsThisMonth />
        <EarningsUpcoming />
        <EarningsPaid />
      </div>
      <div className="col-span-1 relative">
        <YearToDateSummary />
      </div>
    </WidthWrapper>
  )
}

export default Earnings
