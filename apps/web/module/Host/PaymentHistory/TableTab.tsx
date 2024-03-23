"use client"
import React from "react"
import { Typography } from "@/common/components/ui/Typography"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import Tabs from "@/common/components/Tabs"
import formatCurrency from "@/common/helpers/formatCurrency"
import OverAllSummary from "./components/OverAllSummary"
import BookingsTable from "./BookingsTable"
import paymentHistoryTabs from "./constants/paymentHistoryTabs"
import useGetPaymentHistoryTable from "./hooks/useGetPaymentHistoryTable"

const TableTab = () => {
  const { isPending, data: overAllSummaryDataTable } =
    useGetPaymentHistoryTable("all")

  const summaryData = {
    labels: ["Completed", "Cancelled"],
    values: [
      [
        formatCurrency(
          !isPending && overAllSummaryDataTable?.item?.summary.completed,
          "Philippines"
        ) || null,
        formatCurrency(
          !isPending && overAllSummaryDataTable?.item?.summary.cancelled,
          "Philippines"
        ) || null,
      ],
    ],
    total:
      formatCurrency(
        !isPending && overAllSummaryDataTable?.item?.summary.total,
        "Philippines"
      ) || null,
  }

  return (
    <WidthWrapper
      width="medium"
      className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-10 mt-28 md:mt-36"
    >
      <div className="lg:col-span-3">
        <Typography variant="h1" fontWeight="semibold" className="mb-2">
          Payment History
        </Typography>
        <div className="mt-3">
          <Tabs tabs={paymentHistoryTabs} />
        </div>
        <BookingsTable />
      </div>
      <div className="col-span-1 relative">
        <OverAllSummary overAllSummaryData={summaryData} />
      </div>
    </WidthWrapper>
  )
}

export default TableTab
