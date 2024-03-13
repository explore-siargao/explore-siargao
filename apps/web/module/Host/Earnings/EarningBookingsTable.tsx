import { Typography } from "@/common/components/ui/Typography"
import Link from "next/link"
import Image from "next/image"
import { createColumnHelper } from "@tanstack/react-table"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import { Spinner } from "@/common/components/ui/Spinner"
import formatCurrency from "@/common/helpers/formatCurrency"
import EarningsTable, {
  EarningBookingsData,
} from "@/common/components/Table/EarningsTable"

const EarningBookingsTable = () => {
  const dummy = [
    {
      bookings: {
        listing: "1.jpg",
        dateFrom: "03-04-2024 11:05:04",
        dateTo: "03-05-2024 11:05:04",
        amount: 2000,
      },
      summary: {
        gross: 2000,
        adjustments: 1000,
        service: 1000,
        taxes: 1000,
        totalEarnings: 2000,
      },
    },
    {
      bookings: {
        listing: "2.jpg",
        dateFrom: "03-06-2024 11:05:04",
        dateTo: "03-07-2024 11:05:04",
        amount: 5000,
      },
      summary: {
        gross: 3000,
        adjustments: 2000,
        service: 1500,
        taxes: 1200,
        totalEarnings: 2000,
      },
    },
  ]

  const columnHelper = createColumnHelper<EarningBookingsData>()
  const columns = [
    columnHelper.accessor("bookings.listing", {
      header: "Listing",
      cell: (listing) => (
        <Link href="/profile">
          <div className="flex items-center gap-5">
            <div className="relative w-24 h-16 rounded-xl overflow-hidden">
              <Image
                src={`/assets/${listing.getValue()}`}
                alt="Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </Link>
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
    columnHelper.accessor("bookings.amount", {
      header: "Amount",
      cell: (amount) => {
        return (
          <Typography variant="p">
            {formatCurrency(amount.getValue(), "Philippines")}
          </Typography>
        )
      },
    }),
  ]

  return (
    <WidthWrapper className="mt-40 w-full">
      <Spinner size="md">Loading...</Spinner>
      <div className="px-12">
        <EarningsTable data={dummy} columns={columns} />
      </div>
    </WidthWrapper>
  )
}

export default EarningBookingsTable
