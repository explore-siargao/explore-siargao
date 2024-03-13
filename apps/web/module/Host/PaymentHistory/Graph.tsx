"use client"
import React from "react"
import { Typography } from "@/common/components/ui/Typography"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import Tabs from "@/common/components/Tabs"
import OverAllSummary from "./components/OverAllSummary"
import formatCurrency from "@/common/helpers/formatCurrency"
import { BarChart2, LucideTable } from "lucide-react"

const tabs = [
  {
    name: "Graph",
    icon: <BarChart2 size={20} />,
    link: "/hosting/payment-history/graph",
    isSelected: true,
  },
  {
    name: "Table",
    icon: <LucideTable size={20} />,
    link: "/hosting/payment-history/table",
  },
]
const summaryData = {
  labels: ["Completed", "Cancelled"],
  values: [
    [formatCurrency(2000, "Philippines"), formatCurrency(4000, "Philippines")],
  ],
  total: formatCurrency(6000, "Philippines"),
}
const Graph = () => {
  return (
    <WidthWrapper
      width="medium"
      className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 mt-28 md:mt-36"
    >
      <div className="lg:col-span-3">
        <Typography variant="h1" fontWeight="semibold" className="mb-2">
          Payment History
        </Typography>
        <Tabs tabs={tabs} />
        <div className="text-center justify-center pt-10  text-gray-400">
          This is Graph tab
        </div>
      </div>
      <div className="col-span-1 relative">
        <OverAllSummary overAllSummaryData={summaryData} />
      </div>
    </WidthWrapper>
  )
}

export default Graph
