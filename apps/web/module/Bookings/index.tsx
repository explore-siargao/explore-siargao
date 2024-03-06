"use client"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import Table from "../../common/components/Table/Index"
import Image from "next/image"
import { Typography } from "@/common/components/ui/Typography"
import { LucidePlus, LucideTable } from "lucide-react"
import { PaymentStatus } from "./SingleView/components/PaymentStatus"
import { createColumnHelper } from "@tanstack/react-table"
import Link from "next/link"
import { Button } from "@/common/components/ui/Button"
import useGetBookings from "./hooks/useGetBookings"

interface ITypes {
  fileKey: string
  description: string
  guestCount: string
  dateRange: string
  location: string
  totalCost: string
  paymentStatus: string
}

const Bookings = () => {
  const { data, isPending } = useGetBookings(2)

  const columnHelper = createColumnHelper<ITypes>()
  const columns = [
    columnHelper.accessor("fileKey", {
      header: "Listing",
      cell: (info) => (
        <Link href="/profile">
          <div className="flex items-center gap-5">
            <Image
              className="rounded-xl"
              src={`/assets/${info.getValue()}`}
              alt="Image"
              width={100}
              height={100}
            />
            <span>
              <Typography variant="p">
                {info.row.original.description}
              </Typography>
            </span>
          </div>
        </Link>
      ),
    }),
    columnHelper.accessor("guestCount", {
      header: "Guest Count",
      cell: (guestCount) => (
        <Typography variant="p">{guestCount.getValue()}</Typography>
      ),
    }),
    columnHelper.accessor("dateRange", {
      header: "Date",
      cell: (dateRange) => (
        <Typography variant="p">{dateRange.getValue()}</Typography>
      ),
    }),
    columnHelper.accessor("location", {
      header: "Location",
      cell: (location) => (
        <Typography variant="p">{location.getValue()}</Typography>
      ),
    }),
    columnHelper.accessor("totalCost", {
      header: "Total Cost",
      cell: (totalCost) => (
        <Typography variant="p">{totalCost.getValue()}</Typography>
      ),
    }),
    columnHelper.accessor("paymentStatus", {
      header: "Payment Status",
      cell: (paymentStatus) => (
        <Link href="/payment-status">
          <div className="flex items-center">
            <span>
              <PaymentStatus />
            </span>
            <Typography variant="p">{paymentStatus.getValue()}</Typography>
          </div>
        </Link>
      ),
    }),
  ]

  return (
    <WidthWrapper className="mt-40 w-full">
      {testData.length > 0 ? (
        <div className="px-12">
          <div className="mb-12">
            <Typography
              variant="h1"
              fontWeight="semibold"
              className="flex justify-between items-center pl-4"
            >
              Your booking
              <div className="flex gap-5">
                <span className="bg-white rounded-full p-2 cursor-pointer shadow-lg">
                  <LucideTable />
                </span>
                <span className="bg-white rounded-full p-2 cursor-pointer shadow-lg">
                  <LucidePlus />
                </span>
              </div>
            </Typography>
          </div>
          <Table data={testData} columns={columns} />
        </div>
      ) : (
        <div className="px-12">
          <Typography variant="h1" fontWeight="semibold">
            Trips
          </Typography>
          <hr className="mt-5 mb-5"></hr>
          <Typography variant="h1" fontWeight="semibold">
            No trips booked...yet!
          </Typography>
          <Typography
            variant="h4"
            fontWeight="semibold"
            className="text-gray-600"
          >
            Time to dust off your bags and start planning your next adventure
          </Typography>
          <Button variant="outline" size="lg" className="mt-3 font-semibold">
            Start searching
          </Button>
          <hr className="mt-12 mb-5"></hr>
          <Typography
            variant="h4"
            fontWeight="semibold"
            className="text-gray-600"
          >
            Can't find your reservation here?{" "}
            <button className="font-semibold underline text-gray-800">
              Visit the help center
            </button>
          </Typography>
        </div>
      )}
    </WidthWrapper>
  )
}

export default Bookings
