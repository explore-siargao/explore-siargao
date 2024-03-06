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

interface Earnings {
  amount: Amount[]
  yearToDateSummary: YearToDateSummary
  earningsCount: number
  total: number
}

export enum ChartType {
  "upcoming",
  "paid",
  "this-month",
}

interface ChartProps {
  data: Earnings
  isPending: boolean
  width: string
  height: number
  type: ChartType
}

const Chart = ({ width, height, data, isPending }: ChartProps) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart
        data={isPending ? [] : data.amount}
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
            new Date(value).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })
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
  )
}

export default Chart
