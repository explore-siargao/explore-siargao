import OverallRating from "./OverallRating"
import Category from "./Category"
import {
  KeyRound,
  SprayCan,
  CheckCircle2,
  MessageSquare,
  Map,
  Tag,
} from "lucide-react"
import { StarIcon } from "@heroicons/react/20/solid"
import { Typography } from "@/common/components/ui/Typography"

const HeadReview = () => {
  return (
    <>
      <div className="flex mb-4 space-x-2">
        <StarIcon className="h-6 w-6" />
        <Typography variant={"h3"} fontWeight="semibold">
          4.60 &middot; 4 reviews
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 lg:gap-x-6 gap-y-5 lg:gap-y-0 lg:divide-x divide-y lg:divide-y-0">
        <div className="md:col-span-2 lg:col-span-2">
          <OverallRating />
        </div>
        <div className="md:col-span-3 lg:col-span-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-full md:items-center lg:divide-x">
            <Category
              title="Cleanliness"
              rating="4.8"
              isHorizontal={false}
              icon={<SprayCan strokeWidth={1.5} className="h-7 w-7" />}
            />
            <Category
              title="Accuracy"
              rating="4.8"
              isHorizontal={false}
              icon={<CheckCircle2 strokeWidth={1.5} className="h-7 w-7" />}
            />
            <Category
              title="Check-in"
              rating="5.0"
              isHorizontal={false}
              icon={<KeyRound strokeWidth={1.5} className="h-7 w-7" />}
            />
            <Category
              title="Communication"
              rating="4.4"
              isHorizontal={false}
              icon={<MessageSquare strokeWidth={1.5} className="h-7 w-7" />}
            />
            <Category
              title="Location"
              rating="5.0"
              isHorizontal={false}
              icon={<Map strokeWidth={1.5} className="h-7 w-7" />}
            />
            <Category
              title="Value"
              rating="5.0"
              isHorizontal={false}
              icon={<Tag strokeWidth={1.5} className="h-7 w-7" />}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeadReview
