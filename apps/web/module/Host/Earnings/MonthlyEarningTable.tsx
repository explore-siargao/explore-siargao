import { PaymentHistoryBookingsData } from "@/common/components/Table/Type"
import Table from "@/common/components/Table"
import { ColumnsTab } from "../constants/columns"
import useGetMonthYearEarningsWithBookings from "../hooks/useGetMonthYearEarningsWithBookings"

const MonthlyEarningTable = ({ date }: { date: string }) => {
  const { data: bookings, isPending } = useGetMonthYearEarningsWithBookings(date)
  const filteredBookings = bookings && bookings?.item?.bookings?.filter((booking: PaymentHistoryBookingsData) => {
      return booking.dateFrom !== null
    })
  const columns = ColumnsTab
  return (
    <div className="pt-8">
      <Table
        data={
          !isPending ? (filteredBookings as PaymentHistoryBookingsData[]) : []
        }
        columns={columns}
      />
    </div>
  )
}

export default MonthlyEarningTable
