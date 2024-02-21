import ModalContainer from "@/common/components/ModalContainer"
import { AllReviewsModalProps } from "../../types/AllReviewsModal"
import { Typography } from "@/common/components/ui/Typography"
import combineClasses from "@/common/helpers/combineClasses"
import ReviewCard from "../ReviewCard"
import Image from "next/image"
import { ASSET_ROOT } from "@/common/constants"
import { Button } from "@/common/components/ui/Button"

const tabs = [
  { name: "From guests", href: "#", reviewCounts: 60, current: true },
  { name: "From hosts", href: "#", reviewCounts: 0, current: false },
]

const AllReviewsModal = ({
  isOpen,
  onClose,
  reviews,
}: AllReviewsModalProps) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} size="sm">
      <div className="p-5 h-[80vh] overflow-y-auto">
        <Typography variant="h2" fontWeight="semibold">
          60 reviews
        </Typography>
        <div>
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
              id="tabs"
              name="tabs"
              className="mt-4 block w-full rounded-md border-primary-300 py-2 pl-3 pr-10 text-base focus:border-primary-600 focus:outline-none focus:ring-primary-600 sm:text-sm"
              // @ts-ignore
              defaultValue={tabs.find((tab) => tab.current).name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-4" aria-label="Tabs">
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={combineClasses(
                      tab.current
                        ? "border-gray-600 text-gray-800 font-semibold"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "whitespace-nowrap border-b-2 pt-4 pb-2 font-medium mt-4"
                    )}
                    aria-current={tab.current ? "page" : undefined}
                  >
                    <div className="flex items-center">
                      {tab.name}
                      <span className="text-[8px] mx-1">•</span>
                      {tab.reviewCounts}
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        {reviews.map((data, index) => (
          <div key={index} className="my-5">
            <div className="flex space-x-2">
              <div className="w-4/5">
                <Typography variant="h3" fontWeight="semibold">
                  Seaview Villa with 3 queen beds
                </Typography>
              </div>
              <div className="w-1/5 bg-gray-200 h-14 relative rounded-md">
                <Image
                  src={`${ASSET_ROOT}/1.jpg`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                  alt="listing-image"
                />
              </div>
            </div>
            <ReviewCard
              reviewerImage={data.user.profilePicture}
              reviewerName={
                data.user.personalInfo.firstName +
                " " +
                data.user.personalInfo.lastName
              }
              reviewMessage={data.comment}
              reviewDate={data.createdAt}
              forModal={true}
            />
            <hr />
          </div>
        ))}
        <Button variant="outline" className="text-base font-semibold">
          Show more reviews
        </Button>
      </div>
    </ModalContainer>
  )
}

export default AllReviewsModal
