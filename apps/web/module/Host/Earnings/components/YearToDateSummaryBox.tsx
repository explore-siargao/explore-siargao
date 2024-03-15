import React from "react"
import { Typography } from "@/common/components/ui/Typography"
import { format } from "date-fns"

interface SummaryData {
  labels: string[]
  values: (string | null)[][]
  total: string | null
}

interface OverAllSummaryProps {
  yearToDateSummaryData: SummaryData
}

const YearToDateSummary: React.FC<OverAllSummaryProps> = ({
  yearToDateSummaryData,
}) => {
  const currentDate = new Date()

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 sticky top-36">
      <Typography variant="h2" fontWeight="semibold" className="mb-2">
        Year-to-date summary
      </Typography>
      <Typography variant="p" className="text-gray-400 pb-4">
        Jan 1 - {format(currentDate, "MMMM d yyyy")}
      </Typography>
      <div className="flex flex-col">
        {yearToDateSummaryData.labels.map((header, index) => (
          <div key={header} className="flex gap-4 justify-between">
            <Typography
              variant="p"
              fontWeight="semibold"
              className="pt-2 text-sm"
            >
              {header}:
            </Typography>
            <Typography
              variant="p"
              fontWeight="semibold"
              className="pt-2 text-sm"
            >
              {yearToDateSummaryData.values[0]?.[index]}
            </Typography>
          </div>
        ))}
      </div>
      <div className="bottom-0 border-t flex gap-4 mt-4 justify-between">
        <Typography className="pt-4" variant="p" fontWeight="semibold">
          Total
        </Typography>
        <Typography className="pt-4 text-sm" variant="p" fontWeight="semibold">
          {yearToDateSummaryData.total}
        </Typography>
      </div>
    </div>
  )
}

export default YearToDateSummary
