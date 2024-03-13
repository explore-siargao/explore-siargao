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
import { WidthWrapper } from "@/common/components/WidthWrapper"

const dummyData = {
    completed: 2000,
    cancelled: 2000,
    total: 4000,
}

const PaymentHistoryGraph = () => {
    const data = [
        { name: "Cancelled", value: dummyData.cancelled },
        { name: "Completed", value: dummyData.completed },
    ];

    return (
        <WidthWrapper width="medium" className="mt-28 md:mt-36">
            <ResponsiveContainer width="100%" height={400}>
            <BarChart
            data={data}
            margin={{
                top: 40,
                right: 90,
                left: 10,
            }}
            >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value: number) =>
              formatCurrency(value, "Philippines")
            }
            />
            <Tooltip formatter={(value: number) => formatCurrency(value, "Philippines")} />
            <Bar
                dataKey="value"
                fill="#9FC7C7"
                activeBar={<Rectangle fill="#8BB3B3" />}
            />
            </BarChart>
        </ResponsiveContainer>
      </WidthWrapper>
    )
}

export default PaymentHistoryGraph