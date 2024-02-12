import ModalContainer from "@/common/components/ModalContainer"
import OverallRating from "../Reviews/OverallRating"
import {
  KeyRound,
  SprayCan,
  CheckCircle2,
  MessageSquare,
  Map,
  Tag,
} from "lucide-react"
import { StarIcon } from "@heroicons/react/20/solid"
import Category from "../Reviews/Category"
import { Typography } from "@/common/components/ui/Typography"
import UserReview from "../Reviews/Review"

interface UserReviewModalProps {
  isOpen: boolean
  onClose: () => void
}

const UserReviewModal = ({ isOpen, onClose }: UserReviewModalProps) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} size="md">
      <div className="md:flex px-7 md:px-8 py-6 md:space-x-14 h-[80vh] overflow-y-scroll">
        <div className="md:w-[30%]">
          <div className="flex items-center mb-5">
            <StarIcon className="h-6 w-6 mb-1 mr-2" />
            <Typography variant="h1" fontWeight="semibold">
              4.60
            </Typography>
          </div>
          <div className="mb-4">
            <OverallRating />
          </div>
          <div>
            <Category
              isHorizontal={true}
              title="Cleanliness"
              rating="4.8"
              icon={<SprayCan strokeWidth={1} />}
            />
            <hr />
            <Category
              isHorizontal={true}
              title="Accuracy"
              rating="4.8"
              icon={<CheckCircle2 strokeWidth={1} />}
            />
            <hr />
            <Category
              isHorizontal={true}
              title="Check-in"
              rating="5.0"
              icon={<KeyRound strokeWidth={1} />}
            />
            <hr />
            <Category
              isHorizontal={true}
              title="Communication"
              rating="4.4"
              icon={<MessageSquare strokeWidth={1} />}
            />
            <hr />
            <Category
              isHorizontal={true}
              title="Location"
              rating="5.0"
              icon={<Map strokeWidth={1} />}
            />
            <hr />
            <Category
              isHorizontal={true}
              title="Value"
              rating="5.0"
              icon={<Tag strokeWidth={1} />}
            />
          </div>
        </div>
        <div className="md:w-[70%]">
          <div className="flex items-center justify-between mt-4">
            <Typography variant="h2" fontWeight="semibold">
              5 reviews
            </Typography>
            <div className="rounded-full px-1 py-1 ring-1 ring-inset ring-text-200 focus-within:z-10 focus-within:ring-2 focus-within:ring-text-600">
              <select className="block w-full border-0 text-xs py-0 pl-3 text-text-900 placeholder:text-text-400 focus:ring-0 sm:text-sm sm:leading-6 bg-transparent disabled:opacity-50">
                <option>Most recent</option>
                <option>Highest rated</option>
                <option>Lowest rated</option>
              </select>
            </div>
          </div>
          <div className="py-8 space-y-8">
            <UserReview
              avatarKey="1.jpg"
              name="Jonas"
              origin="Philippines"
              rate={5}
              date="January 2024"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel mollis purus, vitae dignissim velit. In tempus magna massa, sit amet dapibus sem convallis ac. Integer et tincidunt risus. Donec pulvinar lorem vel elit mollis mollis. In aliquam semper fringilla. Proin pulvinar nec elit at ultricies. Donec vitae nunc sit amet nulla aliquam sodales. Nam quis aliquet mauris. Quisque non mollis metus. Proin mollis eros at erat varius tristique. Maecenas sodales lacus arcu, non dictum nisi porta in. Nam feugiat urna tincidunt, mattis enim vitae, sollicitudin arcu. Vivamus volutpat ipsum sapien, id lacinia eros eleifend sed."
              showMore={false}
            />
            <UserReview
              avatarKey="1.jpg"
              name="Jonas ng Pinas"
              origin="Philippines"
              rate={5}
              date="December 2023"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel mollis purus, vitae dignissim velit. In tempus magna massa, sit amet dapibus sem convallis ac. Integer et tincidunt risus. Donec pulvinar lorem vel elit mollis mollis. In aliquam semper fringilla. Proin pulvinar nec elit at ultricies. Donec vitae nunc sit amet nulla aliquam sodales. Nam quis aliquet mauris. Quisque non mollis metus. Proin mollis eros at erat varius tristique. Maecenas sodales lacus arcu, non dictum nisi porta in. Nam feugiat urna tincidunt, mattis enim vitae, sollicitudin arcu. Vivamus volutpat ipsum sapien, id lacinia eros eleifend sed."
              showMore={false}
            />
            <UserReview
              avatarKey="1.jpg"
              name="Sung Jinwoo"
              origin="Solo Leveling"
              rate={3}
              date="February 2024"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel mollis purus, vitae dignissim velit. In tempus magna massa, sit amet dapibus sem convallis ac. Integer et tincidunt risus. Donec pulvinar lorem vel elit mollis mollis. In aliquam semper fringilla. Proin pulvinar nec elit at ultricies. Donec vitae nunc sit amet nulla aliquam sodales. Nam quis aliquet mauris. Quisque non mollis metus. Proin mollis eros at erat varius tristique. Maecenas sodales lacus arcu, non dictum nisi porta in. Nam feugiat urna tincidunt, mattis enim vitae, sollicitudin arcu. Vivamus volutpat ipsum sapien, id lacinia eros eleifend sed."
              showMore={false}
            />
          </div>
        </div>
      </div>
    </ModalContainer>
  )
}

export default UserReviewModal