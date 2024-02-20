import React from "react"
import { Typography } from "@/common/components/ui/Typography"

interface listingMarkProps {
  icon: React.ElementType
  title: string
  desc?: string
}

const ListingMark: React.FC<listingMarkProps> = ({
  icon: Icon,
  title,
  desc,
}) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 mb-2">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-8 h-8 pt-2" />}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="pl-10 pr-3">
        <Typography variant={"h5"} className="text-justify">
          {desc}
        </Typography>
      </div>
    </div>
  )
}

export default ListingMark
