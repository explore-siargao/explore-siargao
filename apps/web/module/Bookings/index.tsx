"Use client"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import { Typography } from "@/common/components/ui/Typography"
import {
  LucideChevronLeft,
  LucideChevronRight,
  LucidePlus,
  LucideTable,
} from "lucide-react"
import Image from "next/image"
import React from "react"
import { PaymentStatus } from "./SingleView/components/ReportListing/PaymentStatus"
import { Button } from "@/common/components/ui/Button"

const dummyData = [
  {
    fileKey: "/assets/1.jpg",
    description: "Your listing started in feb 21",
    guestCount: 5,
    dateRange: "feb 25 - feb 29",
    location: "Jolo, Sulu",
    cost: "P 2,500",
    status: "For verification",
  },
  {
    fileKey: "/assets/3.jpg",
    description: "Mahangin dito at maginhawa",
    guestCount: 3,
    dateRange: "feb 29 - feb 36",
    location: "Marawi, City",
    cost: "P 3,500",
    status: "In progress",
  },
  {
    fileKey: "/assets/3.jpg",
    description: "Malamig tsaka mainit",
    guestCount: 3,
    dateRange: "feb 46 - feb 38",
    location: "Downtown, Kinaladkad ng QC",
    cost: "P 36,500",
    status: "In progress",
  },
]

const Bookings = () => {
  return (
    <WidthWrapper className="mt-40 w-full">
      {dummyData.length > 0 ? (      
      <div className="px-12">
        <div className="mb-5">
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
        <div>
          <table className="w-full table-auto">
            <thead className="text-left">
              <tr>
                <th className="pl-4">Listing</th>
                <th>Guest</th>
                <th>Date</th>
                <th>Location</th>
                <th>Cost</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((data) => (
                <tr
                  className="hover:bg-primary-500 cursor-pointer"
                  key={data.fileKey}
                >
                  <td className="py-4 pl-4 rounded-tl-xl rounded-bl-xl items-center gap-5">
                    {
                      <div className="flex items-center gap-5">
                        <Image
                          className="rounded-xl"
                          width={100}
                          height={100}
                          src={data.fileKey}
                          alt="Image"
                        />
                        <span className="">{data.description}</span>
                      </div>
                    }
                  </td>
                  <td>{data.guestCount}</td>
                  <td>{data.dateRange}</td>
                  <td>{data.location}</td>
                  <td>{data.cost}</td>
                  <td className="py-4 pr-4 rounded-tr-xl rounded-br-xl">
                    <PaymentStatus />
                    {data.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      ) : (
      <div className="px-12">
        <Typography variant="h1" fontWeight="semibold">
          Trippings
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
