"use client"
import React from "react"
import Tabs from "@/common/components/Tabs"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import earningsTabs from "./helpers/earningsTabs"
import { Typography } from "@/common/components/ui/Typography"
import formatCurrency from "@/common/helpers/formatCurrency"
import useGetPaymentHistoryGraph from "../PaymentHistory/hooks/useGetPaymentHistoryGraph"
import YearToDateSummary from "./components/YearToDateSummaryBox"

const RoomTypeTab = () => {
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
        <div className="mt-3">
          <Tabs tabs={earningsTabs} />
        </div>
        <div>Room type content</div>
      </div>
      <div className="col-span-1 relative">
        <YearToDateSummary />
      </div>
    </WidthWrapper>
  )
}

export default RoomTypeTab
