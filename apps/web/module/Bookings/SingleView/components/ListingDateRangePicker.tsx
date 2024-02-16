"use client"
import { Typography } from "@/common/components/ui/Typography"
import { Button } from "@/common/components/ui/Button"
import useCheckInOutDateStore from "@/common/store/useCheckInOutDateStore"
import { Calendar } from "@/common/components/ui/Calendar"
import { DateRange } from "react-day-picker"
import { differenceInDays, format } from "date-fns"

interface ListingDRProps {
  title: string
}

const ListingDateRangePicker = ({ title }: ListingDRProps) => {
  const dateRange = useCheckInOutDateStore((state) => state.dateRange)
  const updateDateRange = useCheckInOutDateStore(
    (state) => state.updateDateRange
  )
  const nights = differenceInDays(
    dateRange.to ?? new Date(),
    dateRange.from ?? new Date()
  )
  return (
    <div className="w-full">
      <Typography variant="h3" fontWeight="semibold" className="mb-1">
        {nights} night{nights > 1 && `s`} in {title}
      </Typography>
      <Typography variant="h6" className="mb-4">
        {dateRange?.from != undefined
          ? format(dateRange.from, "LLL dd, y")
          : "Date from"}{" "}
        -{" "}
        {dateRange?.to != undefined
          ? format(dateRange.to, "LLL dd, y")
          : "Date to"}
      </Typography>
      <div className="py-4">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={(data) => updateDateRange(data as DateRange)}
          numberOfMonths={2}
          size="lg"
        />
      </div>
      <Button
        variant="ghost"
        className="underline md:float-right"
        size="sm"
        onClick={() => updateDateRange({ from: undefined, to: undefined })}
      >
        Clear dates
      </Button>
    </div>
  )
}

export default ListingDateRangePicker
