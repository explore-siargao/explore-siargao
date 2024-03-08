"use client"
import React from "react"
import { Typography } from "@/common/components/ui/Typography"
import { Spinner } from "@/common/components/ui/Spinner"
import formatCurrency from "@/common/helpers/formatCurrency"
import useGetPaidEarnings from "../hooks/useGetPaidEarnings"
import Chart, { ChartType } from "./components/Chart"
import { format } from "date-fns"

const Paid = () => {
  const currentDate = new Date()
  const { data, isPending } = useGetPaidEarnings()
  const summaryData = [
    ["Gross earnings", "Adjustments", "Service fee", "Taxes withheld"],
    [
      formatCurrency(data?.item?.yearToDateSummary?.gross ?? "", "Philippines"),
      formatCurrency(
        data?.item?.yearToDateSummary?.adjustment ?? "",
        "Philippines"
      ),
      formatCurrency(
        data?.item?.yearToDateSummary?.serviceFee ?? "",
        "Philippines"
      ),
      formatCurrency(data?.item?.yearToDateSummary?.tax ?? "", "Philippines"),
    ],
  ]

  return (
    <div className="mt-8">
      {data?.item && data.item.amount.length > 0 ? (
        <Chart
          width="100%"
          height={400}
          isPending={isPending}
          data={data.item.amount}
          type={ChartType.paid}
          totalAmount={data.item.total}
        />
      ) : (
        <div className="p-4">
          <Typography variant="h1" fontWeight="semibold">
            Paid
          </Typography>
          <Typography variant="p" className="text-gray-800 mt-5">
            Payouts are sent after guests check in.{" "}
            <button className="underline">Learn how payouts work</button>
          </Typography>
        </div>
      )}
    </div>
  )
}

export default Paid
