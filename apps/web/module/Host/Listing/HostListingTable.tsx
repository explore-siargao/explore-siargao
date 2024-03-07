"use client"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import Image from "next/image"
import { Typography } from "@/common/components/ui/Typography"
import { LucidePlus, LucideTable } from "lucide-react"
import { createColumnHelper } from "@tanstack/react-table"
import Link from "next/link"
import { Spinner } from "@/common/components/ui/Spinner"
import HostTable from "@/common/components/Table/HostTable"
import { Status } from "./components/Status"

interface IType {
  fileKey: string
  title: string
  address: string
  status: string
}

const status = {
  PENDING: "Pending",
  DECLINED: "Declined",
  LIVE: "Live",
}

const HostListingTable = () => {
  const data = [
    {
      fileKey: "1.jpg",
      title: "your listing",
      address: "paete",
      status: status.DECLINED,
    },
    {
      fileKey: "2.jpg",
      title: "amazing view",
      address: "longos",
      status: status.PENDING,
    },
    {
      fileKey: "2.jpg",
      title: "amazing view",
      address: "longos",
      status: status.LIVE,
    },
  ]
  const columnHelper = createColumnHelper<IType>()
  const columns = [
    columnHelper.accessor("fileKey", {
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
            <span>
              <Typography variant="p">{listing.row.original.title}</Typography>
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
      cell: (statusCell) => {
        const statusValue = statusCell.getValue();
    
        return (
          <Link href="/status">
            <div className="flex items-center">
              <span>
                {statusValue === status.DECLINED && <Status variant="Declined" />}
                {statusValue === status.PENDING && <Status variant="Pending" />}
                {statusValue === status.LIVE && <Status variant="Live" />}
              </span>
              <Typography variant="p">{statusValue}</Typography>
            </div>
          </Link>
        );
      },
    }),
    
  ]

  return (
    <WidthWrapper className="mt-40 w-full">
      <Spinner size="md">Loading...</Spinner>
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
        <HostTable data={data} columns={columns} />
      </div>
    </WidthWrapper>
  )
}

export default HostListingTable
