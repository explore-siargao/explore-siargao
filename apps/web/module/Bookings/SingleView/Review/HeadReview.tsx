import OverallRating from "./OverallRating";
import ReviewCategory from "./ReviewCategory"
import { KeyRound, SprayCan, CheckCircle2, MessageSquare, Map, Tag } from "lucide-react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Typography } from "@/common/components/ui/Typography";

const HeadReview = () => {
    return (
        <>
            {/* Vertical Display */}
            <div className="flex mb-4 space-x-2">
                <StarIcon className="h-7 w-7"/>
                <Typography variant={"h3"} className="font-bold mt-0.5">4.60 • 5 reviews</Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 lg:gap-x-6 gap-y-5 lg:gap-y-0 lg:divide-x divide-y lg:divide-y-0">
                <div className="md:col-span-2 lg:col-span-2"><OverallRating /></div>
                <div className="md:col-span-3 lg:col-span-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-full md:items-center lg:divide-x">
                        <ReviewCategory title="Cleanliness" rating="4.8" isHorizontal={false} icon={<SprayCan />}/>
                        <ReviewCategory title="Accuracy" rating="4.8" isHorizontal={false} icon={<CheckCircle2 />}/>
                        <ReviewCategory title="Check-in" rating="5.0" isHorizontal={false} icon={<KeyRound />}/>
                        <ReviewCategory title="Communication" rating="4.4" isHorizontal={false} icon={<MessageSquare />}/>
                        <ReviewCategory title="Location" rating="5.0" isHorizontal={false} icon={<Map />}/>
                        <ReviewCategory title="Value" rating="5.0" isHorizontal={false} icon={<Tag />}/>
                    </div>
                </div>
            </div> 

            {/* Horizontal Display */}
            <div className="flex mb-4 space-x-2 mt-20">
                <StarIcon className="h-7 w-7"/>
                <Typography variant={"h3"} className="font-bold mt-0.5">4.60 • 5 reviews</Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 lg:gap-x-6 lg:divide-x gap-y-4 lg:gap-y-0">
                <div className="md:col-span-2 lg:col-span-2"><OverallRating /></div>
                <div className="md:col-span-3 lg:col-span-10">
                    <div className="grid lg:mx-4 grid-cols-1 md:grid-cols-3 h-full items-center gap-y-2 lg:gap-y-0 md:gap-x-6">
                        <div className="border-y">
                            <ReviewCategory title="Cleanliness" rating="4.8" isHorizontal={true} icon={<SprayCan />}/>
                        </div>
                        <div className="border-y">
                            <ReviewCategory title="Accuracy" rating="4.8" isHorizontal={true} icon={<CheckCircle2 />}/>
                        </div>
                        <div className="border-y">
                            <ReviewCategory title="Check-in" rating="5.0" isHorizontal={true} icon={<KeyRound />}/>
                        </div>
                        <div className="border-y">
                            <ReviewCategory title="Communication" rating="4.4" isHorizontal={true} icon={<MessageSquare />}/>
                        </div>
                        <div className="border-y">
                            <ReviewCategory title="Location" rating="5.0" isHorizontal={true} icon={<Map />}/>
                        </div>
                        <div className="border-y">
                            <ReviewCategory title="Value" rating="5.0" isHorizontal={true} icon={<Tag />}/>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default HeadReview

