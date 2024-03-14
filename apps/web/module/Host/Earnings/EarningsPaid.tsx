"use client"
import React from "react"
import { Typography } from "@/common/components/ui/Typography"
import formatCurrency from "@/common/helpers/formatCurrency"
import useGetPaidEarnings from "../hooks/useGetPaidEarnings"
import Chart, { ChartType } from "./components/Chart"

const EarningsPaid = () => {
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
        <>
          <div>
            <Typography variant="h1" className="text-[30px]">
              Your paid earnings{" "}
              <span className="text-gray-400">
                {isPending
                  ? formatCurrency(0.0, "Philippines")
                  : formatCurrency(data.item.total, "Philippines")}
              </span>
            </Typography>
          </div>
          <Chart
            width="100%"
            height={400}
            isPending={isPending}
            data={data.item.amount}
            type={ChartType["this-month"]}
            earningType="monthly"
          />
        </>
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

export default EarningsPaid
