"use client"
import React from "react"
import { Typography } from "@/common/components/ui/Typography"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import Tabs from "@/common/components/Tabs"
import OverAllSummary from "./components/OverAllSummary"
import formatCurrency from "@/common/helpers/formatCurrency"
import { LucideBarChart, LucideTable } from "lucide-react"
import Graph from "@/module/PaymentHistory/Graph"

const tabs = [
  {
    name: "Graph",
    icon: <LucideBarChart size={20} />,
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
const GraphTab = () => {
  return (
    <WidthWrapper
      width="medium"
      className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-10 mt-28 md:mt-36"
    >
      <div className="lg:col-span-3">
        <Typography variant="h1" fontWeight="semibold" className="mb-2">
          Payment History
        </Typography>
        <Tabs tabs={tabs} />
        <Graph />
      </div>
      <div className="col-span-1 relative">
        <OverAllSummary overAllSummaryData={summaryData} />
      </div>
    </WidthWrapper>
  )
}

export default GraphTab
