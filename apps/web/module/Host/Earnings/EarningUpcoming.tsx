import React from "react"
import { Typography } from "@/common/components/ui/Typography"
import useGetUpcomingEarnings from "../hooks/useGetUpcomingEarnings"
import { Spinner } from "@/common/components/ui/Spinner"
import formatCurrency from "@/common/helpers/formatCurrency"
import Chart, { ChartType } from "./components/Chart"
import { format } from "date-fns"

const EarningUpcoming = () => {
  const { data: upcoming, isPending: upcomingIsPending } =
    useGetUpcomingEarnings()
  const currentDate = new Date()
  const summaryData = [
    ["Gross earnings", "Adjustments", "Service fee", "Taxes withheld"],
    [
      formatCurrency(
        upcoming?.item?.yearToDateSummary?.gross ?? "",
        "Philippines"
      ),
      formatCurrency(
        upcoming?.item?.yearToDateSummary?.adjustment ?? "",
        "Philippines"
      ),
      formatCurrency(
        upcoming?.item?.yearToDateSummary?.serviceFee ?? "",
        "Philippines"
      ),
      formatCurrency(
        upcoming?.item?.yearToDateSummary?.tax ?? "",
        "Philippines"
      ),
    ],
  ]
  return (
    <div className="mt-8">
      {upcoming?.item && upcoming.item.amount.length > 0 ? (
        <Chart
          data={upcoming.item.amount}
          totalAmount={upcoming.item.total}
          isPending={upcomingIsPending}
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
  )
}

export default EarningUpcoming
