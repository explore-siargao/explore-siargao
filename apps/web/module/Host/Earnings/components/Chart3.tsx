import React from "react"
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import formatCurrency from "@/common/helpers/formatCurrency"
import { Typography } from "@/common/components/ui/Typography"
import { format } from "date-fns"

interface YearToDateSummary {
  gross: number
  adjustment: number
  serviceFee: number
  tax: number
  total: number
}

interface Amount {
  id: number
  earning: number
  date: string
}

export enum ChartType {
  "upcoming",
  "paid",
  "this-month",
}
interface Earnings {
  amount: Amount[]
  yearToDateSummary: YearToDateSummary
  earningsCount: number
  total: number
}

interface ChartProps {
  data: Amount[]
  totalAmount: number
  isPending: boolean
  width: string | number
  height: number
  type: ChartType
}

const Chart3 = ({
  width,
  height,
  data,
  totalAmount,
  isPending,
  type,
}: ChartProps) => {
  let title = ""
  console.log('yeah', data)
  switch (type) {
    case ChartType.upcoming:
      title = "Your upcoming earnings"
      break
    case ChartType.paid:
      title = "Your paid earnings"
      break
    case ChartType["this-month"]:
      title = "You've made"
      break
    default:
      title = "Earnings"
  }

  return (
    <>
      <div>
        <Typography variant="h1" className="text-[30px]">
          {title}{" "}
          <span className="text-gray-400">
            {isPending
              ? formatCurrency(0.0, "Philippines")
              : formatCurrency(totalAmount, "Philippines")}
          </span>{" "}
          {type === ChartType["this-month"] ? "this month" : ""}
        </Typography>
      </div>

      <ResponsiveContainer width={width} height={height}>
        <BarChart
          data={isPending ? undefined : data}
          margin={{
            top: 40,
            right: 90,
            left: 10,
          }}
        >
          <CartesianGrid />
          <XAxis
            dataKey="date"
            tickFormatter={(value: string) => {
              return format(new Date(value), "yyyy")
            }}
          />
          <YAxis
            dataKey={"earning"}
            tickFormatter={(value: number) =>
              formatCurrency(value, "Philippines")
            }
          />
          <Tooltip
            formatter={(value: number) => formatCurrency(value, "Philippines")}
            labelFormatter={(value: string) => {
              const newDate = format(new Date(value), "yyyy")
              return newDate;
            }}
          />
          <Bar
            dataKey="earning"
            fill="#9FC7C7"
            activeBar={<Rectangle fill="#8BB3B3" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default Chart3
