import Image from "next/image"
import { ShieldCheckIcon, StarIcon } from "@heroicons/react/20/solid"
import { MedalIcon } from "lucide-react"
import { Typography } from "@/common/components/ui/Typography"
import { ASSET_ROOT } from "@/common/constants/index"
import { ProfileCardProps } from "../types/ProfileCard"

const ProfileCard = ({
  name,
  profileImage,
  hostStatus,
  reviewsCount,
  rating,
  hostingMonthAge,
}: ProfileCardProps) => {
  return (
    <div className="border bg-white p-8 rounded-xl shadow-lg w-full">
      <div className="grid grid-cols-5 gap-x-6">
        <div className="col-span-3 mx-auto flex flex-col items-center">
          <div className="relative h-24 w-24 rounded-full bg-gray-200">
            {profileImage && (
              <Image
                src={`${ASSET_ROOT}/1.jpg`}
                layout="fill"
                objectFit="cover"
                alt="Profile"
                className="rounded-full"
              />
            )}
            <div className="bg-primary-600 h-8 w-8 rounded-full absolute bottom-1 right-[-5px] flex items-center">
              <ShieldCheckIcon className="h-5 w-5 mx-auto text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold mt-2 text-center">{name}</h1>
          <Typography
            variant="h5"
            className="flex justify-center items-center font-semibold"
          >
            {hostStatus}
          </Typography>
        </div>
        <div className="col-span-2">
          <Typography variant="h1" fontWeight="semibold">
            {reviewsCount}
          </Typography>
          <Typography variant="h6" fontWeight="semibold">
            Reviews
          </Typography>
          <hr className="mt-3 mb-2" />
          <Typography
            variant="h1"
            fontWeight="bold"
            className="flex items-center"
          >
            {rating}
            <StarIcon className="h-4 w-5" />
          </Typography>
          <Typography variant="h6" fontWeight="semibold">
            Rating
          </Typography>
          <hr className="mt-3 mb-2" />
          <Typography variant="h1" fontWeight="bold">
            {hostingMonthAge ? hostingMonthAge : 0}
          </Typography>
          <Typography variant="h6" fontWeight="semibold">
            Months hosting
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
