import Image from "next/image"
import { StarIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { ASSET_ROOT } from "@/common/constants/index"
import { ListingCardProps } from "../types/ListingCard"

const ListingCard = ({
  image,
  title,
  rating,
  description,
}: ListingCardProps) => {
  return (
    <div>
      <div className="relative h-60 w-full bg-gray-200 rounded-md">
        <Image
          src={`${ASSET_ROOT}/${image}`}
          fill
          className="rounded-md object-cover"
          alt="image"
        />
      </div>
      <div className="flex mt-3 justify-between items-center">
        <h4 className="font-semibold">{title}</h4>
        <div className="flex items-center space-x-1">
          <StarIcon className="h-4 w-4" />
          <h4>
            {" "}
            {
              // @ts-ignore
              parseFloat(rating).toFixed(1)
            }
          </h4>
        </div>
      </div>
      <Link href="#">
        <h4 className="text-gray-600 whitespace-nowrap overflow-hidden overflow-ellipsis">
          {description}
        </h4>
      </Link>
    </div>
  )
}

export default ListingCard
