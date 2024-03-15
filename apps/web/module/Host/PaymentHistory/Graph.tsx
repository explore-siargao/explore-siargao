"use client"
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
import useGetPaymentHistoryGraph from "./hooks/useGetPaymentHistoryGraph"

const Graph = () => {
  const { data: graphData, isPending } = useGetPaymentHistoryGraph("all")
  const data = [
    { name: "Cancelled", value: !isPending && graphData?.item?.cancelled },
    { name: "Completed", value: !isPending && graphData?.item?.completed },
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 40,
          left: 10,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis
          tickFormatter={(value: number) =>
            formatCurrency(value, "Philippines")
          }
        />
        <Tooltip
          formatter={(value: number) => formatCurrency(value, "Philippines")}
        />
        <Bar
          dataKey="value"
          fill="#9FC7C7"
          activeBar={<Rectangle fill="#8BB3B3" />}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Graph
