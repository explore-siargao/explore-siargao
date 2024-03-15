"use client"
import React from "react"
import Tabs from "@/common/components/Tabs"
import formatCurrency from "@/common/helpers/formatCurrency"
import useGetPaymentHistoryGraph from "../PaymentHistory/hooks/useGetPaymentHistoryGraph"
import Earnings from "."
import { WidthWrapper } from "@/common/components/WidthWrapper"
import { Typography } from "@/common/components/ui/Typography"
import tabs from "./constants/tabs"

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
      className="grid lg:grid-cols-4 gap-12 lg:gap-0 mt-28 md:mt-36"
    >
      <div className="lg:col-span-9">
        <Tabs tabs={tabs} />
        <h2 className="text-center pt-20">This is for Room type tab</h2>
      </div>
    </WidthWrapper>
  )
}

export default RoomTypeTab
