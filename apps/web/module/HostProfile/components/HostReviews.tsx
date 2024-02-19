import { Typography } from "@/common/components/ui/Typography"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ReviewCard from "./ReviewCard"
import { Button } from "@/common/components/ui/Button"
import { HostReviewsProps } from "../types/HostReviews"

const HostReviews = ({name, reviewsCount, reviews}: HostReviewsProps) => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <Typography variant="h1" fontWeight="semibold">{name}'s reviews</Typography>
                <div className="hidden md:block space-x-2">
                    <button className="border border-gray-300 p-2 rounded-full disabled:opacity-40" disabled>
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="border border-gray-300 p-2 rounded-full">
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
            <div className="mt-8">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                    {reviews.map((data, index) => (
                        <ReviewCard 
                            key={index}
                            reviewerName={data.user.personalInfo.firstName + " " + data.user.personalInfo.lastName} 
                            reviewMessage={data.comment} 
                            reviewerImage={data.user.profilePicture} 
                            reviewDate={data.createdAt}
                        />
                    ))}
                </div>
                <Button variant="outline" className="font-bold text-[16px] w-full md:w-auto mt-7">Show all {reviewsCount} reviews</Button>
                <Typography variant="h6" className="mt-7">
                    Some info has been automatically translated. 
                    <a href="#" className="underline ml-1 font-semibold">Show original</a>
                </Typography>
            </div>
        </div>
    )
}

export default HostReviews