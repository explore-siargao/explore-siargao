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

interface IType {
  amount: [earning: number, date: string]
}

interface ChartProps {
  data: IType[]
  isPending: boolean
  width: string
  height: number
}
const Chart = ({ width, height, data, isPending }: ChartProps) => {
  return (
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
