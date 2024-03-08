import React from "react"
import { Typography } from "@/common/components/ui/Typography"
import Chart, { ChartType } from "./components/Chart"
import useGetThisMonthEarnings from "../hooks/useGetThisMonthEarnings"

const EarningsThisMonth = () => {
  const { data: thisMonth, isPending: thisMonthIsPending } =
    useGetThisMonthEarnings()
  return (
    <div className="mt-4">
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
  )
}

export default EarningsThisMonth
