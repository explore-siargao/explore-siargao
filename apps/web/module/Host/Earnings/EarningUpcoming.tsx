import React from "react"
import { Typography } from "@/common/components/ui/Typography"
import useGetUpcomingEarnings from "../hooks/useGetUpcomingEarnings"
import { Spinner } from "@/common/components/ui/Spinner"
import formatCurrency from "@/common/helpers/formatCurrency"
import Chart, { ChartType } from "./components/Chart"
import { format } from "date-fns"

const EarningUpcoming = () => {
  const { data, isPending } = useGetUpcomingEarnings()
  const currentDate = new Date()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      {isPending ? (
        <Spinner size="md">Loading...</Spinner>
      ) : (
        <>
          <div className="left p-4 lg:col-span-3">
            {data?.item && data.item.amount.length > 0 ? (
              <Chart
                data={data.item.amount}
                totalAmount={data.item.total}
                isPending={isPending}
                width="100%"
                height={400}
                type={ChartType.upcoming}
              />
            ) : (
              <>
                <Typography fontWeight="semibold" variant="h2" className="pb-4">
                  Upcoming
                </Typography>
                <Typography fontWeight="semibold" variant="p">
                  No upcoming earnings at the moment.
                </Typography>
              </>
            )}
          </div>
          <div className="p-6 col-span-1 lg:col-span-1">
            {data?.item && data.item.amount.length > 0 ? (
              <div className="bg-white rounded-lg shadow-lg p-4 h-70">
                <Typography variant="h2" fontWeight="semibold">
                  Year-to-date summary
                </Typography>
                <Typography variant="p" className="text-gray-400 pb-4">
                  Jan 1 - {format(currentDate, "MMMM d yyyy")}
                </Typography>

                <div className="flex justify-between pb-4">
                  <div className="flex flex-col">
                    <Typography className="pt-2 text-sm">
                      Gross earnings
                    </Typography>
                    <Typography className="pt-2 text-sm">
                      Adjustments
                    </Typography>
                    <Typography className="pt-2 text-sm">
                      Service fee
                    </Typography>
                    <Typography className="pt-2 text-sm">
                      Taxes withheld
                    </Typography>
                  </div>
                  <div className="flex flex-col">
                    <Typography className="pt-2 text-sm">
                      {formatCurrency(
                        data?.item?.yearToDateSummary?.gross ?? "",
                        "Philippines"
                      )}
                    </Typography>
                    <Typography className="pt-2 text-sm">
                      {formatCurrency(
                        data?.item?.yearToDateSummary?.adjustment ?? "",
                        "Philippines"
                      )}
                    </Typography>
                    <Typography className="pt-2 text-sm">
                      {formatCurrency(
                        data?.item?.yearToDateSummary?.serviceFee ?? "",
                        "Philippines"
                      )}
                    </Typography>
                    <Typography className="pt-2 text-sm">
                      {formatCurrency(
                        data?.item?.yearToDateSummary?.tax ?? "",
                        "Philippines"
                      )}
                    </Typography>
                  </div>
                </div>

                <div className="bottom-0 border-t flex gap-4 justify-between">
                  <Typography className="pt-4 text-sm">Total(Peso)</Typography>
                  <Typography className="pt-4 text-sm">
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

export default EarningUpcoming
