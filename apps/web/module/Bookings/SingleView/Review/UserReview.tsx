import { Typography } from "@/common/components/ui/Typography"
import { StarIcon } from "@heroicons/react/20/solid"
import Image from "next/image"

const UserReview = () => {
    return (
        <div>
            <div className="flex items-center">
                <div className="profile-con h-14 w-14 relative rounded-full bg-primary-500">
                    <Image src="/logo-single.png" layout="fill" objectFit="contain" alt="" />
                </div>
                <div className="ml-4">
                    <Typography variant={"h4"} className="font-bold">Jonas</Typography>
                    <Typography variant={"h5"} className="font-semibold">Philippines</Typography>
                </div>
            </div>
            <div className="flex items-center mt-3">
                    <StarIcon className="h-3 w-3" />
                    <StarIcon className="h-3 w-3" />
                    <StarIcon className="h-3 w-3" />
                    <StarIcon className="h-3 w-3" />
                    <StarIcon className="h-3 w-3" />
                    <span className="text-[5px] text-gray-700 mx-1.5">■</span>
                    <Typography variant={"h5"} className="font-bold mt-0.5">January 2024</Typography>
            </div>
            <Typography variant={"h5"} className="font-bold max-w-[420px] mt-2">
                We stayed here for three nights for the NY celebration. The place was spotless upon our arrival,
                providing a welcoming and comfortable atmosphere. Despite being designed for two to...
            </Typography>
            <button className="text-sm font-semibold underline mt-2">Show more</button>
        </div>
    )
}

export default UserReview