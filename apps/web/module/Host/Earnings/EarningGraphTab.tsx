"use client"
import React from "react"
import EarningsThisMonth from "./EarningsThisMonth"
import EarningsUpcoming from "./EarningsUpcoming"
import Paid from "./EarningsPaid"
import { Typography } from "@/common/components/ui/Typography"
import formatCurrency from "@/common/helpers/formatCurrency"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import Tabs from "@/common/components/Tabs"
import tabs from "./constants/tabs"
import YearToDateSummary from "./components/YearToDateSummaryBox"
import useGetPaymentHistoryGraph from "../PaymentHistory/hooks/useGetPaymentHistoryGraph"

const Earnings = () => {
  const { isPending, data: overAllSummaryDataGraph } =
  useGetPaymentHistoryGraph("all")

const summaryData = {
  labels: ["Completed", "Cancelled"],
  values: [
    [
      formatCurrency(
        !isPending && overAllSummaryDataGraph?.item?.completed,
        "Philippines"
      ) || null,
      formatCurrency(
        !isPending && overAllSummaryDataGraph?.item?.cancelled,
        "Philippines"
      ) || null,
    ],
  ],
  total:
    formatCurrency(
      !isPending && overAllSummaryDataGraph?.item?.total,
      "Philippines"
    ) || null,
}

  return (
    <WidthWrapper
      width="medium"
      className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-14 mt-28 md:mt-36"
    >
      <div className="lg:col-span-3">
        <Typography variant="h1" fontWeight="semibold">
          Earnings
        </Typography>
        <div className="mt-4 mb-6">
          <Tabs tabs={tabs}>
          </Tabs>
        </div>
        <EarningsThisMonth />
        <EarningsUpcoming />
        <Paid />
      </div>
      <div className="col-span-1 relative">
        <YearToDateSummary yearToDateSummaryData={summaryData} />
      </div>
    </WidthWrapper>
  )
}

export default Earnings
