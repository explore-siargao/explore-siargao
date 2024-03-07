"use client"
import { Typography } from "@/common/components/ui/Typography"
import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import useGetThisMonthEarnings from "../hooks/useGetThisMonthEarnings"
import { Spinner } from "@/common/components/ui/Spinner"

const datas = [
  {
    month: "Jan",
    earnings: 40.0,
  },
  {
    month: "Feb",
    earnings: 60.0,
  },
  {
    month: "Mar",
    earnings: 80.0,
  },
  {
    month: "Apr",
    earnings: 80.0,
  },
  {
    month: "May",
    earnings: 55.0,
  },
  {
    month: "Jun",
    earnings: 70.0,
  },
  {
    month: "Jul",
    earnings: 90.0,
  },
  {
    month: "Aug",
    earnings: 11.12,
  },
  {
    month: "Sep",
    earnings: 1.12,
  },
  {
    month: "Oct",
    earnings: 11.02,
  },
  {
    month: "Nov",
    earnings: 14.12,
  },
  {
    month: "Dec",
    earnings: 11.25,
  },
]

interface IYearToDateSummary {
  earnings: number
  date: string
  grossEarnings: number
  adjustments: number
  serviceFee: number
  taxesWithheld: number
}
const EarningsThisMonth = ({
  earnings,
  date,
  grossEarnings,
  adjustments,
  serviceFee,
  taxesWithheld,
}: IYearToDateSummary) => {
  const { data, isPending } = useGetThisMonthEarnings()
  const summaryData = [
    ["Gross earnings", "Adjustments", "Service fee", "Taxes withheld"],
    [
      `₱${grossEarnings.toFixed(2)}`,
      `₱${adjustments.toFixed(2)}`,
      `₱${serviceFee.toFixed(2)}`,
      `₱${taxesWithheld.toFixed(2)}`,
    ],
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="left p-4 lg:col-span-3">
        <Typography variant="h2" fontWeight="semibold">
          Earnings
        </Typography>
        <Typography variant="h1">
          You've made{" "}
          <span className="text-gray-400">
            ₱{isPending ? 0.0 : data?.item && (data?.item.total).toFixed(2)}
          </span>{" "}
          this month
        </Typography>
        <ResponsiveContainer width="100%" height={400}>
          {isPending ? (
            <Spinner size="md">Loading...</Spinner>
          ) : (
            <LineChart
              width={500}
              height={400}
              data={data?.item ? data.item.amount : []}
              margin={{
                top: 40,
                right: 90,
                left: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey={"date"}
                tickFormatter={(value: string) =>
                  new Date(value).toLocaleDateString("en-US", {
                    year: "numeric",
                    day: "numeric",
                    month: "long",
                  })
                }
              />
              <YAxis
                dataKey={"earning"}
                tickFormatter={(value: number) => `₱${value}`}
              />
              <Tooltip formatter={(value: number) => `₱${value}`} />
              <Legend />
              <Line
                type="monotone"
                dataKey="earning"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>

      <div className="p-6 col-span-1 lg:col-span-1">
        <div className="bg-white rounded-lg shadow-lg p-4 h-70">
          <Typography variant="h2" fontWeight="semibold">
            Year-to-date summary
          </Typography>
          <Typography variant="p" className="text-gray-400 pb-4">
            {date}
          </Typography>

          <div className="flex gap-4 justify-between pb-4">
            {summaryData.map((column) => (
              <div key={`column-${column}`} className="flex flex-col">
                {column.map((item, column) => (
                  <h6
                    key={`column-${column}-item-${item}-${column}`}
                    className="pt-2 text-sm"
                  >
                    {item}
                  </h6>
                ))}
              </div>
            ))}
          </div>

          <div className="bottom-0 border-t flex gap-4 justify-between">
            <Typography className="pt-4 text-sm">Total(Peso)</Typography>
            <Typography className="pt-4 text-sm">₱102.00</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarningsThisMonth
