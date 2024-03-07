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
    <div className="grid grid-cols-1 lg:grid-cols-4">
      {isPending ? (
        <Spinner size="md">Loading...</Spinner>
      ) : (
        <>
          <div className="left p-4 lg:col-span-3">
            {data?.item && data.item.amount.length > 0 ? (
              <>
                <Chart
                  width="100%"
                  height={400}
                  isPending={isPending}
                  data={data.item.amount}
                  type={ChartType.paid}
                  totalAmount={data.item.total}
                />
              </>
            ) : (
              <>
                <div className="p-4">
                  <Typography variant="h1" fontWeight="semibold">
                    Paid
                  </Typography>
                  <Typography variant="p" className="text-gray-800 mt-5">
                    Payouts are sent after guests check in.{" "}
                    <button className="underline">
                      Learn how payouts work
                    </button>
                  </Typography>
                </div>
              </>
            )}
          </div>
          <div className="p-6 col-span-1 lg:col-span-1">
            {data?.item && data.item.amount.length > 0 ? (
              <div className="border rounded-lg shadow-lg p-4 h-70">
                <Typography variant="h2" fontWeight="semibold" className="px-4">
                  Year-to-date summary
                </Typography>
                <Typography variant="p" className="text-gray-400 pb-4 px-4">
                  Jan 1 - {format(currentDate, "MMMM d yyyy")}
                </Typography>

                <div className="flex gap-4 justify-between pb-4 px-4">
                  {summaryData.map((column, columnIndex) => (
                    <div
                      key={`column-${columnIndex}`}
                      className="flex flex-col"
                    >
                      {column.map((item, itemIndex) => (
                        <Typography
                          variant="p"
                          fontWeight="semibold"
                          key={`column-${columnIndex}-item-${itemIndex}`}
                          className="pt-2 text-sm"
                        >
                          {item}
                        </Typography>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="bottom-0 border-t flex gap-4 justify-between px-4">
                  <Typography
                    className="pt-4"
                    variant="p"
                    fontWeight="semibold"
                  >
                    Total
                  </Typography>
                  <Typography
                    className="pt-4 text-sm"
                    variant="p"
                    fontWeight="semibold"
                  >
                    {formatCurrency(data.item.total, "Philippines")}
                  </Typography>
                </div>
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  )
}

export default Paid
