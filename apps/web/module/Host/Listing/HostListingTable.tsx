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

const HostListing = () => {

  const dummy = [
    {
      id: 1,
      hostId: 1,
      title: "Villa",
      address: "Longos",
      imageKey: "1.jpg",
      status: "Pending",
    },
  ]

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
