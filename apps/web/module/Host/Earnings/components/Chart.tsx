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

const Chart = ({
  width,
  height,
  data,
  totalAmount,
  isPending,
  type,
}: ChartProps) => {
  let title = ""
  let options = {}
  switch (type) {
    case ChartType.upcoming:
      title = "Your upcoming earnings"
      options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }
      break
    case ChartType.paid:
      title = "Your paid earnings"
      options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }
      break
    case ChartType["this-month"]:
      title = "You've made"
      options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }
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
            tickFormatter={(value: string) =>
              new Date(value).toLocaleDateString("en-US", options)
            }
          />
          <YAxis
            dataKey={"earning"}
            tickFormatter={(value: number) =>
              formatCurrency(value, "Philippines")
            }
          />
          <Tooltip
            formatter={(value: number) => formatCurrency(value, "Philippines")}
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

export default Chart
