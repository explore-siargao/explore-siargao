import React from "react"
import { Typography } from "@/common/components/ui/Typography"
import useGetUpcomingEarnings from "../hooks/useGetUpcomingEarnings"
import { Spinner } from "@/common/components/ui/Spinner"
import formatCurrency from "@/common/helpers/formatCurrency"
import Chart, { ChartType } from "./components/Chart"
import { format } from "date-fns"
import useGetThisMonthEarnings from "../hooks/useGetThisMonthEarnings"
import { T_BackendResponse } from "@repo/contract"

const EarningsThisMonth = () => {
  const { data:thisMonth, isPending:thisMonthIsPending } =  useGetThisMonthEarnings()
  const currentDate = new Date()
  const summaryData = [
    ["Gross earnings", "Adjustments", "Service fee", "Taxes withheld"],
    [
      formatCurrency(thisMonth?.item?.yearToDateSummary?.gross ?? "", "Philippines"),
      formatCurrency(
        thisMonth?.item?.yearToDateSummary?.adjustment ?? "",
        "Philippines"
      ),
      formatCurrency(
        thisMonth?.item?.yearToDateSummary?.serviceFee ?? "",
        "Philippines"
      ),
      formatCurrency(thisMonth?.item?.yearToDateSummary?.tax ?? "", "Philippines"),
    ],
  ]
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      {thisMonthIsPending ? (
        <Spinner size="md">Loading...</Spinner>
      ) : (
        <>
          <div className="left p-4 lg:col-span-3">
            {thisMonth?.item && thisMonth.item.amount.length > 0 ? (
              <Chart
                data={thisMonth.item.amount}
                totalAmount={thisMonth.item.total}
                isPending={thisMonthIsPending}
                width="100%"
                height={400}
                type={ChartType["this-month"]}
              />
            ) : (
              <>
                <Typography fontWeight="semibold" variant="h2" className="pb-4">
                  This Month
                </Typography>
                <Typography fontWeight="semibold" variant="p">
                  No this month earnings at the moment.
                </Typography>
              </>
            )}
          </div>
          <div className="p-6 col-span-1 lg:col-span-1 fixed right-20">
            {thisMonth?.item && thisMonth.item.amount.length > 0 ? (
              <div className="bg-white rounded-lg shadow-lg p-4 h-70">
                <Typography variant="h2" fontWeight="semibold">
                  Year-to-date summary
                </Typography>
                <Typography variant="p" className="text-gray-400 pb-4">
                  Jan 1 - {format(currentDate, "MMMM d yyyy")}
                </Typography>

                <div className="flex gap-4 justify-between pb-4 px-4">
                  {summaryData.map((column) => (
                    <div key={`column-${column}`} className="flex flex-col">
                      {column.map((item) => (
                        <Typography
                          variant="p"
                          fontWeight="semibold"
                          key={`column-${column}-item-${item}`}
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
                    {formatCurrency(thisMonth.item.total, "Philippines")}
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

export default EarningsThisMonth
