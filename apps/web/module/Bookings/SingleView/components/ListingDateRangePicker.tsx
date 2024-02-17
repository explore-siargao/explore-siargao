"use client"
import { useState } from "react"
import DateRangePicker from "../../../../common/components/DateRangePicker"
import { DateRange } from "react-day-picker"
import format from "date-fns/format"
import { Typography } from "@/common/components/ui/Typography"
import { Button } from "@/common/components/ui/Button"

interface ListingDRProps {
  title: string
}

const ListingDateRangePicker = ({ title }: ListingDRProps) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  })
  return (
    <div className="w-full">
      <Typography variant="h3" fontWeight="semibold" className="mb-1">
        {title}
      </Typography>
      <Typography variant="h6" className="mb-4">
        {date?.from != undefined ? format(date.from, "LLL dd, y") : "Date from"}{" "}
        - {date?.to != undefined ? format(date.to, "LLL dd, y") : "Date to"}
      </Typography>
      <div className="py-4">
        <DateRangePicker date={date} setDate={setDate} />
      </div>
      <Button
        variant="ghost"
        className="underline md:float-right"
        size="sm"
        onClick={() => setDate(undefined)}
      >
        Clear dates
      </Button>
    </div>
  )
}

export default ListingDateRangePicker
