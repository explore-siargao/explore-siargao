"use client"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import { Typography } from "@/common/components/ui/Typography"
import ThingsToKnow from "./components/ThingsToKnow"
import { Button } from "@/common/components/ui/Button"
import HostInformation from "./components/HostInformation"
import ImageGallery from "./components/ImageGallery"
import ImageGalleryModal from "./components/modals/ImageGalleryModal"
import { useState } from "react"
import { LucideBook, LucideMapPin} from "lucide-react"
import HighlightsSection from "./components/HighlightsSection"
import BookingDescription from "./components/BookingDescription"
import ModalAboutTitleDescription from "./components/modals/ModalAboutTitleDescription"
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

const highlightsDummy = [
  {
    id: 1,
    icon: LucideBook,
    title: "Self check-in",
    desc: "You can check in with the building staff.",
  },
  {
    id: 2,
    icon: LucideMapPin,
    title: "Great location",
    desc: "94% of recent guests gave the location a 5-star rating.",
  },
]

const DescriptionDummy = {
  generalDes:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda repellat placeat, quos aperiam amet obcaecati harum eum ipsum, ratione quam magnam sequi pariatur magni libero tempore odio numquam tenetur?",
  aboutSpace:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda repellat placeat, quos aperiam amet obcaecati harum eum ipsum, ratione quam magnam sequi pariatur magni libero tempore odio numquam tenetur?",
  aboutGuestAccess:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda repellat placeat, quos aperiam amet obcaecati harum eum ipsum, ratione quam magnam sequi pariatur magni libero tempore odio numquam tenetur?",
  otherThingsNote:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda repellat placeat, quos aperiam amet obcaecati harum eum ipsum, ratione quam magnam sequi pariatur magni libero tempore odio numquam tenetur?",
}

export const SingleView = () => {
  const [galleryModalOpen, setGalleryModalOpen] = useState(false)
  const [descriptionModalOpen, setDescriptionModalOpen] = useState(false)
  const openModal = () => {
    setGalleryModalOpen(true)
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
          <div className="w-full">
            <div className="w-full border-b py-4">
              <HighlightsSection
                hostName={HostDummy.hostName}
                hostProfilePic={HostDummy.hostProfilePic}
                hostDuration="Superhost  &#183; 11 months hosting"
                highlights={highlightsDummy}
              />
            </div>
            <div className="w-full border-b py-4">
              <BookingDescription
                onClick={() => setDescriptionModalOpen(true)}
                generalDescription={DescriptionDummy.generalDes}
              />
            </div>
          </div>
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
      <ModalAboutTitleDescription
        isOpen={descriptionModalOpen}
        onClose={() => setDescriptionModalOpen(false)}
        listingDesc={DescriptionDummy}
      />
    </WidthWrapper>
  )
}
export default SingleView
