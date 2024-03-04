"use client"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import Table from "./SingleView/components/Table"
import Image from "next/image"
import { Typography } from "@/common/components/ui/Typography"
import { LucidePlus, LucideTable } from "lucide-react"
import { PaymentStatus } from "./SingleView/components/PaymentStatus"
import { createColumnHelper } from "@tanstack/react-table"
import Link from "next/link"
import { Button } from "@/common/components/ui/Button"

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
  const data = [
    {
      fileKey: "3.jpg",
      description: "Your listing started in feb 21",
      guestCount: 5,
      dateRange: "feb 25 - feb 29",
      location: "Jolo, Sulu",
      totalCost: "P 2,500",
      paymentStatus: "For verification",
    },
    {
      fileKey: "1.jpg",
      description: "Mahangin dito at maginhawa",
      guestCount: 3,
      dateRange: "feb 29 - feb 36",
      location: "Marawi, City",
      totalCost: "P 3,500",
      paymentStatus: "In progress",
    },
    {
      fileKey: "3.jpg",
      description: "Malamig tsaka mainit",
      guestCount: 3,
      dateRange: "feb 46 - feb 38",
      location: "Downtown, Kinaladkad ng QC",
      totalCost: "P 36,500",
      paymentStatus: "In progress",
    },
    {
      fileKey: "4.jpg",
      description: "Malamig tsaka mainitttttt",
      guestCount: 3,
      dateRange: "feb 46 - feb 38",
      location: "Downtown, Kinaladkad ng QC",
      totalCost: "P 366,500",
      paymentStatus: "In progress",
    },
    {
      fileKey: "5.jpg",
      description: "Malamig tsaka mainit",
      guestCount: 3,
      dateRange: "feb 46 - feb 38",
      location: "Downtown, Kinaladkad ng QC",
      totalCost: "P 36,500",
      paymentStatus: "In progresssss",
    },
  ]
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
      cell: (info) => <Typography variant="p">{info.getValue()}</Typography>,
    }),
    columnHelper.accessor("dateRange", {
      header: "Date",
      cell: (info) => <Typography variant="p">{info.getValue()}</Typography>,
    }),
    columnHelper.accessor("location", {
      header: "Location",
      cell: (info) => <Typography variant="p">{info.getValue()}</Typography>,
    }),
    columnHelper.accessor("totalCost", {
      header: "Total Cost",
      cell: (info) => <Typography variant="p">{info.getValue()}</Typography>,
    }),
    columnHelper.accessor("paymentStatus", {
      header: "Payment Status",
      cell: (info) => (
        <Link href="/payment-status">
          <div className="flex items-center">
            <span>
              <PaymentStatus />
            </span>
            <Typography variant="p">{info.getValue()}</Typography>
          </div>
        </Link>
      ),
    }),
  ]

  return (
    <WidthWrapper className="mt-40 w-full">
      {data.length > 0 ? (
        <div className="px-12">
          <div className="mb-12">
            <Typography
              variant="h1"
              fontWeight="semibold"
              className="flex justify-between items-center pl-4"
            >
              Your listing
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
          <Table data={data} columns={columns} />
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
