"use client"
import React from "react"
import EarningsThisMonth from "./EarningsThisMonth"
import EarningUpcoming from "./EarningUpcoming"
import Paid from "./Paid"
import useGetThisMonthEarnings from "../hooks/useGetThisMonthEarnings"
import { Typography } from "@/common/components/ui/Typography"
import { format } from "date-fns"
import formatCurrency from "@/common/helpers/formatCurrency"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import useGetPaidEarnings from "../hooks/useGetPaidEarnings"

const Earnings = () => {
  const { data: thisMonth } = useGetPaidEarnings()
  const currentDate = new Date()
  const summaryData = [
    ["Gross earnings", "Adjustments", "Service fee", "Taxes withheld"],
    [
      formatCurrency(thisMonth?.item?.summary?.gross ?? "", "Philippines"),
      formatCurrency(
        thisMonth?.item?.summary?.adjustments ?? "",
        "Philippines"
      ),
      formatCurrency(thisMonth?.item?.summary?.service ?? "", "Philippines"),
      formatCurrency(thisMonth?.item?.summary?.tax ?? "", "Philippines"),
    ],
  ]
  return (
    <WidthWrapper
      width="medium"
      className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 mt-28 md:mt-36"
    >
      <div className="lg:col-span-3">
        <Typography variant="h1" fontWeight="semibold">
          Earnings
        </Typography>

        <EarningsThisMonth />
        <EarningUpcoming />
        <Paid />
      </div>
      <div className="col-span-1 relative">
        <div className="bg-white rounded-lg shadow-lg p-8 sticky top-36">
          <Typography variant="h2" fontWeight="semibold">
            Year-to-date summary
          </Typography>
          <Typography variant="p" className="text-gray-400 pb-4">
            Jan 1 - {format(currentDate, "MMMM d yyyy")}
          </Typography>

          <div className="flex gap-4 justify-between pb-4">
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

          <div className="bottom-0 border-t flex gap-4 justify-between">
            <Typography className="pt-4" variant="p" fontWeight="semibold">
              Total
            </Typography>
            <Typography
              className="pt-4 text-sm"
              variant="p"
              fontWeight="semibold"
            >
              {formatCurrency(
                thisMonth?.item?.summary.totalEarnings as number,
                "Philippines"
              )}
            </Typography>
          </div>
        </div>
      </div>
    </WidthWrapper>
  )
}

export default Earnings
