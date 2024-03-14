import PaymentHistoryTable, {
  PaymentHistoryBookingsData,
} from "@/common/components/Table/PaymnetHistoryTable"
import { createColumnHelper } from "@tanstack/react-table"
import Link from "next/link"
import Image from "next/image"
import { Typography } from "@/common/components/ui/Typography"
import formatCurrency from "@/common/helpers/formatCurrency"
import { PaymentHistoryStatus } from "./components/Status"

const dummy = [
  {
    bookings: {
      listing: "1.jpg",
      user: {
        id: 1,
        firstName: "John Patrick",
        lastName: "Madrigal",
      },
      dateFrom: "03-04-2024 11:05:04",
      dateTo: "03-05-2024 11:05:04",
      earnings: 5000,
      status: "Completed",
    },
  },
  {
    bookings: {
      listing: "2.jpg",
      user: {
        id: 2,
        firstName: "Ramil",
        lastName: "Kaharian",
      },
      dateFrom: "03-05-2024 11:05:04",
      dateTo: "03-06-2024 12:05:04",
      earnings: 2000,
      status: "Completed",
    },
  },
  {
    bookings: {
      listing: "3.jpg",
      user: {
        id: 3,
        firstName: "Arjay",
        lastName: "Andal",
      },
      dateFrom: "03-05-2024 11:05:04",
      dateTo: "03-06-2024 12:05:04",
      earnings: 3000,
      status: "Cancelled",
    },
  },
  {
    bookings: {
      listing: "5.jpg",
      user: {
        id: 1,
        firstName: "Richard",
        lastName: "Pugi",
      },
      dateFrom: "03-05-2024 11:05:04",
      dateTo: "03-06-2024 12:05:04",
      earnings: 2500,
      status: "Cancelled",
    },
  },
]

const statusEnum = {
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
}

const BookingsTable = () => {
  const columnHelper = createColumnHelper<PaymentHistoryBookingsData>()
  const columns = [
    columnHelper.accessor("bookings.listing", {
      header: "Listing",
      cell: (Listing) => (
        <Link href="/profile">
          <div className="flex items-center gap-5">
            <div className="relative w-24 h-16 rounded-xl overflow-hidden">
              <Image
                src={`/assets/${Listing.getValue()}`}
                alt="Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </Link>
      ),
    }),
    columnHelper.accessor("bookings.user.firstName", {
      header: "User",
      cell: (user) => (
        <Typography variant="p">
          {user.getValue()} {user.row.original.bookings.user.lastName}
        </Typography>
      ),
    }),
    columnHelper.accessor("bookings.dateFrom", {
      header: "Date Range",
      cell: (dateRange) => {
        const dateFrom = new Date(dateRange.getValue()).toLocaleDateString(
          "en-US",
          { month: "long", day: "2-digit" }
        )
        const dateTo = new Date(
          dateRange.row.original.bookings.dateTo
        ).toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })
        return <Typography variant="p">{dateFrom + " - " + dateTo}</Typography>
      },
    }),
    columnHelper.accessor("bookings.earnings", {
      header: "Earnings",
      cell: (earnings) => {
        return (
          <Typography variant="p">
            {formatCurrency(earnings.getValue(), "Philippines")}
          </Typography>
        )
      },
    }),
    columnHelper.accessor("bookings.status", {
      header: "Status",
      cell: (status) => (
        <Link href="/status">
          <div className="flex items-center">
            <span>
              {status.getValue() === statusEnum.CANCELLED && (
                <PaymentHistoryStatus variant="Danger" />
              )}
              {status.getValue() === statusEnum.COMPLETED && (
                <PaymentHistoryStatus variant="Success" />
              )}
            </span>
            <Typography variant="p">{status.getValue()}</Typography>
          </div>
        </Link>
      ),
    }),
  ]
  return (
    <div className="pt-8">
      <PaymentHistoryTable data={dummy} columns={columns} />
    </div>
  )
}

export default BookingsTable
