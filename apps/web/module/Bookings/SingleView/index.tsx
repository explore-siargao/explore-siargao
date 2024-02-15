"use client"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import ThingsToKnow from "./components/ThingsToKnow"
import HostInformation from "./components/HostInformation"
import BookingDescription from "./components/BookingDescription"
import SectionInfo from "./components/SectionInfo"
import SummaryInfo from "./components/SummaryInfo"
import AvatarTitleDescription from "./components/AvatarTitleDescription"
import RatingSummary from "./components/Reviews/RatingSummary"
import UserReviews from "./components/Reviews/UserReviews"
import Highlights from "./components/Highlights"
import CheckoutProcess from "./components/CheckoutBox"
import PlaceOffers from "./components/PlaceOffers"
import WhereYoullBeDescription from "./components/Map"
import ListingDateRangePicker from "./components/ListingDateRangePicker"
import { Button } from "@/common/components/ui/Button"
import { Flag } from "lucide-react"
import ModalReporting from "./components/modals/ModalReporting"
import { useState } from "react"

const reportListingArr = [
  {
    name: "It's a scam",
    choices: [
      {
        reason: "The host asked me to pay outside of Airbnb",
        description: "Ex: Wire transfer, cash, bank transfer",
      },
    ],
  },
  {
    name: "It's inaccurate",
    choices: [
      {
        reason: "This is for second item",
        description: "Ex: this is for second item",
      },
      {
        reason: "This is for the description for second item",
        description: "Ex: this is for second item",
      },
    ],
  },
  {
    name: "It's not a real place to stay",
    choices: [
      {
        reason: "This is for third item",
        description: "Ex: This is for the third item",
      },
    ],
  },
  {
    name: "It's offensive",
    choices: [
      {
        reason: "This is for fourth item",
        description: "Ex: for fourth item",
      },
    ],
  },
]

const imageGallery = [
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

const highlights = [
  {

    icon: "wifi",
    title: "Self check-in",
    description: "You can check in with the building staff.",
  },
  {
    id: 2,
    icon: "wifi",
    title: "Great location",
    description: "94% of recent guests gave the location a 5-star rating.",
  },
]

const description = {
  generalDescription:
    "Welcome to this stunning private villa located just near one of the most beautiful  beaches of Siargao. Enjoy scenic private outdoor pool views & stylishly furnished spacious  indoor  with a touch of local art. All hidden in 800 m2 tropical garden.",
  aboutSpace:
    "Welcome to this stunning private villa located just near one of the most beautiful beaches of Siargao. Enjoy scenic private outdoor pool views & stylishly furnished spacious indoor with a touch of local art. All hidden in 800 m2 tropical garden. The unique mixture of modern design & tropical nature provides comfort and privacy whilst offering unique experience of luxurious getaway in a jungle paradise.",
  aboutGuestAccess:
    "This spacious 1-bedroom villa is for full and exclusive use of our guests, which have 24h access to the property provided during their stay. To keep our Guests' privacy and safety the building is fenced and can be locked from inside and outside. The guests have unlimited access to private outdoor pool and bath tube with hot water. Free access to WiFi connection is provided.",
  otherThingsNote:
    "We recommend to our guests to have a motorbike or scooter to reach the house or get there by van from the airport (we can arrange this for you). Please be aware that the last part of the road to the villa is through a dirt road, that usually gets muddy during heavy rains, which occur between December and February. Please make sure you are comfortable driving a scooter/motorbike on a dirt road or rent a trike from General Luna.",
}

const offers = [
  {
    icon: "wifi",
    description: "WiFi",
    isNotIncluded: false,
  },
  {
    icon: "wifi",
    description: "Free street parking",
    isNotIncluded: false,
  },
  {
    icon: "wifi",
    description: "No smoking",
    isNotIncluded: false,
  },
  {
    icon: "wifi",
    description: "Smoke alarm",
    isNotIncluded: false,
  },
  {
    icon: "wifi",
    description: "Bed",
    isNotIncluded: false,
  },
  {
    icon: "wifi",
    description: "Angry people",
    isNotIncluded: false,
  },
  {
    icon: "wifi",
    description: "Alarm clock",
    isNotIncluded: true,
  },
  {
    icon: "wifi",
    description: "No bugs",
    isNotIncluded: false,
  },
]

const group = [
  {
    title: "Entertainment",
    offers: [
      { description: "WiFi", icon: "wifi", isNotIncluded: false },
      { description: "Free street parking", icon: "wifi", isNotIncluded: false },
    ],
  },
  {
    title: "Bedroom and laundry",
    offers: [
      { description: "Bed", icon: "wifi", isNotIncluded: false },
      { description: "Angry people", icon: "wifi", isNotIncluded: false },
    ],
  },
  {
    title: "Family",
    offers: [
      { description: "Alarm", icon: "wifi", isNotIncluded: false },
      { description: "Smoke alarm", icon: "wifi", isNotIncluded: false },
    ],
  },
  {
    title: "Not Included",
    offers: [
      { description: "Bug", icon: "wifi", isNotIncluded: true },
      {
        description: "Cigarette off",
        icon: "wifi",
        isNotIncluded: true,
      },
    ],
  },
]

export const SingleView = () => {
  const [showModal, setShowModal] = useState(false)
  const handleOpenModal = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <WidthWrapper width="small" className="mt-32 lg:mt-36">
      <SectionInfo images={imageGallery} title="Villa Manao · Private Pool | Bathtub | Sky shower" />
      <div className="flex flex-col md:flex-row gap-8 md:gap-24 pb-12">
        <div className="flex-1 md:w-1/2 2xl:w-full">
          <div className="divide-y">
            <div className="pb-6">
              <SummaryInfo
                address="Entire villa in General Luna, Philippines"
                guest={2}
                bedroom={1}
                beds={1}
                baths={1}
                reviews={4}
                stars={5}
              />
            </div>
            <div className="py-6">
              <AvatarTitleDescription
                avatarKey="2.jpg"
                title="Hosted by Simon"
                subTitle="4 months hosting"
              />
            </div>
            <div className="py-6">
              <Highlights highlights={highlights} />
            </div>
            <div className="py-6">
              <BookingDescription {...description} />
            </div>
            <div className="py-6 ">
              <PlaceOffers offers={offers} group={group} />
            </div>
            <div className="py-6">
              <ListingDateRangePicker title="Villa Manao · Private Pool | Bathtub | Sky shower" />
            </div>
          </div>
        </div>
        <div className="md:w-96 md:relative">
          <div className="md:sticky md:top-0">
            <CheckoutProcess
              checkoutDesc={{
                serviceFee: 1000,
                durationCost: 125000,
                descTotalBeforeTaxes: 3000,
                totalBeforeTaxes: 126000,
                titlePrice: 25000,
              }}
            />
            <div className="flex justify-center">
              <div className="justify-items-center">
                <Button
                  variant="ghost"
                  className="underline md:float-right flex gap-1 items-center text-text-400 hover:text-text-600"
                  size="sm"
                  onClick={handleOpenModal}
                >
                  <Flag className="h-4 w-4" />
                  Report this listing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y border-t">
        <div className="py-8">
          <RatingSummary />
        </div>
        <div className="py-8">
          <UserReviews />
        </div>
        <div className="py-8">
          <WhereYoullBeDescription
            whereYoullBeDesc={{
              location: "General Luna, Caraga, Philippines",
              coordinates: [14.5129, 21.4342],
              desc: "Mantaray Siargao is located in Purok 1, General Luna. A quiet residential area close to the heart of town. The property is nestled between the beach and the main road, allowing guests like you to easily drive or hail a tricycle to town.",
            }}
          />
        </div>
        <div className="py-8">
          <HostInformation />
        </div>
        <div className="pt-8">
          <ThingsToKnow />
        </div>
      </div>
      <ModalReporting
        isOpen={showModal}
        onClose={handleCloseModal}
        reportListingArr={reportListingArr}
      />
    </WidthWrapper>
  )
}
export default SingleView
