import { Typography } from "@/common/components/ui/Typography"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ListingCard from "./ListingCard"
import { HostListingsProps } from "../types/HostListings"

const HostListings = ({ name, listings }: HostListingsProps) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Typography variant="h1" fontWeight="semibold">
          {name}'s listings
        </Typography>
        <div className="hidden md:block space-x-2">
          <button
            className="border border-gray-300 p-2 rounded-full disabled:opacity-40"
            disabled
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="border border-gray-300 p-2 rounded-full">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.map((data, index) => (
          <ListingCard
            key={index}
            image={data.imageKeys.fileKey}
            title={data.title}
            rating={5}
            description={"Sample description"}
          />
        ))}
      </div>
    </div>
  )
}

export default HostListings
