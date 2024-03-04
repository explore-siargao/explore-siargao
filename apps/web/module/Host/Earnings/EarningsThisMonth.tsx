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

const data = [
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
  const summaryData = [
    ["Gross earnings", "Adjustments", "Service fee", "Taxes withheld"],
    [
      `$${grossEarnings.toFixed(2)}`,
      `$${adjustments.toFixed(2)}`,
      `$${serviceFee.toFixed(2)}`,
      `$${taxesWithheld.toFixed(2)}`,
    ],
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="left p-4 lg:col-span-3">
        <Typography variant="h2" fontWeight="semibold">
          Earnings
        </Typography>
        <Typography variant="h1">
          You've made <span className="text-gray-400">$102.00</span> this month
        </Typography>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 40,
              right: 80,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `$${value}`} />
            <Tooltip formatter={(value) => `$${value}`} />
            <Legend />
            <Line
              type="monotone"
              dataKey="earnings"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
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
          {summaryData.map((column, columnIndex) => (
            <div key={`column-${columnIndex}`} className="flex flex-col">
                {column.map((item, itemIndex) => (
                <h6 key={`column-${columnIndex}-item-${itemIndex}`} className="pt-2 text-sm">
                    {item}
                </h6>
                ))}
            </div>
            ))}
          </div>

          <div className="bottom-0 border-t flex gap-4 justify-between">
            <Typography className="pt-4 text-sm">Total(USD)</Typography>
            <Typography className="pt-4 text-sm">$102.00</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarningsThisMonth
