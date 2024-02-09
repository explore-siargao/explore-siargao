"use client"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import { Typography } from "@/common/components/ui/Typography"
import ThingsToKnow from "./components/ThingsToKnow"
import { Button } from "@/common/components/ui/Button"
import HostInformation from "./components/HostInformation"
import ImageGallery from "./components/ImageGallery"
import ImageGalleryModal from "./components/modals/ImageGalleryModal"
import { useState } from "react"
import HeadReview from "./Review/HeadReview"
import UserReview from "./Review/UserReview"
import UserReviewModal from "./Review/UserReviewModal"
const HouseRulesDummy = [
  { id: 1, rule: "Check-in: 12:00 PM - 7:00 PM" },
  { id: 2, rule: "Checkout before 10:00 AM" },
  { id: 3, rule: "8 guests maximum" },
]

const SafetyPropertiesDummy = [
  { id: 1, rule: "Pool/hot tub without a gate or lock" },
  { id: 2, rule: "Nearby lake, river, other body of water" },
  { id: 3, rule: "Carbon monoxide alarm" },
]
const CancellationPoliciesDummy = [
  { id: 1, rule: "This reservation is non-refundable." },
  {
    id: 2,
    rule: "Review the Host’s full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.",
  },
]

const HostDummy = {
  hostName: "Jose Rizal",
  hostProfilePic: "1.jpg",
  joinedIn: "July 20, 2020",
  countReviews: 100,
  rules: [
    {
      id: 1,
      title: "During your stay",
      description:
        "Owner David is available by email and phone and Messenger and usually on-site, and managers Genny and Bert are available on-site and by phone and Messenger.",
    },
  ],
  responseRate: 70,
  responseTime: "Reply after 4 Hours",
}

const ImagesDummy = [
  {
    fileKey: "1.jpg",
    alt: "Image 1",
  },
  {
    fileKey: "2.jpg",
    alt: "Image 2",
  },
  {
    fileKey: "3.jpg",
    alt: "Image 3",
  },
  {
    fileKey: "4.jpg",
    alt: "Image 4",
  },
  {
    fileKey: "5.jpg",
    alt: "Image 5",
  },
]
const userReviews = [
  {
    imageSrc: "1.jpg",
    name: "John Doe Junior",
    origin: "Mandaluyong",
    rate: 5,
    date: "January 1, 1889",
    review:
      "Owner David is available by email and phone and Messenger and usually on-site, and managers Genny and Bert are available on-site and by phone and Messenger.",
    showMore: true,
  },
  {
    imageSrc: "2.jpg",
    name: "Jane Villanueva",
    origin: "Metro Mainla",
    rate: 4,
    date: "February 15, 1890",
    review: "Great experience overall! Maayos ang doormat",
    showMore: true,
  },
  {
    imageSrc: "1.jpg",
    name: "John Doe Junior",
    origin: "Mandaluyong",
    rate: 5,
    date: "January 1, 1889",
    review:
      "Owner David is available by email and phone and Messenger and usually on-site, and managers Genny and Bert are available on-site and by phone and Messenger.",
    showMore: true,
  },
  {
    imageSrc: "2.jpg",
    name: "Jane Villanueva",
    origin: "Metro Mainla",
    rate: 4,
    date: "February 15, 1890",
    review: "Great experience overall! Maayos ang doormat",
    showMore: true,
  },
]

export const SingleView = () => {
  const [galleryModalOpen, setGalleryModalOpen] = useState(false)
  const openModal = () => {
    setGalleryModalOpen(true)
  }

  const [showMoreModalOpen, setShowMoreModalOpen] = useState(false)

  const openShowMoreModal = () => {
    setShowMoreModalOpen(true)
  }
  const closeShowMoreModal = () => {
    setShowMoreModalOpen(false)
  }

  return (
    <WidthWrapper width="medium" className="my-24 lg:my-32">
      <div className="w-full pb-8">
        <Typography variant={"h2"} className="py-4">
          {"Listing Title"}
        </Typography>
        <ImageGallery imageKeys={ImagesDummy} openModal={openModal} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 border-b pb-6">
        <div>
          <div>{/* Description */}</div>
          <div>{/* What place offer */}</div>
          <div>{/* Date range picker */}</div>
        </div>
        <div>{/* Only add the reservation panel here */}</div>
      </div>
      <div className="border-b pb-6 pt-6">
        <HostInformation
          countReviews={HostDummy.countReviews}
          hostName={HostDummy.hostName}
          hostProfilePic={HostDummy.hostProfilePic}
          joinedIn={HostDummy.joinedIn}
          responseRate={HostDummy.responseRate}
          responseTime={HostDummy.responseTime}
          rules={HostDummy.rules}
        />
      </div>

      <div>
        <HeadReview />
      </div>

      <div className="pt-10">
        <div className="flex w-full mt-4 mb-6 flex-wrap">
          {userReviews.map((review, index) => (
            <div className="w-full md:w-1/2" key={`review-${review.name}`}>
              <div className="mt-7 pr-5">
                <UserReview
                  imageSrc={review.imageSrc}
                  name={review.name}
                  origin={review.origin}
                  rate={review.rate}
                  date={review.date}
                  review={review.review}
                  showMore={true}
                />
              </div>
            </div>
          ))}
        </div>
        <Button
          variant={"outline"}
          className="my-6"
          onClick={openShowMoreModal}
        >
          Show Reviews
        </Button>
        <UserReviewModal
          isOpen={showMoreModalOpen}
          onClose={() => closeShowMoreModal()}
        />
      </div>
      <div className="pt-10">
        <Typography variant={"h2"}>Things to know</Typography>
        <div className="flex w-full mt-4 mb-6">
          <div className="w-full md:w-1/3">
            <ThingsToKnow title="House Rules" rules={HouseRulesDummy} />
            <Button
              className="text-md p-1 font-semibold underline"
              variant={"ghost"}
            >
              Show more &gt;
            </Button>
          </div>
          <div className="w-full md:w-1/3">
            <ThingsToKnow
              title="Safety & Property"
              rules={SafetyPropertiesDummy}
            />
            <Button
              className="text-md p-1 font-semibold underline"
              variant={"ghost"}
            >
              Show more &gt;
            </Button>
          </div>
          <div className="w-full md:w-1/3">
            <ThingsToKnow
              title="Cancellation policy"
              rules={CancellationPoliciesDummy}
            />
            <Button
              className="text-md p-1 font-semibold underline"
              variant={"ghost"}
            >
              Show more &gt;
            </Button>
          </div>
        </div>
      </div>

      <ImageGalleryModal
        isOpen={galleryModalOpen}
        onClose={() => setGalleryModalOpen(false)}
      />
    </WidthWrapper>
  )
}
export default SingleView
