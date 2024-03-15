"use client"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import Image from "next/image"
import { Typography } from "@/common/components/ui/Typography"
import { LucidePlus, LucideTable } from "lucide-react"
import { createColumnHelper } from "@tanstack/react-table"
import Link from "next/link"
import { IListingsData } from "@/common/components/Table/Type"
import Table from "@/common/components/Table/Index"
import { StatusDot } from "../components/Status"

const statusEnum = {
  PENDING: "Pending",
  DECLINED: "Declined",
  LIVE: "Live",
}

const dummy = [
  {
    id: 1,
    hostId: 101,
    title: "Cozy Apartment in Downtown",
    address: "123 Main St, City",
    imageKey: "1.jpg",
    status: "Live",
  },
  {
    id: 2,
    hostId: 102,
    title: "Beachfront Villa",
    address: "456 Beach Ave, Beach City",
    imageKey: "2.jpg",
    status: "Live",
  },
  {
    id: 3,
    hostId: 103,
    title: "Mountain Cabin Retreat",
    address: "789 Mountain Rd, Mountain Town",
    imageKey: "3.jpg",
    status: "Live",
  },
  {
    id: 4,
    hostId: 104,
    title: "Luxury Penthouse Suite",
    address: "101 Skyline Dr, City",
    imageKey: "4.jpg",
    status: "Declined",
  },
  {
    id: 5,
    hostId: 105,
    title: "Rustic Farmhouse",
    address: "202 Farm Rd, Countryside",
    imageKey: "5.jpg",
    status: "Pending",
  },
]

const HostListing = () => {
  const columnHelper = createColumnHelper<IListingsData>()
  const columns = [
    columnHelper.accessor("imageKey", {
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
            <span>
              <Typography variant="p">{Listing.row.original.title}</Typography>
            </span>
          </div>
        </Link>
      ),
    }),
    columnHelper.accessor("address", {
      header: "Location",
      cell: (location) => (
        <Typography variant="p">{location.getValue()}</Typography>
      ),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (status) => (
        <Link href="/status">
          <div className="flex items-center">
            <span>
              {status.getValue() === statusEnum.DECLINED && (
                <StatusDot variant="Danger" />
              )}
              {status.getValue() === statusEnum.PENDING && (
                <StatusDot variant="Warning" />
              )}
              {status.getValue() === statusEnum.LIVE && (
                <StatusDot variant="Success" />
              )}
            </span>
            <Typography variant="p">{status.getValue()}</Typography>
          </div>
        </Link>
      ),
    }),
  ]
  return (
    <WidthWrapper className="mt-40 w-full">
        <div className="px-12">
          <div className="mb-12">
            <Typography
              variant="h1"
              fontWeight="semibold"
              className="flex justify-between items-center pl-4"
            >
              Your listings
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
          <Table data={dummy} columns={columns} />
        </div>
    </WidthWrapper>
  )
}

export default HostListing
