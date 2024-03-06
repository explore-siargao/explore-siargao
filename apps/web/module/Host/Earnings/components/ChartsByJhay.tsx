import React, { Children } from "react"
import {
  LineChart,
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Typography } from "@/common/components/ui/Typography"
import { VariantProps, cva } from "class-variance-authority"
import { extend } from "dayjs"
import { cn } from "@/common/helpers/cn"

const chartVariants = cva("", {
    variants: {
        variant: {
            bar: "BarChart",
            line: "LineChart"
        },
        width: {
            default: "w-[100%]",
            sm: "w-[40%]"
        },
        height: {
            default: "h-[400]",
            sm: "h-[200]"
        }
    },
    defaultVariants: {
        variant: "line",
        width: "default",
        height: "default"
    }
})

export interface ChartProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chartVariants> {
        children: React.ReactNode
    }

    const ChartV = React.forwardRef<HTMLDivElement, ChartProps>(
        ({variant, width, height, children, className}, ref) => {
            const Comp = variant === "bar" ? BarChart : LineChart
            return (
                <div ref={ref} className={cn(chartVariants({variant, width, height}), className)}>
                    <Comp>
                        {children}
                    </Comp>
                </div>
            )
        }
    )
ChartV.displayName = "ChartByJhay"


interface IType {
    id: number
    earning: number
    date: number
    amount: number
  }[]
  
interface IYearToDateSummary {
  title?: string
  color?: string //gagawin tong parang varian
  hoverColor?: string // gagawin din tong parang variant
  width?: string //parang variant din
  height?: number //parang variant din
  data: IType[]
  isPending: boolean
}

const ChartByJhay = ({
  title,
  color,
  hoverColor,
  width,
  height,
  data,
  isPending
  
}: IYearToDateSummary) => {
  return (
    <>
      <Typography variant="h2" fontWeight="semibold">
        {title}
      </Typography>
      <ResponsiveContainer width={width} height={height}>
        <BarChart
          data={isPending ? undefined : data}
          margin={{
            top: 40,
            right: 90,
            left: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={(value: string) => value} />
          <YAxis dataKey={"earning"} tickFormatter={(value: number) => value.toString()} />
          <Tooltip formatter={(value: number) => value.toString()} />
          <Legend />
          <Bar
            dataKey="earning"
            fill={color}
            activeBar={<Rectangle fill={hoverColor} />}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default ChartByJhay
