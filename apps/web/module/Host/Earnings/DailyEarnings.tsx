"use client"
import formatCurrency from "@/common/helpers/formatCurrency"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const earnings = [
  {
    id: 1,
    earning: 22000.25,
    date: "2024-02-01 00:09:08.728",
  },
  {
    id: 2,
    earning: 11000.0,
    date: "2024-03-22 00:09:08.728",
  },
  {
    id: 3,
    earning: 6700.0,
    date: "2024-02-25 00:09:08.728",
  },
  {
    id: 4,
    earning: 12500.0,
    date: "2024-01-22 00:09:08.728",
  },
  {
    id: 5,
    earning: 22000.0,
    date: "2024-01-11 00:09:08.728",
  },
  {
    id: 6,
    earning: 16000.0,
    date: "2024-03-16 00:09:08.728",
  },
  {
    id: 7,
    earning: 2200.0,
    date: "2024-02-29 00:09:08.728",
  },
  {
    id: 7,
    earning: 2200.0,
    date: "2024-05-29 00:09:08.728",
  },
  {
    id: 7,
    earning: 2200.0,
    date: "2024-04-29 00:09:08.728",
  },
  {
    id: 7,
    earning: 2200.0,
    date: "2024-04-20 00:09:08.728",
  },
]

const Daily = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={earnings}
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
                day: "numeric",
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
    </>
  )
}

export default Daily
