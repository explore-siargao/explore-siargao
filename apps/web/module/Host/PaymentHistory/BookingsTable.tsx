import Link from "next/link"
import Image from "next/image"
import { Typography } from "@/common/components/ui/Typography"
import formatCurrency from "@/common/helpers/formatCurrency"
import useGetPaymentHistoryTable from "./hooks/useGetPaymentHistoryTable"
import { createColumnHelper } from "@tanstack/react-table"
import { PaymentHistoryBookingsData } from "@/common/components/Table/Type"
import Table from "@/common/components/Table"
import { StatusDot } from "../components/Status"

const statusEnum = {
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
}

const BookingsTable = () => {
  const { data: bookings, isPending } = useGetPaymentHistoryTable("all")
  const columnHelper = createColumnHelper<PaymentHistoryBookingsData>()
  const columns = [
    columnHelper.accessor("listing", {
      header: "listing",
      cell: (listing) => (
        <Link href="/profile">
          <div className="flex items-center gap-5">
            <div className="relative w-24 h-16 rounded-xl overflow-hidden">
              <Image
                src={`/assets/${listing.row.original.listing?.imageKey}`}
                alt="Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </Link>
      ),
    }),
    columnHelper.accessor("user.firstName", {
      header: "User",
      cell: (user) => (
        <Typography variant="p">
          {user.getValue()} {user.row.original.user.lastName}
        </Typography>
      ),
    }),
    columnHelper.accessor("dateFrom", {
      header: "Date Range",
      cell: (dateRange) => {
        const dateFrom = new Date(
          dateRange.getValue() as string
        ).toLocaleDateString("en-US", { month: "long", day: "2-digit" })
        const dateTo = new Date(
          dateRange.row.original.dateTo as string
        ).toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })
        return <Typography variant="p">{dateFrom + " - " + dateTo}</Typography>
      },
    }),
    columnHelper.accessor("earning", {
      header: "Earnings",
      cell: (earnings) => {
        return (
          <Typography variant="p">
            {formatCurrency(earnings.getValue() as number, "Philippines")}
          </Typography>
        )
      },
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (status) => (
        <Link href="/status">
          <div className="flex items-center">
            <span>
              {status.getValue() === statusEnum.CANCELLED && (
                <StatusDot variant="Danger" />
              )}
              {status.getValue() === statusEnum.COMPLETED && (
                <StatusDot variant="Success" />
              )}
            </span>
            <Typography variant="p">{status.getValue() as string}</Typography>
          </div>
        </Link>
      ),
    }),
  ]
  return (
    <div className="pt-8">
      <Table
        data={
          !isPending
            ? (bookings?.item?.bookings as PaymentHistoryBookingsData[])
            : []
        }
        columns={columns}
      />
    </div>
  )
}

export default BookingsTable
