import { LucideBarChart, LucideTable } from "lucide-react"

const tabs = [
  {
    name: "Graph",
    icon: <LucideBarChart size={20} />,
    link: "/hosting/payment-history/graph",
  },
  {
    name: "Table",
    icon: <LucideTable size={20} />,
    link: "/hosting/payment-history/table",
  },
]

export default tabs
