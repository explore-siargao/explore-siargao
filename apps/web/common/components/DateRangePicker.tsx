"use client"
import { Dispatch, SetStateAction, useState } from "react"
import { DateRange } from "react-day-picker"
import { Calendar } from "./ui/Calendar"

interface DateRangePickerProps {
  date: DateRange | undefined
  setDate: Dispatch<SetStateAction<DateRange | undefined>>
}

const DateRangePicker = ({ date, setDate }: DateRangePickerProps) => {
  return (
    <>
      <Calendar
        initialFocus
        mode="range"
        defaultMonth={date?.from}
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
      />
    </>
  )
}

export default DateRangePicker
